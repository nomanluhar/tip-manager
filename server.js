const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const tipRoutes = require('./routes/tipRoutes');

const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/tip', tipRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
