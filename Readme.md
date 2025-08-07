# Tutorial API

A simple RESTful API for managing tutorials built with Node.js, Express, and MySQL.

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd tutapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the database

1. Make sure your MySQL server is running
2. Create the database and tables by running the SQL script:

```bash
mysql -u root -p < init-db.sql
```

### 4. Configure database connection

Update the database configuration in `db.js` if needed:

```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your-password',
  database: 'tutorial_db'
});
```

### 5. Start the server

```bash
npm start
```

The server will start on http://localhost:3001

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tutorials | Get all tutorials |
| GET | /api/tutorials?title=keyword | Search tutorials by title |
| GET | /api/tutorials/:id | Get tutorial by ID |
| GET | /api/tutorials/published/all | Get all published tutorials |
| POST | /api/tutorials | Create a new tutorial |
| PUT | /api/tutorials/:id | Update a tutorial |
| DELETE | /api/tutorials/:id | Delete a tutorial |
| DELETE | /api/tutorials | Delete all tutorials |

## Example Usage

### Create a tutorial

```bash
curl -X POST http://localhost:3001/api/tutorials \
  -H "Content-Type: application/json" \
  -d '{"title":"MySQL Tutorial", "description":"Learn MySQL database management"}'
```

### Get all tutorials

```bash
curl http://localhost:3001/api/tutorials
```