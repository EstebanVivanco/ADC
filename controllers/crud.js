const { query } = require('../database/bd');
const conexion = require('../database/bd');


exports.save = (req, res) =>{

    const usuario_id_fk = 1;
    const suscripcion_id_fk = req.body.id_sus;
    const precio = req.body.precio;
    const facturacion = req.body.date;

    conexion.query('INSERT INTO planes SET ?', { usuario_id_fk:usuario_id_fk, suscripcion_id_fk:suscripcion_id_fk, precio:precio, facturacion:facturacion  }, (error, results2)=>{
        
        if (error) {
            console.log(error);
        }else{

            conexion.query('SELECT planes.ID, planes.precio, DATE_FORMAT(planes.facturacion, "%m/%d/%Y") AS Fecha, suscripcion.nombre as "sus", tipo_suscripcion.nombre FROM planes INNER JOIN suscripcion ON planes.suscripcion_id_fk = suscripcion.id INNER JOIN tipo_suscripcion ON suscripcion.id_tipo = tipo_suscripcion.id', (error, results) => {
            
                
                res.render('buscar',{
                    alert:true,
                    alertTitle: 'Todo correcto',
                    alertMessage: 'Suscripción correctamente!',
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'index',
                    results:results,
                    data : 0
                })

            })

        }
    })
}

exports.savenew = (req, res) =>{

    const name = req.body.nombre;
    const tipo = req.body.tipo;

    conexion.query('INSERT INTO suscripcion SET ?', { Nombre:name, Id_tipo: tipo}, (error, results2)=>{
        
        if (error) {
            console.log(error);
        }else{

            conexion.query('SELECT planes.ID, planes.precio, DATE_FORMAT(planes.facturacion, "%m/%d/%Y") AS Fecha, suscripcion.nombre as "sus", tipo_suscripcion.nombre FROM planes INNER JOIN suscripcion ON planes.suscripcion_id_fk = suscripcion.id INNER JOIN tipo_suscripcion ON suscripcion.id_tipo = tipo_suscripcion.id', (error, results) => {
            
                res.render('crearsub',{
                    alert:true,
                    alertTitle: 'Nueva Suscripción Creada',
                    alertMessage: 'se ha añadido '+ name + '!',
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'crearsub',
                    results:results,
                    data : 0
                })

            })

        }
    })
}

exports.update = (req, res) =>{

    const precio = req.body.precio;
    const date = req.body.date;
    const id = req.body.id;

    conexion.query('UPDATE planes SET ? WHERE id = ?', [{precio:precio, facturacion:date}, id], (error, results)=>{
        if(error){
            throw error;
        }
        else{

            conexion.query('SELECT planes.ID, planes.precio, DATE_FORMAT(planes.facturacion, "%m/%d/%Y") AS Fecha, suscripcion.nombre as "sus", tipo_suscripcion.nombre FROM planes INNER JOIN suscripcion ON planes.suscripcion_id_fk = suscripcion.id INNER JOIN tipo_suscripcion ON suscripcion.id_tipo = tipo_suscripcion.id', (error, results) => {
                
                
                res.render('buscar',{
                    alert:true,
                    alertTitle: 'Todo correcto',
                    alertMessage: 'Se ha actualizado correctamente!',
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'index',
                    results:results,
                    data : 0
                })

            })

        }
    })



}

