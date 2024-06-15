// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Mock users database
// const users = [
//     {username: 'testuser', password: 'testpass' }
// ];

// // Login endpoint

// app.post('/api/login', (req, res) => {
//     const {username, password} = req.body;

//     const user = users.find(u => u.username === username && u.password === password)

//     if (user) {
//         res.status(200).json({message: 'Login succesful' });
//     }
//     else {
//         res.status(401).json({message: 'Invalid username or password'});

//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })