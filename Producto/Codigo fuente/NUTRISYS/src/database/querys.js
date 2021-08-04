export const queries = {
    //PACIENTES
    getPaciente: 'SELECT * FROM paciente',
    nuevoPaciente: 'INSERT INTO paciente (pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,pac_fechaalta,pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2) VALUES (@pac_nrodoc,@pac_apellido,@pac_nombre,@pac_fechanacimiento,getdate(),@pac_direccion,@pac_telefono1,@pac_telefono2,@pac_correo,@pac_mutual,@pac_mutual2)',
    getPacienteXHC: 'SELECT * FROM paciente WHERE pac_nrohc = @pac_nrohc',
    getPacientelikeHC: "SELECT * FROM paciente WHERE pac_nrohc like @pac_nrohc + '%'",
    
    getPacienteXApellido: "SELECT * FROM paciente WHERE pac_apellido like '%'+@pac_apellido+'%'",
    borrarPaciente: 'DELETE FROM paciente WHERE pac_nrohc = @pac_nrohc',
    actualizarPaciente: 'UPDATE paciente SET pac_tipodoc=@pac_tipodoc,pac_nrodoc=@pac_nrodoc,pac_apellido=@pac_apellido,pac_nombre=@pac_nombre,pac_fechanacimiento=@pac_fechanacimiento,pac_direccion=@pac_direccion,pac_telefono1=@pac_telefono1,pac_telefono2=@pac_telefono2,pac_correo=@pac_correo,pac_mutual=@pac_mutual WHERE pac_nrohc = @pac_nrohc',

    //USUARIOS
    getUsuario: "select * from usuario where usu_usuario=@usu_usuario and usu_clave=@usu_clave"
}