@echo off
cd /d "%~dp0"
title Subir web MENTCREATIVA a GitHub
echo ============================================================
echo   SUBIR WEB DE MENTCREATIVA A GITHUB
echo ============================================================
echo.
echo Antes de ejecutar esto debes haber creado el repositorio en:
echo   https://github.com/new
echo Nombre: MENTCREATIVA-WEB (ya creado)
echo Importante: NO marques "Add a README file", ni .gitignore, ni license.
echo.
set /p USU="Tu usuario de GitHub [JCBELART]: "
if "%USU%"=="" set USU=JCBELART
set /p REPO="Nombre del repositorio [MENTCREATIVA-WEB]: "
if "%REPO%"=="" set REPO=MENTCREATIVA-WEB
echo.
echo Preparando la carpeta: "%cd%"
git init
git branch -M main
git config user.name "Joan Carles"
git config user.email "joancarlesdisseny@hotmail.com"
git add .
git commit -m "Web Mentcreativa - clavada al original"
git remote remove origin 2>nul
git remote add origin https://github.com/%USU%/%REPO%.git
echo.
echo Subiendo a GitHub. Si aparece una ventana de login, identificate.
echo.
git push -u origin main
echo.
echo ============================================================
echo   FIN. Comprueba en https://github.com/%USU%/%REPO%
echo   que aparecen las carpetas es, ca, en, fr y assets.
echo ============================================================
pause
