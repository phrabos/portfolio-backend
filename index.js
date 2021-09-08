const app = require('./app');

const PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
	console.log(`spinning on port ${PORT}`);
});
