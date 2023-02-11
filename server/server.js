require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 3500;
app.use(cors());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_SRV)
const db = mongoose.connection
db.on('error', (e) => {console.log(e)})
db.once('open', () => console.log('Connectet to database'))


// built-in middleware for json 
app.use(express.json());

app.use('/kb', require('./routes/knowledgeBase.js'));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 