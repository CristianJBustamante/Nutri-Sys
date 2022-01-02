export const planesquerys = {

    registrarplan:  "INSERT INTO plan_alimentario(plan_id,plan_nrohc,plan_fechacreacion,plan_legajoprofesional,plan_vigente) "+
                                         "VALUES (@plan_id,@plan_nrohc,GETDATE(),@plan_legajoprofesional,@plan_vigente)",

    registrardetplan:  "INSERT INTO detalle_plan(dplan_id,dplan_detalle,dplan_titulo,dplan_descripcion) "+
                                        "VALUES (@dplan_id,@dplan_detalle,@dplan_titulo,@dplan_descripcion)",

    buscarultimoplan:  "SELECT TOP 1 * FROM plan_alimentario ORDER BY plan_id desc",     
    
    novigentes:  "update plan_alimentario set plan_vigente=0 where plan_nrohc=@plan_nrohc and convert(int,plan_id)<convert(int,@plan_id)",

    buscarplanes:  "select *, case when plan_vigente=1 then 'SI' else 'NO' end as vigente,"+
                    "convert(nvarchar,plan_fechacreacion,103) as fecha from plan_alimentario "+
	                "inner join paciente on pac_nrohc=plan_nrohc inner join empleado on plan_legajoprofesional=emp_legajo "+
	                "where plan_nrohc = @plan_nrohc", 

}