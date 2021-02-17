const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use('/api/v1', homeRoutes);

app.listen(3000, () => {
    console.log('Server ON');
});
