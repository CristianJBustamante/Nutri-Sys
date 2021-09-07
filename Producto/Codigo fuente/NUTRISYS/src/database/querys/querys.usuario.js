export const usuquerys = {
    getUsuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido, "+
    "case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado "+
    "on emp_idusuario=usu_id left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario and usu_clave=@usu_clave"

}