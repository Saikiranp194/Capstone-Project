# ♻️ Recycle - Waste Management Web Application

A full-stack web application developed as a capstone project to streamline waste collection, landfill tracking, and revenue data management. The platform offers a secure, user-friendly interface for data entry and monitoring while ensuring strong backend integration and authentication mechanisms.

---

## 📌 Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Developer Info](#developer-info)

---

## 📖 Project Overview

The **Recycle** platform allows users to:
- Register and securely log in.
- Input, edit, and visualize data related to:
  - Collection operations
  - Landfill records
  - Revenue reports
- Experience seamless client-server communication and secure data handling.

This project demonstrates proficiency in full-stack development, secure authentication, database modeling, and frontend-backend integration.

---

## ✨ Features

- 🔐 **Authentication**: User registration, login, and password recovery using JWT and bcrypt.
- 📋 **Data Management**: JSON-based sample datasets for collections, landfill data, and revenue.
- 🎨 **Frontend Interface**: Clean HTML/CSS with JavaScript-based client logic.
- 🧠 **Security Middleware**: Helmet for HTTP header protection, input validation, and secure token storage.
- 🚀 **API Integration**: RESTful APIs with Express.js and MongoDB backend.

---

## 🛠 Tech Stack

### Frontend
- HTML5, CSS3
- JavaScript (Vanilla)

### Backend
- Node.js
- Express.js

### Security & Middleware
- Helmet
- JSON Web Tokens (JWT)
- Bcrypt.js
- Validator

### Database
- MongoDB (via Mongoose ODM)

### Dev Tools
- Nodemon for live development

---

## 🚀 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/IS-Capstone-project.git
   cd IS-Capstone-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

---

## 💻 Usage

- Visit `http://localhost:3000` (or your configured port).
- Use the provided `Login`, `SignUp`, and `ForgotPass` HTML pages to interact.
- Data is stored and retrieved from MongoDB.
- For demonstration, sample data files are available:
  - `sampleCollectionData.json`
  - `sampleLandfillData.json`
  - `sampleRevenueData.json`

---

## 📁 Folder Structure

```
IS-Capstone-project/
│
├── public/
│   ├── Login.html
│   ├── SignUp.html
│   ├── ForgotPass.html
│   ├── CSS/
│   └── JavaScript/
│
├── src/
│   └── server.js         # Entry point
│
├── sample*.json          # Example datasets
├── package.json
└── README.md
```

---

## 👨‍💻 Developer Info

**Saikiran**  
Data Engineer with 4+ years of IT experience and 3+ years in Java development.  
Skilled in full-stack development, cloud deployment (AWS), and secure microservice design.  
Technologies: React, Spring Boot, MongoDB, AWS, Docker, Kubernetes, Jenkins, SQL, and more.

📜 Certifications: AWS Solutions Architect | Database Specialist  
🌐 Previous Employer: BairesDev

---

## 📬 Contact

Feel free to connect or provide feedback!  
📧 Email: Saikiranp194@gmail.com  
🔗 LinkedIn: (https://www.linkedin.com/in/pakasaikiran)

---

> © 2025 Recycle - Capstone Project by Saikiran
