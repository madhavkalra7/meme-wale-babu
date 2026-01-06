# 🎭 Meme Wale Babu

<div align="center">

![Meme Wale Babu](https://img.shields.io/badge/Meme-Wale%20Babu-ff69b4?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A fun and interactive meme sharing platform built with Flask** 🚀

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## 🌟 Features

- 🎨 **Beautiful UI** - Modern and responsive design
- 👤 **User Authentication** - Secure login and signup system
- 📸 **Meme Gallery** - Browse and enjoy a collection of memes
- 🎮 **Mini Games** - Fun games integrated into the platform
- 👥 **User Profiles** - Personalized user profiles
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Python** | Backend Logic |
| **Flask** | Web Framework |
| **SQLAlchemy** | Database ORM |
| **HTML/CSS** | Frontend Structure & Styling |
| **JavaScript** | Interactive Features |
| **Alembic** | Database Migrations |

## 📁 Project Structure

```
meme-wale-babu/
├── 📄 meme.py              # Main Flask application
├── 📁 static/              # Static files (CSS, JS, Images)
│   ├── 🎨 meme.css
│   ├── 🎨 memes.css
│   ├── 🎨 games.css
│   ├── ⚡ meme.js
│   ├── ⚡ memes.js
│   ├── ⚡ games.js
│   ├── ⚡ login.js
│   ├── ⚡ signup.js
│   └── 📁 images/
├── 📁 Templates/           # HTML Templates
│   ├── 🌐 login.html
│   ├── 🌐 signup.html
│   ├── 🌐 meme.html
│   ├── 🌐 memes.html
│   ├── 🌐 profile.html
│   └── 📁 games/
│       └── 🌐 games.html
├── 📁 migrations/          # Database migrations
├── 📁 instance/            # Instance-specific config
└── 📄 README.md
```

## 🚀 Installation

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/madhavkalra7/meme-wale-babu.git
   cd meme-wale-babu
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install flask flask-sqlalchemy flask-migrate
   ```

4. **Initialize the database**
   ```bash
   flask db init
   flask db migrate
   flask db upgrade
   ```

5. **Run the application**
   ```bash
   python meme.py
   ```

6. **Open your browser**
   ```
   http://localhost:5000
   ```

## 💻 Usage

1. **Sign Up** - Create a new account
2. **Login** - Access your account
3. **Browse Memes** - Enjoy the meme collection
4. **Play Games** - Have fun with mini-games
5. **Profile** - Manage your profile

## 📸 Screenshots

<div align="center">

| Home Page | Meme Gallery |
|-----------|--------------|
| 🏠 Landing Page | 📸 Browse Memes |

| Games | Profile |
|-------|---------|
| 🎮 Mini Games | 👤 User Profile |

</div>

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

<div align="center">

**Madhav Kalra**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/madhavkalra7)

</div>

---

<div align="center">

⭐ **Star this repo if you like it!** ⭐

Made with ❤️ and lots of ☕

</div>
