exports.GuardarSolicitud = (req,res)=>{

    const ruts = req.body.contenedordatos;
    const sala_id = req.body.idsala;
    const codigo_solicitud = uuidv4().replace(/-/g, ''); 
    const arrayruts = ruts.split(",");
    let usuario_id;
    
    conexion.query('SELECT COUNT(*) AS count FROM usuarios WHERE rut IN (?)',[arrayruts] , (error, results) => {
            
        const counts = results[0].count;
        const sexo = arrayruts.length;

            if (error){
                console.log('error :>> ', error);
            }else{
                

                if (sexo === counts) {
                    
                    for (const rutovich of arrayruts){


                        console.log(rutovich);

                            conexion.query('SELECT usuario_id FROM usuarios WHERE RUT = ? ', [rutovich] , (error, results) => {

                                if (error){
                                    throw error;            
                                }else{

                                    usuario_id = results[0]['usuario_id'] ;

                                    let fecha_solicitud = moment().add(0, 'hours').format("YYYY:MM:DD");     
                                    let hora_inicio = moment().format("hh:mm:ss");
                                    let hora_final = moment().add(30, 'seconds').format('hh:mm:ss')

                                    conexion.query('INSERT INTO solicitud SET ?', { usuario_id_fk: usuario_id, sala_id_fk: sala_id, codigo_solicitud : codigo_solicitud , fecha_solicitud : fecha_solicitud ,hora_inicio : hora_inicio, hora_final : hora_final} , (error, results) => {
                                        
                                        if (error){
                                            throw error;            
                                        }else{
                                            

                                            conexion.query('UPDATE salas SET estado_sala_id_fk = 2 WHERE sala_id = ?; ', [ sala_id], (error, results) => {
                                                if(error){
                                                    throw error;
                                                }
                                            }); 

                                        }
                                    });

                                }


                        }); 
                        
                    }

                    res.render('registrofinalizado');  


                }else{
                    res.render('error',{msg : ruts})
                }

            }
            
    });




        
}
