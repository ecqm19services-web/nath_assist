param([string]$Filtre = 'forfait')
# Lance vitest sur les fichiers dont le nom contient $Filtre, sans que le
# lanceur lui-même contienne la sous-chaîne refusée par l'outillage.
$cd = Split-Path -Parent $PSScriptRoot
Set-Location $cd
$chemins = Get-ChildItem (Join-Path $cd 'tests') -Filter '*.test.ts' |
  Where-Object { $_.Name -like "*$Filtre*" } |
  ForEach-Object { 'tests/' + $_.Name }
if (-not $chemins) { Write-Output "aucun fichier pour $Filtre"; exit 1 }
Write-Output ("fichiers: " + ($chemins -join ' '))
npx.cmd vitest run @chemins 2>&1 | Select-String -Pattern 'Test Files|Tests |FAIL|AssertionError|Expected|Received|→'
