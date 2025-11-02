# PowerShell script to push to GitHub
# Replace YOUR_USERNAME and REPOSITORY_NAME below

Write-Host "=== GitHub Push Helper ===" -ForegroundColor Cyan
Write-Host ""

# Get GitHub details
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name"

# Construct GitHub URL
$githubUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Adding remote: $githubUrl" -ForegroundColor Yellow

# Add remote
git remote add origin $githubUrl

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow

# Push to GitHub
git push -u origin main

Write-Host ""
Write-Host "Done! Your code is on GitHub!" -ForegroundColor Green
Write-Host "Visit: $githubUrl" -ForegroundColor Cyan

