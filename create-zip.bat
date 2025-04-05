@echo off
echo Creating ZIP file for CodeIT...
echo.

cd ..
set "source=Code-Sync-main"
set "destination=CodeIT-Package.zip"

echo Compressing files...
powershell -command "Compress-Archive -Path '%source%' -DestinationPath '%destination%' -Force"

if exist "%destination%" (
    echo.
    echo ========================================
    echo SUCCESS! ZIP file created successfully!
    echo ========================================
    echo.
    echo File location: %cd%\%destination%
    echo.
    echo You can now share this file!
    echo.
) else (
    echo.
    echo ERROR: Failed to create ZIP file.
    echo.
)

pause
