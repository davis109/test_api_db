const express = require('express');
const bodyParser = require('body-parser');
const tutorialsRouter = require('./routes/tutorials');

const app = express();
const PORT = process.env.PORT || 3001; // Changed to port 3001 as default

app.use(bodyParser.json());
app.use('/api/tutorials', tutorialsRouter);

// Add a simple root route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Tutorial API. Use /api/tutorials to access the API.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
