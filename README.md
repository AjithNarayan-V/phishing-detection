# 🛡️ Phishing Detection System

A full-stack application that detects phishing URLs using machine learning.

**Components:**
- Frontend: React.js (Port 3000)
- Backend: Node.js/Express (Port 5002)  
- ML Service: Python Flask (Port 5001)

## 📋 Prerequisites Installation

### 1. Install Node.js
- Go to https://nodejs.org/
- Download the LTS version
- Run the installer and follow the setup wizard
- **Verify:** Open terminal and run `node --version`

### 2. Install Python
- Go to https://www.python.org/downloads/
- Download Python 3.8 or higher
- **Important:** Check "Add Python to PATH" during installation
- **Verify:** Open terminal and run `python --version`

### 3. Install Git (Optional)
- Go to https://git-scm.com/downloads
- Download and install
- **Verify:** Run `git --version`

## 🚀 Setup & Run

### Step 1: Start ML Service (Python)
```bash
cd ml_model
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python flask_api.py
```
**Keep this terminal open!** Should show: `Running on http://127.0.0.1:5001`

### Step 2: Start Backend (Node.js)
**Open new terminal:**
```bash
cd backend
npm install
node server.js
```
**Keep this terminal open!** Should show: `Server running on http://localhost:5002`

### Step 3: Start Frontend (React)
**Open new terminal:**
```bash
cd frontend
npm install
npm start
```
Browser will open automatically to `http://localhost:3000`

## 🧪 Test the Application

1. Go to `http://localhost:3000`
2. Enter a URL in the input field
3. Click "Check URL"
4. See the result below

**Test URLs:**
- Safe: `https://www.google.com`
- Phishing: `http://secure-account-update.com`

## 🔧 Troubleshooting

**Port already in use?**
- Close other applications using ports 3000, 5001, 5002
- Or restart your computer

**Module not found?**
- Make sure you ran `npm install` in the correct directory
- Delete `node_modules` folder and run `npm install` again

**Python dependencies fail?**
- Try: `pip3 install -r requirements.txt`
- Or: `python -m pip install -r requirements.txt`

**Frontend shows errors?**
- Make sure backend (port 5002) and ML service (port 5001) are running first
- Check all three services are running in separate terminals

## 📁 Project Structure
```
phishing-detection/
├── frontend/          # React app
├── backend/           # Node.js API
└── ml_model/          # Python ML service
```

## 🎯 How It Works
1. User enters URL in React frontend
2. Frontend sends to Node.js backend
3. Backend forwards to Python ML service
4. ML service analyzes URL and returns result
5. Result displays in frontend

**To stop services:** Press `Ctrl + C` in each terminal window.