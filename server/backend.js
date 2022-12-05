import Movies from './moviedata.js';
import Express  from 'express'; 
import knex from 'knex';
const port = 3001
const app = Express();
const knex = require('knex')(require('../../knexfile.js')["development"])


app.listen(port, () => {console.log('Youre in Muh Fuggah!!')
})


app.get('/',(req,res) => {
    res.send('Hacking to the Gate!!!!')
    .knex(*)

})
app.get('/home',(req,res) => {
 })



