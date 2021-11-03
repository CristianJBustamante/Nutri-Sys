export const turnosquerys = {

getturnosxlegajo: "select convert(datetime,turno_fecha)+convert(datetime,turno_horainicio) as turno_fechahora, "+
                         "* from turno t inner join empleado e on t.turno_legajoempleado=e.emp_legajo "+
                                        "inner join paciente p on t.turno_nrohc=p.pac_nrohc "+
                                        "inner join tipo_turno tt on t.turno_idtipo=tt.tipoturno_id "+
                                        "inner join estado_turno et on t.turno_idestado=et.estadoturno_id "+
                                        "where turno_legajoempleado = @turno_legajoempleado",

getprofesionales: "select * from empleado e inner join usuario u on e.emp_legajo=u.usu_usuario "+
                                            "inner join usuario_perfil p on u.usu_id=p.usu_id "+
                                            "where p.usu_idperfil=2",

getagendaxlegajo: "select * from agenda where agen_activo=1 and agen_legajoempleado=@agen_legajoempleado",

modificarestadoturno: "update turno set turno_idestado=@turno_idestado where turno_id = @turno_id"
}