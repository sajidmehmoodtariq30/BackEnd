import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "First Joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Second Joke",
            content: "This is another joke"
        },
        {
            id: 3,
            title: "Third Joke",
            content: "This is last Joke"
        }
    ];
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
