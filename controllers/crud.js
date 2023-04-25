const { query } = require('../database/bd');
const conexion = require('../database/bd');


exports.save = (req, res) =>{

    const usuario_id_fk = 1;
    const suscripcion_id_fk = req.body.id_sus;
    const precio = req.body.precio;
    const facturacion = req.body.date;


    conexion.query('INSERT INTO planes SET ?', { usuario_id_fk:usuario_id_fk, suscripcion_id_fk:suscripcion_id_fk, precio:precio, facturacion:facturacion  }, (error, results)=>{
        
        if (error) {
            console.log(error);
        }else{
            res.redirect('/index');

        }
    })
}