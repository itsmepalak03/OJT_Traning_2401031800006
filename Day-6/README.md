# Feane Website Project

## Git Setup Commands

```bash
git init
git add .
git commit -m "Initial Commit"
```

## GitHub Upload

```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_LINK
git push -u origin main
```

## Important
- `.gitignore` added for API keys and unnecessary files.
- Never upload `.env` files to GitHub.
- Keep secret API keys inside `.env`.

## Example `.env`

```env
API_KEY=your_secret_key
```
