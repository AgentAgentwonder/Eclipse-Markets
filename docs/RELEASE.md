# Releasing Eclipse Market Trading (Private / Draft Releases)

## 1. Create a GitHub Personal Access Token (PAT)
- Go to GitHub -> Settings -> Developer settings -> Personal access tokens -> Tokens (classic).
- Create a token with `repo` and `workflow` scopes.
- Do NOT share this token. Add it to your GitHub repo secrets as `GH_TOKEN` (Settings -> Secrets and variables -> Actions).

## 2. Local publish (useful for testing)
```powershell
$env:GH_TOKEN = "ghp_xxx_your_new_token_here"
./publish_release.ps1 -Version v1.0.0
