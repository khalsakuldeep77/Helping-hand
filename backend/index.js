const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('itna bhi nahi ata bsdk');
});

const port = process.env.port || 5000;

app.listen(port, () => console.log('listening on port 5000'));
