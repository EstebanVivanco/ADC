const express = require('express');
const conexion = require('./database/bd');
const router = express.Router();
//Settings

router.get('/',  (req, res)=>{

    conexion.query('SELECT * FROM planes', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('index');
            console.log('results', results)
        }

    });

})


module.exports = router;