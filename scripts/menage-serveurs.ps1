$ports = 4173, 8790, 8791
foreach ($p in $ports) {
  $conns = Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue
  foreach ($c in $conns) {
    Write-Output ("tue PID " + $c.OwningProcess + " sur port " + $p)
    Stop-Process -Id $c.OwningProcess -Force -ErrorAction SilentlyContinue
  }
}
Write-Output "menage-fait"
