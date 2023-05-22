const express = require('express');
const conexion = require('./database/bd');
const router = express.Router();
//Settings

router.get('/',  (req, res)=>{

    res.render('login');

})

router.get('/crearsub',  (req, res)=>{

    conexion.query('SELECT * FROM tipo_suscripcion', (error, results) => {
        res.render('crearsub', {results: results});
    })

})

router.get('/graficas',  (req, res)=>{


    
    conexion.query('SELECT ts.nombre AS tipo_suscripcion, SUM(p.precio) AS total_gasto FROM tipo_suscripcion ts JOIN suscripcion s ON ts.id = s.Id_tipo JOIN planes p ON s.ID = p.SUSCRIPCION_ID_FK GROUP BY ts.nombre', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('graficas', {results: results});
            console.log('results :>> ', results);
        }

    });

})

router.get('/calendario',  (req, res)=>{

    conexion.query('SELECT suscripcion.nombre AS title, DATE_FORMAT(planes.FACTURACION, "%m/%d/%Y") AS start FROM planes INNER JOIN suscripcion ON planes.suscripcion_id_fk = suscripcion.id', (error, results) => {

        if (error){
            throw error;            
        }else{
            res.render('calendar', {results: results});
        }

    });


})

router.get('/index',  (req, res)=>{

    conexion.query('SELECT planes.ID, planes.precio, DATE_FORMAT(planes.facturacion, "%m/%d/%Y") AS Fecha, suscripcion.nombre as "sus", tipo_suscripcion.nombre FROM planes INNER JOIN suscripcion ON planes.suscripcion_id_fk = suscripcion.id INNER JOIN tipo_suscripcion ON suscripcion.id_tipo = tipo_suscripcion.id', (error, results) => {

        if (error){
            throw error;            
        }else{
            
            res.render('index', {results: results});
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

router.get('/update/:id',  (req, res)=>{

    const id = req.params.id;

    conexion.query('SELECT PRECIO, FACTURACION, ID FROM planes where id= ?',[id], (error, results) => {

        if (error){
            throw error;            
        }else{
            
            const precio = results[0].PRECIO;
            const ID = results[0].ID;

            //Formateo de fecha
            const date = results[0].FACTURACION;
            const fecha = new Date(date);
            const dia = fecha.getDate().toString().padStart(2, "0");
            const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
            const anio = fecha.getFullYear().toString();
            const fechaFormateada = `${anio}-${mes}-${dia}`;

            res.render('update', {precio, fechaFormateada, ID});

        }

    });

})

router.get('/delete/:id',  (req, res)=>{

    const id = req.params.id;

    conexion.query('DELETE FROM planes WHERE ID = ?',[id], (error, results) => {

        if (error){
            throw error;            
        }else{
            res.redirect('/index');
        }

    });

})


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/savenew', crud.savenew);
router.post('/update', crud.update);
module.exports = router;