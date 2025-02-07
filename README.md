## Stage 1 Backend - Number Classification API

### 📌 Task Overview

This API takes a number as input and returns interesting mathematical properties about it, along with a fun fact fetched from an external API.

---

### 🚀 Features

- Accepts a number as a query parameter
- Determines whether the number is:
  - **Prime**
  - **Perfect**
  - **Armstrong**
  - **Even/Odd**
- Calculates the sum of its digits
- Fetches a fun fact about the number
- Returns results in **JSON format**

---

### 🛠️ Technology Stack

- **Backend**: Node.js (Express)
- **Hosting**: Render
- **API Integration**: Numbers API
- **Version Control**: GitHub

---

### 📡 API Endpoint

#### GET Request:

```plaintext
https://hng12-stage1-2.onrender.com/api/classify-number?number=<your_number>
```

#### Example Request:

```plaintext
https://hng12-stage1-2.onrender.com/api/classify-number?number=371
```

#### ✅ Success Response (200 OK):

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### ❌ Error Response (400 Bad Request):

```json
{
  "number": "alphabet",
  "error": true
}
```

---

### 📖 How to Use

#### Clone this repository:

```sh
git clone https://github.com/ajeibi/hng12-backend-stage-1.git
```

#### Navigate into the project directory:

```sh
cd hng12-stage1
```

#### Install dependencies:

```sh
npm install
```

#### Start the server:

```sh
npx nodemon src/server.js
```

#### Open your browser and visit:

```plaintext
http://localhost:5000/api/classify-number?number=371
```

---

### 📌 Important Notes

- Ensured **CORS** is handled properly.
- Fun facts are fetched from the **Numbers API**.

---

### 🎯 Developed for HNG Stage 1 Backend Challenge
