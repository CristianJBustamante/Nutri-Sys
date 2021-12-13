export const pacquerys = {
//--------------------------------------------------CONSULTAS------------------------------------------------------

    getPaciente: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente",

    getPacienteXHC:     "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac,"+
                                "convert(varchar,pac_fechanacimiento,23) as pac_fnac , isnull(hc_ocupacion,'') as ocupacion,"+
                                "isnull(convert(varchar,case when cons_peso is null then hc_pesoactual else cons_peso end ),'') as peso,"+
                                "isnull(convert(varchar,case when cons_talla is null then hc_talla else cons_talla end),'') as talla,"+
                                "isnull(convert(varchar,case when cons_IMC is null then hc_BMI else cons_IMC end),'') as imc, " +
                                "DATEDIFF(year,pac_fechanacimiento,GETDATE()) as edad "+
                        "FROM paciente p left join historia_clinica h on p.pac_nrohc = h.hc_nrohc " +
                        "left join (select top 1 * from turno t inner join consulta c on t.turno_id=c.cons_idturno "+
                        "order by t.turno_fecha desc) c on c.turno_nrohc = h.hc_nrohc "+
                        "WHERE pac_nrohc = @pac_nrohc",

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

    getpesospaciente: "select case when cons_peso is null then hc_pesoactual else cons_peso end as peso, "+
                        "case when cons_IMC is null then hc_bmi else cons_IMC end as imc,turno_fecha "+
                        "from consulta inner join turno on consulta.cons_idturno=turno.turno_id "+
                                        "left join historia_clinica h on h.hc_nrohc=turno_nrohc "+
                        "WHERE hc_nrohc = @pac_nrohc order by turno_fecha",
    
    getultimoimc: "select top 1 case when cons_IMC is null then hc_bmi else cons_IMC end as imc,turno_fecha "+
                        "from consulta inner join turno on consulta.cons_idturno=turno.turno_id "+
                                        "left join historia_clinica h on h.hc_nrohc=turno_nrohc "+
                        "WHERE hc_nrohc = @pac_nrohc order by turno_fecha desc",

    getconsultaspaciente: "select convert(nvarchar,turno_fecha,103) as fecha,*  from consulta inner join turno on consulta.cons_idturno=turno.turno_id "+
                            "where turno_nrohc = @pac_nrohc and cons_observaciones <> 'Consulta Inicial'",
   

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