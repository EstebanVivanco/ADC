const express = require('express');
const conexion = require('./database/bd');
const router = express.Router();
//Settings

router.get('/',  (req, res)=>{

    res.render('login');

})

router.get('/index',  (req, res)=>{

    conexion.query('SELECT planes.ID, planes.precio, planes.facturacion, suscripcion.nombre  FROM planes INNER JOIN suscripcion ON planes.suscripcion_id_fk = suscripcion.id', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('index', {results: results});
            console.log('results', results)
        }

    });

})

router.get('/create',  (req, res)=>{

    conexion.query('SELECT * FROM tipo_suscripcion', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('buscar', {results: results, data : 0});
        }

    });

})

router.post('/buscar',  (req, res)=>{

    const id = req.body.id;


    conexion.query('SELECT * FROM tipo_suscripcion', (error, results) => {

        if (error) throw error;      
        
        conexion.query('SELECT * FROM suscripcion WHERE id_tipo = ? ',[id] ,(errordata, data) => {

            if (errordata) throw errordata;            
            
            res.render('buscar', {results:results,data: data} );
            
        });

    });





})



const crud = require('./controllers/crud');
router.post('/save', crud.save);
module.exports = router;