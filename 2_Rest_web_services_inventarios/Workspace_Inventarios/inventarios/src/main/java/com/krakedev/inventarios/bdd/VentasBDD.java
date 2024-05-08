package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.krakedev.inventarios.entidades.Venta;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class VentasBDD {

	public void registrarVenta(Venta venta) throws KrakeDevException {
		
		Connection con = null;
		PreparedStatement psVenta = null;
		
		try {
			con = ConexionBDD.obtenerConexion();
			psVenta = con.prepareCall("");
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar. Detalle: "+e.getMessage());
		}
		
	}
	
}
