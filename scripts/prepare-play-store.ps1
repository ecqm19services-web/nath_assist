# =====================================================================
# SP4 — Préparer MemoRise / Nath Assist pour le Google Play (TWA/Bubblewrap)
# ---------------------------------------------------------------------
# RÔLE : outiller le dépôt. Ce script FAIT ce qui est possible ici (build,
# contrôle des prérequis, génération du squelette Bubblewrap) et RAPPELLE
# les étapes qui exigent un poste hors-dépôt (Java 8+, Android SDK, Play
# Console) — sans jamais simuler ce qu'il ne peut pas faire.
#
# PowerShell 5.1 : pas de '&&', utiliser ';'. Lancer depuis la racine du dépôt.
# =====================================================================

$ErrorActionPreference = 'Stop'
$Racine = Split-Path -Parent $PSScriptRoot
Set-Location $Racine

# 1) L'URL publique où vit l'app + son manifeste (le TWA les télécharge au 1er lancement).
# C'est la page GitHub Pages du dépôt — pas /icf/, chemin qui n'a jamais été publié.
$UrlApp    = 'https://ecqm19services-web.github.io/nath_assist/'
$UrlManifeste = "$UrlApp`manifest.webmanifest"

Write-Host ''
Write-Host '=== SP4 — Prépa Play Store (TWA) ===' -ForegroundColor Cyan
Write-Host "App        : $UrlApp"
Write-Host "Manifeste  : $UrlManifeste"
Write-Host ''

# 2) Contrôler les prérequis d'un poste de build Android (sinon, on s'arrête honnêtement).
# Get-Command plutôt que « & 'java -version' » : l'appel avec espace dans la chaîne
# échouait même quand l'outil était installé — la détection doit dire la vérité.
$manques = @()
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { $manques += 'Node.js' }
if (-not (Get-Command java -ErrorAction SilentlyContinue))  { $manques += 'Java 8+ (JDK)' }
if (-not $env:ANDROID_HOME -and -not $env:ANDROID_SDK_ROOT) { $manques += 'Android SDK (ANDROID_HOME)' }

# 3) Builder le site (le manifeste durci doit être présent dans dist/).
Write-Host '— Build du site (manifeste + pré-cache)…' -ForegroundColor Yellow
npm.cmd run build
if (-not (Test-Path 'dist/manifest.webmanifest')) {
  throw 'manifest.webmanifest absent de dist/ — le build a échoué.'
}

# 4) Si les prérequis manquent : on affiche la marche à suivre et on s'arrête proprement.
if ($manques.Count -gt 0) {
  Write-Host ''
  Write-Host ("PRÉREQUIS HORS-DÉPÔT manquants : {0}" -f ($manques -join ', ')) -ForegroundColor Red
  Write-Host 'Installer puis relancer. Le TWA ne se construit pas sans JDK + Android SDK.' -ForegroundColor Red
  Write-Host '  - JDK 17 recommandé ; Android SDK (cmdline-tools + platform 34+ + build-tools).'
  Write-Host '  - Voir checklist plus bas (cible Android 16 / targetSdk 36 obligatoire dès le 31/08/2026).'
  exit 0
}

# 5) Squelette Bubblewrap (npx évite un install global). 'init' crée android/ ; 'build' signe.
Write-Host '— Génération du projet TWA (Bubblewrap)…' -ForegroundColor Yellow
npx.cmd --yes @bubblewrap/cli init --manifest $UrlManifeste --force

Write-Host ''
Write-Host 'Projet TWA généré dans ./android. Étapes suivantes :' -ForegroundColor Green
Write-Host @'
  1) npx @bubblewrap/cli build          -> produit app-release-signed.aab + assetlinks.json
  2) Copier android/app/src/main/.../assetlinks.json sur le site, servi à :
        https://.../.well-known/assetlinks.json   (Digital Asset Links = "votre app = votre site")
  3) Vérifier dans android/app/build.gradle :
        targetSdkVersion 36   (Android 16 — EXIGÉ par Play depuis le 31/08/2026 ; < 35 = rejet)
        minSdkVersion  23     (large couverture téléphones)
  4) Play Console : créer la fiche, téléverser le .aab, politique de confidentialité,
     questions "data safety", captures d'écran (téléphone), icône 512 maskable dédiée.
'@ -ForegroundColor Gray
Write-Host ''
Write-Host 'NB : le 1er lancement d’un TWA nécessite une connexion (il télécharge shell+assets).' -ForegroundColor Yellow
Write-Host '     Tout le reste de l’app fonctionne ensuite HORS-LIGNE (pré-cache PWA).' -ForegroundColor Yellow
