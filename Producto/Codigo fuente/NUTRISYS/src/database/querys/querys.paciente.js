export const pacquerys = {
//--------------------------------------------------CONSULTAS------------------------------------------------------

    getPaciente: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente",

    getPacienteXHC:     "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac,"+
                        "convert(varchar,pac_fechanacimiento,23) as pac_fnac "+
                        "FROM paciente WHERE pac_nrohc = @pac_nrohc",

    getPacientelikeHC:  "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                        "FROM paciente WHERE pac_nrohc like @pac_nrohc + '%'",

    getPacienteXApellido:   "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                            "FROM paciente WHERE pac_apellido like '%'+@pac_apellido+'%'",

    getPacienteXDoc:    "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                        "FROM paciente WHERE pac_nrodoc like @pac_nrodoc+'%'",

    getPacienteHCAPDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                        "FROM paciente "+
                        "WHERE pac_nrohc like @pac_nrohc + '%' "+
                        "and pac_apellido like '%'+@pac_apellido+'%' "+
                        "and pac_nrodoc like @pac_nrodoc+'%'",

    getPacienteHCAP:    "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                        "FROM paciente "+
                        "WHERE pac_nrohc like @pac_nrohc + '%' "+
                        "and pac_apellido like '%'+@pac_apellido+'%'",

    getPacienteHCDoc:   "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                        "FROM paciente "+
                        "WHERE pac_nrohc like @pac_nrohc + '%' and pac_nrodoc like @pac_nrodoc+'%'",

    getPacienteAPDoc:   "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac "+
                        "FROM paciente "+
                        "WHERE pac_apellido like '%'+@pac_apellido+'%' and pac_nrodoc like @pac_nrodoc+'%'",
   

//-------------------------------------------------------ABMS------------------------------------------------------
    nuevoPaciente:  "INSERT INTO paciente (pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_sexo,pac_fechanacimiento,pac_fechaalta,"+
                    "pac_direccion,pac_barrio,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2) "+
                    "VALUES (@pac_tipodoc,@pac_nrodoc,@pac_apellido,@pac_nombre,@pac_sexo,@pac_fechanacimiento,getdate(),@pac_direccion,"+
                    "@pac_barrio,@pac_telefono1,@pac_telefono2,@pac_correo,@pac_mutual,@pac_mutual2)",
    
    borrarPaciente: "DELETE FROM paciente WHERE pac_nrohc = @pac_nrohc",

    actualizarPaciente: "UPDATE paciente SET pac_nrodoc=@pac_nrodoc,pac_apellido=@pac_apellido,pac_nombre=@pac_nombre,"+
                        "pac_fechanacimiento=@pac_fechanacimiento,pac_direccion=@pac_direccion,"+
                        "pac_telefono1=@pac_telefono1,pac_telefono2=@pac_telefono2,pac_correo=@pac_correo,"+
                        "pac_mutual=@pac_mutual,pac_mutual2=@pac_mutual2 WHERE pac_nrohc = @pac_nrohc",

}