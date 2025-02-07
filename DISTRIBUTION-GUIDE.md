# CodeIT - Prepare for Distribution

## 🧹 Manual Cleanup Steps

Some files might be locked by your IDE or other processes. Follow these steps:

### Step 1: Close All Applications
1. **Close VS Code / Cursor** (or any IDE with this project open)
2. **Close any terminals** running the dev servers
3. **Close any file explorers** viewing this folder

### Step 2: Delete These Folders Manually

Navigate to the project folder and delete these directories:

#### In `client` folder:
- Delete `node_modules` folder
- Delete `dist` folder (if it exists)
- Delete `.env` file (if it exists)

#### In `server` folder:
- Delete `node_modules` folder  
- Delete `dist` folder (if it exists)
- Delete `.env` file (if it exists)

### Step 3: What to Keep

Make sure these files exist (they contain setup instructions):
- ✅ `.env.example` (in both client and server folders)
- ✅ `README.md` (in root)
- ✅ `SETUP.md` (in root)
- ✅ `package.json` (in both client and server)

### Step 4: Create ZIP

**Option A - Using File Explorer:**
1. Right-click the `Code-Sync-main` folder
2. Select "Send to" → "Compressed (zipped) folder"
3. Rename to `CodeIT-Package.zip`

**Option B - Using PowerShell:**
```powershell
cd D:\codeit
Compress-Archive -Path Code-Sync-main -DestinationPath CodeIT-Package.zip -Force
```

## 📦 What Gets Included in ZIP

### ✅ Include:
- Source code (all `.ts`, `.tsx`, `.js` files)
- Configuration files (`package.json`, `tsconfig.json`, etc.)
- Assets (images, SVGs in `public` folder)
- Documentation (`README.md`, `SETUP.md`)
- Environment examples (`.env.example` files)

### ❌ Exclude:
- `node_modules` folders (too large, can be regenerated)
- `dist` or `build` folders (generated files)
- `.env` files (contain sensitive data)
- Lock files (can be regenerated)
- IDE folders (`.vscode`, `.idea`)

## 📊 Expected ZIP Size

After cleanup, your ZIP should be approximately:
- **Without node_modules**: ~2-5 MB
- **With node_modules**: ~500+ MB (DON'T include these!)

## 📝 Include These Instructions

When sharing the ZIP, tell the recipient to:

1. **Extract the ZIP file**
2. **Read `SETUP.md`** for installation steps
3. **Run** `npm install` in both `client` and `server` folders
4. **Configure** `.env` files from `.env.example` templates
5. **Start** the application following SETUP.md

## 🔒 Security Checklist

Before sharing, verify:
- [ ] No `.env` files (only `.env.example`)
- [ ] No `node_modules` folders
- [ ] No API keys or tokens in code
- [ ] `README.md` is complete
- [ ] `SETUP.md` has clear instructions

## 🚀 Alternative: Git Repository

Consider creating a private Git repository instead:
1. Create a new GitHub/GitLab repository
2. Push the clean code
3. Share repository access with the recipient
4. They can clone it directly

This is cleaner and allows for version control!

---

**Need help?** Check if processes are locking files:
```powershell
# Close terminals in Cursor/VS Code
# Close File Explorer windows
# Restart if needed
```
