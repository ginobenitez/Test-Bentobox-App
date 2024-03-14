const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(cors());
app.use(bodyParser.json());
const path = require("path");

/*const url = 'mongodb+srv://sonny:sonny@bigprojectstart.0bz0gkq.mongodb.net/?retryWrites=true&w=majority&appName=BigProjectStart';
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(url);
client.connect(console.log("mongodb connected"));*/

require('dotenv').config();
const url = process.env.MONGODB_URI;
console.log(url);
const MongoClient = require('mongodb').MongoClient; 
const client = new MongoClient(url);
client.connect();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Path to your Swagger/OpenAPI specification file

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Register endpoint
app.post('/api/register', async (req, res, next) => {
    const { first, last, login, email, password } = req.body;
    const newUser = { first: first, last: last, login: login, email: email, password: password };

    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db("AppNameDB");
        const collection = db.collection("users");

        const result = await collection.insertOne(newUser);

        // Return success response with the inserted user's details
        const ret = { userID: result.insertedId, error: '' };
        res.status(200).json(ret);

        client.close();
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login endpoint
app.post('/api/login', async (req, res, next) => {
    const { login, password } = req.body;

    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const db = client.db("AppNameDB");
        const collection = db.collection("users");

        const user = await collection.findOne({ login: login, password: password });

        if (user) {
            const ret = {
                id: user._id, // Assuming the _id field is used for userID
                firstName: user.first,
                lastName: user.last,
                email: user.email,
                error: ''
            };
            res.status(200).json(ret);
        } else {
            res.status(401).json({ error: 'Invalid user name/password' });
        }

        client.close();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept,Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});
/*
// For Heroku deployment
// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}
*/

// For Heroku deployment
// Specify custom domain for production
if (process.env.NODE_ENV === 'production') {
    app.listen(PORT, 'www.bentobox.club', () => {
        console.log('Server listening on port ' + PORT);
    });
} else {
    // For local development
    app.listen(PORT, () => {
        console.log('Server listening on port ' + PORT);
    });
}
/*app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});*/