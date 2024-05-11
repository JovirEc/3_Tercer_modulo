package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class CategoriasBDD {

	public void crear(Categoria categoria) throws KrakeDevException {
		Connection con;
		PreparedStatement ps;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into categorias (nombre,categoria_padre) "
					+ "values ( ? , ? )");
			ps.setString(1, categoria.getNombre());
			if(categoria.getCategoriaPadre() == null) {
				ps.setNull(2, Types.INTEGER);
			}else {
				ps.setInt(2, categoria.getCategoriaPadre().getCodigoCat());
			}
			
			ps.executeUpdate();
			
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException ("Error al crear categoria. Detalles: "+e.getMessage());
		}
	}
}
