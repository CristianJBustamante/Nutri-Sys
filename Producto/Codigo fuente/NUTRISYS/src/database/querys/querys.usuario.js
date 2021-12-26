export const usuquerys = {
    getUsuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido, "+
    "case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado "+
    "on emp_idusuario=usu_id left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario and usu_clave=@usu_clave",

    getUsuarioPaciente:"SELECT * FROM paciente where pac_nrohc = @pac_nrohc",
    getusuarios: "select * from usuario",

    getdatosusuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido, "+
    "case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado "+
    "on emp_legajo=usu_usuario left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario",


    nuevousuario: "INSERT INTO usuario(usu_clave,usu_idperfil,usu_correo) "+
                    "VALUES (@usu_clave,@usu_idperfil,@usu_correo)",

//martin
//altas
    registrarEmpleado: "INSERT INTO empleado(emp_idusuario,emp_nrodoc,emp_apellido,emp_nombre,"
    +"emp_matricula,emp_direccion,emp_telefono1,emp_telefono2) VALUES (@emp_idusuario, @emp_nrodoc,"
    +"@emp_apellido,@emp_nombre,@emp_matricula,@emp_direccion,@emp_telefono1,@emp_telefono2)",

    registrarUsuarioEmpleado: "INSERT INTO usuario(usu_usuario, usu_clave,usu_correo, usu_hab) VALUES (@usu_usuario,@usu_clave,@usu_correo, @usu_hab)",
    registrarUsuPerfil: "INSERT INTO usuario_perfil(usu_id,usu_idperfil) VALUES(@usu_id,@usu_idperfil)",
//

    getultimolegajo: "Select top 1 * From Empleado order by emp_legajo desc",
    getultimoidusuario: "Select top 1 * From Usuario order by usu_id desc",

    eliminarUsuPerfil: "DELETE FROM usuario_perfil WHERE usu_id = @usu_id",
    actualizarEmpleado: "UPDATE empleado SET emp_idusuario = @emp_idusuario, emp_nrodoc = @emp_nrodoc, emp_apellido = @emp_apellido"+
    ",emp_nombre = @emp_nombre, emp_matricula = @emp_matricula, emp_direccion = @emp_direccion,emp_telefono1 = @emp_telefono1"+
    ",emp_telefono2 = @emp_telefono2 WHERE emp_legajo = @emp_legajo",
    actualizarUsuario: "UPDATE usuario SET usu_clave = @usu_clave, usu_correo = @usu_correo, usu_hab = @usu_hab WHERE usu_usuario = @usu_usuario",
    getEmpleadoTodos: "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) order by emp_legajo",

    getEmpleado: "select e.emp_apellido, e.emp_nombre, e.emp_matricula, e.emp_nrodoc, e.emp_direccion, e.emp_telefono1, e.emp_telefono2, u.usu_correo, u.usu_clave, "
    +"u.usu_id, u.usu_hab, e.emp_legajo from empleado e join usuario u on (u.usu_usuario = e.emp_legajo) WHERE e.emp_legajo = @emp_legajo",

    getUsuario: "Select * From Usuario where usu_usuario = @usu_usuario",

    getEmpleadoXL:"select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) where e.emp_legajo = @emp_legajo",

    getEmpleadoXA: "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) WHERE e.emp_apellido like '%'+@emp_apellido+'%'",

    getEmpleadoXD:    "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) where e.emp_nrodoc = @emp_nrodoc",

    getEmpleadoXLAD: "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) "+
                        " WHERE e.emp_legajo = @emp_legajo"+
                        " and e.emp_apellido like '%'+@emp_apellido+'%' "+
                        " and e.emp_nrodoc = @pac_nrodoc",

    getEmpleadoXLA:    "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) "+
                        " WHERE e.emp_legajo = @emp_legajo"+
                        " and e.emp_apellido like '%'+@emp_apellido+'%'",

    getEmpleadoXLD:   "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) "+
                        " WHERE e.emp_legajo = @emp_legajo"+
                        " and e.emp_nrodoc = @pac_nrodoc",

    getEmpleadoXAD:   "select e.emp_legajo, e.emp_nrodoc, e.emp_apellido, e.emp_nombre, u.usu_correo from empleado e "
    +"join usuario u on (e.emp_legajo = u.usu_usuario) "+
                        " WHERE e.emp_apellido like '%'+@emp_apellido+'%'"+
                        " and e.emp_nrodoc = @pac_nrodoc",

    getPerfiles: "select * from  perfil where perfil_id != 4",

    getPerfilesSelec: "select p.perfil_id, p.perfil_descripcion from perfil p join usuario_perfil up on(up.usu_idperfil = p.perfil_id) inner join usuario u on u.usu_usuario=up.usu_id "+
                        "where u.usu_usuario = @usu_id and perfil_id != 4",

    getPerfilesNOSelec: "select p.perfil_id, p.perfil_descripcion from perfil p "+
        "where perfil_id != 4 and p.perfil_id not in ("+
                            "select pe.perfil_id from perfil pe join usuario_perfil up on(up.usu_idperfil = p.perfil_id) inner join usuario u on u.usu_usuario=up.usu_id "+
                            "where u.usu_usuario = @usu_id and perfil_id != 4)",

    getpermiso: "select p.usu_id,usu_idperfil,perfil_descripcion from usuario_perfil p inner join usuario u on u.usu_usuario=p.usu_id "+
                                                "inner join perfil d on d.perfil_id=p.usu_idperfil "+
                                                "where p.usu_id=@usu_id and usu_idperfil=@usu_idperfil",
}