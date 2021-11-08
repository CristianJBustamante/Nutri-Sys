export const usuquerys = {
    getUsuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido, "+
    "case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado "+
    "on emp_idusuario=usu_id left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario and usu_clave=@usu_clave",

    getusuarios: "select * from usuario",

    getdatosusuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido, "+
    "case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado "+
    "on emp_legajo=usu_usuario left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario",


    nuevousuario: "INSERT INTO usuario(usu_clave,usu_idperfil,usu_correo) "+
                    "VALUES (@usu_clave,@usu_idperfil,@usu_correo)",

//martin
    registrarEmpleado: "INSERT INTO empleado(emp_idusuario,emp_nrodoc,emp_apellido,emp_nombre,"
    +"emp_matricula,emp_direccion,emp_telefono1,emp_telefono2) VALUES (@emp_idusuario, @emp_nrodoc,"
    +"@emp_apellido,@emp_nombre,@emp_matricula,@emp_direccion,@emp_telefono1,@emp_telefono2)",

    registrarUsuarioEmpleado: "INSERT INTO usuario(usu_usuario, usu_clave,usu_correo) VALUES (@usu_usuario,@usu_clave,@usu_correo)",
    registrarUsuPerfil: "INSERT INTO usuario_perfil(usu_id,usu_idperfil) VALUES(@usu_id,@usu_idperfil)",
    getultimolegajo: "Select top 1 * From Empleado order by emp_legajo desc",
    getultimoidusuario: "Select top 1 * From Usuario order by usu_id desc",

    eliminarUsuPerfil: "DELETE FROM usuario_perfil WHERE usu_id = @usu_id",
    actualizarEmpleado: "UPDATE empleado SET emp_idusuario = @emp_idusuario, emp_nrodoc = @emp_nrodoc, emp_apellido = @emp_apellido"+
    ",emp_nombre = @emp_nombre, emp_matricula = @emp_matricula, emp_direccion = @emp_direccion,emp_telefono1 = @emp_telefono1"+
    ",emp_telefono2 = @emp_telefono2 WHERE emp_legajo = @emp_legajo",
    actualizarUsuario: "UPDATE usuario SET usu_clave = @usu_clave, usu_correo = @usu_correo WHERE usu_usuario = @usu_usuario",
    getEmpleado: "SELECT * From Empleado e WHERE emp_legajo = @emp_legajo",
    getUsuario: "Select * From Usuario where usu_usuario = @usu_usuario",
    getPerfiles: "Select * From Usuario where usu_usuario = @usu_usuario"
}