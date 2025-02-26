# Setup Instructions for CodeIT

Thank you for downloading CodeIT! Follow these steps to get started.

## 📦 What's Included

This package contains the complete source code for CodeIT, ready to be set up on your machine.

## 🚀 Quick Start

### Step 1: Install Dependencies

Open PowerShell/Command Prompt and navigate to the project folder:

```powershell
cd path\to\Code-Sync-main
```

**Install Server Dependencies:**
```powershell
cd server
npm install
```

**Install Client Dependencies:**
```powershell
cd ..\client
npm install
```

### Step 2: Configure Environment Variables

#### Server Configuration

1. Navigate to `server` folder
2. Copy `.env.example` to `.env`:
   ```powershell
   cd server
   copy .env.example .env
   ```
3. Edit `.env` file and add your Hugging Face token:
   ```env
   PORT=3000
   HF_TOKEN=your_actual_huggingface_token
   ```

**Get your Hugging Face Token:**
- Visit: https://huggingface.co/settings/tokens
- Create a new token (Read access is enough)
- Copy and paste into `.env` file

#### Client Configuration

1. Navigate to `client` folder
2. Copy `.env.example` to `.env`:
   ```powershell
   cd ..\client
   copy .env.example .env
   ```
3. The default values should work:
   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

### Step 3: Start the Application

**Terminal 1 - Start Backend Server:**
```powershell
cd server
npm run dev
```

**Terminal 2 - Start Frontend Client:**
```powershell
cd client
npm run dev
```

### Step 4: Access the Application

Open your browser and go to:
```
http://localhost:5173
```

## ✅ You're Ready!

- Create a room or join an existing one
- Share the Room ID with your team
- Start collaborating in real-time!

## 📚 Need Help?

Check out the main README.md file for:
- Detailed feature documentation
- Usage guide
- Troubleshooting tips
- Contributing guidelines

## 🐛 Common Issues

**Port Already in Use:**
- Change the PORT in `server/.env` to a different number (e.g., 3001)
- Update `VITE_BACKEND_URL` in `client/.env` accordingly

**Dependencies Not Installing:**
- Make sure you have Node.js v18+ installed
- Try deleting `node_modules` and running `npm install` again

**Cannot Connect to Server:**
- Ensure both server and client are running
- Check that firewall isn't blocking the ports
- Verify the backend URL in client `.env` matches server port

---

**Happy Coding! 🚀**
