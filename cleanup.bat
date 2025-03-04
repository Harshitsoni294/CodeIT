@echo off
echo Cleaning up CodeIT project for distribution...
echo.

echo [1/4] Removing node_modules directories...
if exist "client\node_modules" (
    rmdir /s /q "client\node_modules"
    echo     - Removed client\node_modules
) else (
    echo     - client\node_modules not found
)

if exist "server\node_modules" (
    rmdir /s /q "server\node_modules"
    echo     - Removed server\node_modules
) else (
    echo     - server\node_modules not found
)

echo.
echo [2/4] Removing build directories...
if exist "client\dist" (
    rmdir /s /q "client\dist"
    echo     - Removed client\dist
)

if exist "server\dist" (
    rmdir /s /q "server\dist"
    echo     - Removed server\dist
)

echo.
echo [3/4] Removing environment files...
if exist "client\.env" (
    del /q "client\.env"
    echo     - Removed client\.env
)

if exist "server\.env" (
    del /q "server\.env"
    echo     - Removed server\.env
)

echo.
echo [4/4] Removing lock files...
if exist "client\package-lock.json" (
    del /q "client\package-lock.json"
    echo     - Removed client\package-lock.json
)

if exist "server\package-lock.json" (
    del /q "server\package-lock.json"
    echo     - Removed server\package-lock.json
)

echo.
echo ========================================
echo Cleanup complete! Project is ready to zip.
echo ========================================
echo.
echo Next steps:
echo 1. Right-click the Code-Sync-main folder
echo 2. Select "Send to" ^> "Compressed (zipped) folder"
echo 3. Share the ZIP file
echo.
pause
