@echo off
setlocal
cd /d "%~dp0"
set PORT=8790

echo ============================================
echo   La Casita del Molde - servidor local
echo ============================================
echo.
echo Sirviendo: %cd%
echo URL:       http://localhost:%PORT%/
echo.
echo Deja esta ventana abierta mientras navegas el sitio.
echo Para detener el servidor, cierra esta ventana o presiona Ctrl+C.
echo.

start "" http://localhost:%PORT%/

where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server %PORT%
) else (
  py -m http.server %PORT%
)

echo.
echo El servidor se detuvo.
pause
