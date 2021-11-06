export const turnosquerys = {

getturnosxlegajo: "select convert(datetime,turno_fecha)+convert(datetime,turno_horainicio) as turno_fechahora, "+
                        "convert(datetime,turno_fecha)+convert(datetime,turno_horafin) as turno_fechahorafin,"+
                         "* from turno t inner join empleado e on t.turno_legajoempleado=e.emp_legajo "+
                                        "inner join paciente p on t.turno_nrohc=p.pac_nrohc "+
                                        "inner join tipo_turno tt on t.turno_idtipo=tt.tipoturno_id "+
                                        "inner join estado_turno et on t.turno_idestado=et.estadoturno_id "+
                                        "where turno_legajoempleado = @turno_legajoempleado",

getprofesionales: "select * from empleado e inner join usuario u on e.emp_legajo=u.usu_usuario "+
                                            "inner join usuario_perfil p on u.usu_id=p.usu_id "+
                                            "where p.usu_idperfil=2",

getagendaxlegajo: "select * from agenda where agen_activo=1 and agen_legajoempleado=@agen_legajoempleado",

modificarestadoturno: "update turno set turno_idestado=@turno_idestado where turno_id = @turno_id",

nuevoturno:  "INSERT INTO turno (turno_legajoempleado,turno_fecha,turno_horainicio,turno_horafin,turno_nrohc,"+
                    "turno_idtipo,turno_idestado) "+
                    "VALUES (@turno_legajoempleado,@turno_fecha,@turno_horainicio,@turno_horafin,@turno_nrohc,"+
                    "@turno_idtipo,@turno_idestado)",

actualizarhorafin: "UPDATE turno SET turno_fecha=@turno_fecha,turno_horainicio=@turno_horainicio, turno_horafin=@turno_horafin WHERE turno_id = @turno_id",
}