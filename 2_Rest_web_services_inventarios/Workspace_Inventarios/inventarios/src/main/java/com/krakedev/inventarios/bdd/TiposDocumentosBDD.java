package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class TiposDocumentosBDD {

	public ArrayList<TipoDocumento> recuperarTipoDocumentos() throws KrakeDevException{
		ArrayList<TipoDocumento> tiposDocumentos = new ArrayList<TipoDocumento>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		TipoDocumento tipoDocumento;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_td,descripcion "
					+"from tipo_documento ");

			rs = ps.executeQuery();
			
			while(rs.next()) {
				String codigo = rs.getString("codigo_td");
				String descripcion = rs.getString("descripcion");
				
				tipoDocumento = new TipoDocumento(codigo,descripcion);
				tiposDocumentos.add(tipoDocumento);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar: Detalle:"+e.getMessage());
			
		}
		return tiposDocumentos;
	}
	
	public void agregarTipoDocumento (TipoDocumento tipoDocumento) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps = null;
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into tipo_documento (codigo_td,descripcion)"
					+ "values ( ? ,? )");
			ps.setString(1,tipoDocumento.getCodigo());
			ps.setString(2, tipoDocumento.getDescripcion());
			ps.executeUpdate();
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException ("Error al crear tipo de documento. Detalles: "+e.getMessage());
		}
		
		
	
	}
	
	
	
}
