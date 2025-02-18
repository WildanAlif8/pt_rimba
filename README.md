# Laravel User API

## 📌 Deskripsi
Proyek ini adalah API sederhana menggunakan Laravel 9 yang menyediakan fitur CRUD untuk entitas **User**. Setiap **User** memiliki atribut berikut:
- `id` (UUID)
- `name` (string)
- `email` (string, unique)
- `age` (number)

Fitur utama dari API ini meliputi:
- CRUD (Create, Read, Update, Delete) untuk User
- Validasi input menggunakan middleware
- Logging setiap request
- Pengujian menggunakan Jest/Mocha

---

## 📂 Struktur Proyek
```
📁 project-root/
│-- app/
│   │-- Http/
│   │   │-- Controllers/
│   │   │   └── UserController.php
│   │   │-- Middleware/
│   │   │   └── ValidateUserInput.php
│   │-- Models/
│   │   └── User.php
│-- database/
│   │-- migrations/
│   │   └── 2025_xx_xx_create_users_table.php
│-- routes/
│   └── api.php
│-- tests/
│   │-- Feature/
│   │   └── UserApiTest.php
│-- package.json
│-- README.md
```

---

## 🚀 Instalasi & Menjalankan Proyek

### 1️⃣ **Clone Repository**
```sh
git clone <repository-url>
cd project-root
```

### 2️⃣ **Konfigurasi Environment**
Buat file **.env** berdasarkan contoh `.env.example`:
```sh
cp .env.example .env
```
Lalu, atur konfigurasi database:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 3️⃣ **Install Dependencies**
```sh
composer install
npm install
```

### 4️⃣ **Generate Key & Migrasi Database**
```sh
php artisan key:generate
php artisan migrate
```

### 5️⃣ **Jalankan Server**
```sh
php artisan serve --host=127.0.0.1 --port=8000
```
API akan tersedia di: **`http://127.0.0.1:8000/api`**

---

## 🛠️ **Fitur API**
### 📌 **1. Membuat User**
**Endpoint:** `POST /api/users`
```json
{
  "name": "Testing",
  "email": "tes@gmail.com",
  "age": 20
}
```

### 📌 **2. Mendapatkan Semua User**
**Endpoint:** `GET /api/users`

### 📌 **3. Mendapatkan User Berdasarkan ID**
**Endpoint:** `GET /api/users/{id}`

### 📌 **4. Mengupdate User**
**Endpoint:** `PUT /api/users/{id}`
```json
{
  "name": "John Updated",
  "age": 30
}
```

### 📌 **5. Menghapus User**
**Endpoint:** `DELETE /api/users/{id}`

---

## 🧪 **Pengujian (Testing)**

### **1️⃣ Jalankan Server Laravel**
```sh
php artisan serve --host=127.0.0.1 --port=8000
```

### **2️⃣ Jalankan Jest untuk Pengujian API**
```sh
npm test
```

Jika berhasil, semua pengujian akan **lulus** ✅

---

## ✨ **Penutup**
Proyek ini dibuat untuk memenuhi **Tes Full Stack Developer** di **Rimba Ananta Vikasa Indonesia**. Semoga sukses! 🚀

