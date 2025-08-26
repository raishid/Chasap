const express = require('express');
const path = require('path');
const app = express();

console.log('Starting server...');
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
	console.log('Serving index.html');
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));