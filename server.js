import express from 'express';
import bodyParser from 'body-parser';
import AuthController from './controller/AuthController.js';  // Corrected import with .js extension

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.post('/api/login', (req, res) => AuthController.login(req, res));  // Call login method

app.use(express.json());

app.get('/', (req, res) => {
    res.send('my port is running');
});

app.post('/data', (req, res) => {
    const data = req.body;
    res.json({ message: "data received", data });
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
