// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('Server running on port: ' + port);
});

// Create comments array
const comments = [
    {
        id: 1,
        username: 'alice',
        comment: 'Hello from Alice'
    },
    {
        id: 2,
        username: 'bob',
        comment: 'Hello from Bob'
    },
    {
        id: 3,
        username: 'charlie',
        comment: 'Hello from Charlie'
    }
];