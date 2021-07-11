"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getPaciente: 'SELECT * FROM paciente',
  nuevoPaciente: 'INSERT INTO paciente (pac_tipodoc,pac_nrodoc,pac_apellido,pac_nombre,pac_fechanacimiento,pac_fechaalta,pac_direccion,pac_telefono1,pac_telefono2,pac_correo,pac_idmutual) VALUES (@pac_tipodoc,@pac_nrodoc,@pac_apellido,@pac_nombre,@pac_fechanacimiento,getdate(),@pac_direccion,@pac_telefono1,@pac_telefono2,@pac_correo,@pac_idmutual)',
  getPacienteXHC: 'SELECT * FROM paciente WHERE pac_nrohc = @pac_nrohc',
  borrarPaciente: 'DELETE FROM paciente WHERE pac_nrohc = @pac_nrohc',
  actualizarPaciente: 'UPDATE paciente SET pac_tipodoc=@pac_tipodoc,pac_nrodoc=@pac_nrodoc,pac_apellido=@pac_apellido,pac_nombre=@pac_nombre,pac_fechanacimiento=@pac_fechanacimiento,pac_direccion=@pac_direccion,pac_telefono1=@pac_telefono1,pac_telefono2=@pac_telefono2,pac_correo=@pac_correo,pac_idmutual=@pac_idmutual WHERE pac_nrohc = @pac_nrohc',
  getMutuales: 'SELECT * FROM mutual',
  getMutualXID: 'SELECT * FROM mutual WHERE mut_id=@mut_id'
};
exports.queries = queries;