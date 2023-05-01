require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 3500;
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (e) => {console.log(e)})
db.once('open', () => console.log('Connectet to database'))


// built-in middleware for json 
app.use(express.json());

app.use('/kb', require('./routes/knowledgeBase.js'));
app.use('/inventory', require('./routes/inventory.js'));
app.use('/users', require('./routes/users.js'));
app.use('/stats', require('./routes/stats.js'));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 