# Publier la branche gh-pages sans effacer les versions d'avant.
#
# Pourquoi : un visiteur qui n'a pas rechargé peut tenir en main le bundle de la
# veille. Si ses fichiers ont disparu du serveur, son Service Worker, lui, est
# encore vivant — et un fichier absent est un écran blanc. La purge intégrale de
# .deploy faisait exactement ça. On remplace donc la coquille (index.html, sw.js,
# manifest, icônes) et on laisse vivre les derniers bundles dans assets/.
#
# Usage : npm.cmd run build ; then scripts\publier-gh-pages.ps1 -Message "..."
param(
  [string]$Message = "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

$ErrorActionPreference = 'Stop'
$racine = Split-Path -Parent $PSScriptRoot
$deploy = Join-Path $racine '.deploy'
$dist = Join-Path $racine 'dist'

# Les quatre garde-fous : un worktree intact, sur la bonne branche, avec un vrai
# build complet — Service Worker compris.
if (-not (Test-Path (Join-Path $deploy '.git'))) {
  throw 'Le worktree .deploy est absent ou sans .git — refuser de toucher à gh-pages.'
}
$branche = (git -C $deploy rev-parse --abbrev-ref HEAD).Trim()
if ($branche -ne 'gh-pages') {
  throw "Le worktree .deploy est sur « $branche », pas sur « gh-pages »."
}
if (-not (Test-Path (Join-Path $dist 'index.html'))) {
  throw 'dist/index.html absent — lancer « npm.cmd run build » avant de publier.'
}
# Le Service Worker est la promesse du hors-ligne. Un build tue avant la fin
# produit une coquille sans sw.js : la publier volerait l'offline aux visiteurs.
if (-not (Test-Path (Join-Path $dist 'sw.js'))) {
  throw "dist/sw.js absent — le build n'a pas généré de Service Worker. Refuser de publier un site sans hors-ligne."
}

# 1. Tout part, sauf le dépôt git et les bundles déjà publiés.
Get-ChildItem $deploy -Force | Where-Object { $_.Name -ne '.git' -and $_.Name -ne 'assets' } |
  Remove-Item -Recurse -Force

# 2. La nouvelle version arrive ; les anciens fichiers de assets/ survivent.
New-Item -ItemType Directory -Force -Path (Join-Path $deploy 'assets') | Out-Null
Copy-Item (Join-Path $dist '*') $deploy -Recurse -Force

# 3. On ne s'embourbe pas : cinq versions suffisent à couvrir les sessions ouvertes.
foreach ($motif in @('index-*.js', 'index-*.css')) {
  Get-ChildItem (Join-Path $deploy "assets\$motif") -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime -Descending | Select-Object -Skip 5 | Remove-Item -Force
}

# 4. Le commit seulement — la poussée reste un geste à part, vérifié en conscience.
git -C $deploy add -A
$modifications = (git -C $deploy status --porcelain | Measure-Object).Count
if ($modifications -gt 0) {
  git -C $deploy commit -m $Message | Out-Null
  Write-Output "publie : $(git -C $deploy rev-parse --short HEAD)"
} else {
  Write-Output 'rien a publier : identique a ce qui est deja en ligne'
}
