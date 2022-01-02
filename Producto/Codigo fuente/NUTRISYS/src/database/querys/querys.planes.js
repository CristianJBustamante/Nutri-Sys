export const planesquerys = {

    registrarplan:  "INSERT INTO plan_alimentario(plan_id,plan_nrohc,plan_fechacreacion,plan_legajoprofesional,plan_vigente) "+
                                         "VALUES (@plan_id,@plan_nrohc,GETDATE(),@plan_legajoprofesional,@plan_vigente)",

    registrardetplan:  "INSERT INTO detalle_plan(dplan_id,dplan_detalle,dplan_titulo,dplan_descripcion) "+
                                        "VALUES (@dplan_id,@dplan_detalle,@dplan_titulo,@dplan_descripcion)",

    buscarultimoplan:  "SELECT TOP 1 * FROM plan_alimentario ORDER BY plan_id desc",     
    
    novigentes:  "update plan_alimentario set plan_vigente=0 where plan_nrohc=@plan_nrohc and convert(int,plan_id)<convert(int,@plan_id)",   

}