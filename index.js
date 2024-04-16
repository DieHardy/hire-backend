const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express();
const PORT = 3000   

app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'daily'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('connected')
});
app.post('/api/newApplication', (req, res)=>{
    const {name, topics, questions, video, discord, telegram, email, reward } = req.body;
    let post = {name, topics, questions, video, discord, telegram, email, reward: JSON.stringify(reward)};
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result)
    });
})
app.listen(PORT, (req, res)=>{
    console.log(`server started on ${PORT}`)
})
