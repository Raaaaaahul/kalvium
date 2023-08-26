const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Available GET Endpoints</title>
        </head>
        <body>
            <h1 style="color: #333; text-align: center;">Available GET Endpoints</h1>
            
            <h2 style="color: #666;">Calculate</h2>
            <p>Endpoint: /numbers/{expression}</p>
            <p>Sample: <a href="/numbers/plus/5/minus/3/into/2" style="color: blue;">/numbers/plus/5/minus/3/into/2</a></p>
            
            <h2 style="color: #666;">History</h2>
            <p>Endpoint: /history</p>
            <p>Sample: <a href="/history" style="color: blue;">/history</a></p>
            
            <h2 style="color: #666;">Home</h2>
            <p>Endpoint: /home</p>
            <p>Sample: <a href="/home" style="color: blue;">Home</a></p>
        </body>
        </html>
    `;

    res.set('Content-Type', 'text/html');

    res.send(html);
});

module.exports = router;
