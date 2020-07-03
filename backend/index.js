const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('itna bhi nahi ata bsdk');
});

app.listen('5000', () => console.log('listening on port 5000'));
