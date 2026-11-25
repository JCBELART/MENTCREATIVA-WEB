@echo off
cd /d "%~dp0"
title Subir web MENTCREATIVA a GitHub
echo ============================================================
echo   SUBIR WEB DE MENTCREATIVA A GITHUB
echo   Usuario: JCBELART   Repo: MENTCREATIVA-WEB
echo ============================================================
echo.
echo No hay que escribir nada. Si aparece una ventana de GitHub,
echo identificate y autoriza ("Sign in with your browser").
echo.
git init
git branch -M main
git config user.name "Joan Carles"
git config user.email "joancarlesdisseny@hotmail.com"
git add .
git commit -m "Web Mentcreativa - clavada al original"
git remote set-url origin https://github.com/JCBELART/MENTCREATIVA-WEB.git
if errorlevel 1 git remote add origin https://github.com/JCBELART/MENTCREATIVA-WEB.git
echo.
echo Remote configurado:
git remote -v
echo.
echo Subiendo a GitHub...
git push -u origin main
echo.
echo ============================================================
echo   FIN. Comprueba en https://github.com/JCBELART/MENTCREATIVA-WEB
echo   que aparecen las carpetas es, ca, en, fr y assets.
echo ============================================================
pause
