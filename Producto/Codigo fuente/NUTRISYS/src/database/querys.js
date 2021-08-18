export const queries = {
//PACIENTES
    //Consultas
    getPaciente: 'SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente',
    getPacienteXHC: 'SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc = @pac_nrohc',
    getPacientelikeHC: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%'",
    getPacienteXApellido: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_apellido like '%'+@pac_apellido+'%'",
    getPacienteXDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrodoc like @pac_nrodoc+'%'",
    getPacienteHCAPDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%' and pac_apellido like '%'+@pac_apellido+'%' and pac_nrodoc like @pac_nrodoc+'%'",
    getPacienteHCAP: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%' and pac_apellido like '%'+@pac_apellido+'%'",
    getPacienteHCDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_nrohc like @pac_nrohc + '%' and pac_nrodoc like @pac_nrodoc+'%'",
    getPacienteAPDoc: "SELECT *,convert(varchar,pac_fechanacimiento,103) as pac_fechanac FROM paciente WHERE pac_apellido like '%'+@pac_apellido+'%' and pac_nrodoc like @pac_nrodoc+'%'",
    //Alta,Baja,Modif
    nuevoPaciente: 'INSERT INTO paciente (pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,pac_fechaalta,pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_mutual,pac_mutual2) VALUES (@pac_nrodoc,@pac_apellido,@pac_nombre,@pac_fechanacimiento,getdate(),@pac_direccion,@pac_telefono1,@pac_telefono2,@pac_correo,@pac_mutual,@pac_mutual2)',
    borrarPaciente: 'DELETE FROM paciente WHERE pac_nrohc = @pac_nrohc',
    actualizarPaciente: 'UPDATE paciente SET pac_tipodoc=@pac_tipodoc,pac_nrodoc=@pac_nrodoc,pac_apellido=@pac_apellido,pac_nombre=@pac_nombre,pac_fechanacimiento=@pac_fechanacimiento,pac_direccion=@pac_direccion,pac_telefono1=@pac_telefono1,pac_telefono2=@pac_telefono2,pac_correo=@pac_correo,pac_mutual=@pac_mutual WHERE pac_nrohc = @pac_nrohc',

//USUARIOS
    getUsuario: "select case when emp_apellido is null then pac_apellido else emp_apellido end as apellido, "+
    "case when emp_nombre is null then pac_nombre else emp_nombre end as nombre,* from usuario left join empleado "+
    "on emp_idusuario=usu_id left join paciente on pac_idusuario=usu_id where usu_usuario=@usu_usuario and usu_clave=@usu_clave",

    
//FICHA INICIAL--- completar
  //DATOS GENERALES
    getFichaInicial: "SELECT * from historia_clinica where hc_nrohc=@hc_nrohc",
    registrarFichaInicial: "INSERT INTO historia_clinica(hc_nrohc,hc_derivacionmedica,hc_diagnostico,hc_antecedentes,hc_medicacion,hc_ocupacion,hc_actividadfisica,hc_tratamientos,hc_laboratiorios) VALUES(@hc_nrohc,@hc_derivacionmedica,@hc_diagnostico,@hc_antecedentes,@hc_medicacion,@hc_ocupacion,@hc_actividadfisica,@hc_tratamientos,@hc_laboratiorios)",
  //ANAMNESIS
    getItemsAnamnesis: "select item_id,tipoitem_descripcion,item_descripcion from item_anamnesis inner join tipoitem_anamnesis on item_tipo=tipoitem_id order by item_tipo",
    registrarAnamnesis: "INSERT INTO [dbo].[anamnesis_paciente] ([anms_id],[anms_nrohc],[anms_fecharegistro],[anms_vacunacongrasa],[anms_vacunasingrasa],[anms_polloconpiel],[anms_pollosinpiel],[anms_pescadorio],[anms_pescadomar],[anms_cerdo],[anms_higado],[anms_rinon],[anms_otrasviceras],[anms_fiambres],[anms_embutidos],[anms_salchichas],[anms_chorizo], "+
    "[anms_morcilla],[anms_lecheentera],[anms_lechedescremada],[anms_yogurtentero],[anms_yogurtdescremada],[anms_quesoduro],[anms_quesosemiblando],[anms_quesountable],[anms_flan],[anms_licuados],[anms_salsablanca],[anms_prepconleche],[anms_huevohervido],[anms_huevofrito],[anms_prephuevo],[anms_vegetalesfrescos],[anms_vegetalesenlatados],[anms_frutas],"+
    "[anms_cereales],[anms_pastas],[anms_vegfeculentos],[anms_legumbres],[anms_panblanco],[anms_pannegro],[anms_galletassaladas],[anms_galletasagua],[anms_galletasdulces],[anms_galletasintegrales],[anms_facturas],[anms_tortas],[anms_otrasmasas],[anms_azucar],[anms_mermelada],[anms_gelatina],[anms_miel],[anms_dulces],[anms_jugos],[anms_golosinas],"+
    "[anms_gaseosas],[anms_edulcorante],[anms_otrasazucares],[anms_aceitegirasol],[anms_aceitemaiz],[anms_aceiteoliva],[anms_otrosaceites],[anms_aceitecrudo],[anms_aceitefritura],[anms_manteca],[anms_margarina],[anms_mayonesa],[anms_otrasgrasas],[anms_salcomun],[anms_saldieta],[anms_sales],[anms_bebidas],[anms_cantvino],[anms_cantcerveza],[anms_cantbebblancas],"+
    "[anms_desayuno],[anms_mediamanana],[anms_almuerzo],[anms_merienda],[anms_cena])"+
    " VALUES (@anms_id, @anms_nrohc,@anms_fecharegistro,@anms_vacunacongrasa,@anms_vacunasingrasa,@anms_polloconpiel,@anms_pollosinpiel,@anms_pescadorio,@anms_pescadomar"+
    ",@anms_cerdo,@anms_higado,@anms_rinon,@anms_otrasviceras,@anms_fiambres,@anms_embutidos,@anms_salchichas,@anms_chorizo,@anms_morcilla,@anms_lecheentera,@anms_lechedescremada"+
    ",@anms_yogurtentero,@anms_yogurtdescremada,@anms_quesoduro,@anms_quesosemiblando,@anms_quesountable,@anms_flan,@anms_licuados,@anms_salsablanca,@anms_prepconleche"+
    ",@anms_huevohervido,@anms_huevofrito,@anms_prephuevo,@anms_vegetalesfrescos,@anms_vegetalesenlatados,@anms_frutas,@anms_cereales,@anms_pastas,@anms_vegfeculentos"+
    ",@anms_legumbres,@anms_panblanco,@anms_pannegro,@anms_galletassaladas,@anms_galletasagua,@anms_galletasdulces,@anms_galletasintegrales,@anms_facturas,@anms_tortas"+
    ",@anms_otrasmasas,@anms_azucar,@anms_mermelada,@anms_gelatina,@anms_miel,@anms_dulces,@anms_jugos,@anms_golosinas,@anms_gaseosas,@anms_edulcorante,@anms_otrasazucares"+
    ",@anms_aceitegirasol,@anms_aceitemaiz,@anms_aceiteoliva,@anms_otrosaceites,@anms_aceitecrudo,@anms_aceitefritura,@anms_manteca,@anms_margarina,@anms_mayonesa"+
    ",@anms_otrasgrasas,@anms_salcomun,@anms_saldieta,@anms_sales,@anms_bebidas,@anms_cantvino,@anms_cantcerveza,@anms_cantbebblancas,@anms_desayuno,@anms_mediamanana"+
    ",@anms_almuerzo,@anms_merienda,@anms_cena)",
    getAnamnesisXHC: "select * from anamnesis_paciente join detalle_anamnesis on(anms_id= danms_id) join item_anamnesis on (danms_iditem = item_id)"

}
