@echo off
setlocal EnableDelayedExpansion

echo ============================================================
echo  APN YOUTH - cPanel Deploy Builder
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/4] Installing dependencies...
call npm install
if errorlevel 1 (
  echo ERROR: npm install failed
  pause & exit /b 1
)

echo.
echo [2/4] Running Next.js static export build...
call npm run build
if errorlevel 1 (
  echo ERROR: Build failed. Check the output above.
  pause & exit /b 1
)

echo.
echo [3/4] Creating out-cpanel folder...
if exist "out-cpanel" rmdir /s /q "out-cpanel"
mkdir "out-cpanel"

echo Copying static export files...
xcopy /E /I /Y "out" "out-cpanel"

echo Copying .htaccess for cPanel routing...
copy /Y ".htaccess-cpanel" "out-cpanel\.htaccess"

echo.
echo [4/4] Creating ZIP archive for upload...
if exist "cpanel-upload.zip" del "cpanel-upload.zip"

powershell -Command "Compress-Archive -Path 'out-cpanel\*' -DestinationPath 'cpanel-upload.zip' -Force"
if errorlevel 1 (
  echo WARNING: Could not create ZIP automatically.
  echo Please manually ZIP the contents of the 'out-cpanel' folder.
) else (
  echo ZIP created: cpanel-upload.zip
)

echo.
echo ============================================================
echo  BUILD COMPLETE
echo ============================================================
echo.
echo  Upload option A (recommended):
echo    Upload 'cpanel-upload.zip' via cPanel File Manager
echo    then Extract to public_html (or your subdirectory)
echo.
echo  Upload option B:
echo    FTP the contents of 'out-cpanel\' directly to public_html
echo.
echo  The .htaccess inside handles all routing automatically.
echo ============================================================
echo.
pause
