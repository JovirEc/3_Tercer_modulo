package com.krakedev.inventarios.bdd;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;

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
	
	
	public void actualizar(Categoria categoria) throws KrakeDevException {
		Connection con;
		PreparedStatement ps;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("update categorias set nombre = ? , categoria_padre = ? "
					+ "where codigo_cat = ?");
			
			ps.setString(1, categoria.getNombre());
			if(categoria.getCategoriaPadre() == null) {
				ps.setNull(2, Types.INTEGER);
			}else {
				ps.setInt(2, categoria.getCategoriaPadre().getCodigoCat());
			}
			ps.setInt(3, categoria.getCodigoCat());
			
			ps.executeUpdate();
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException ("Error al actualizar categoria. Detalles: "+e.getMessage());
			
		}
		
	}
	
	public ArrayList<Categoria> recuperar() throws KrakeDevException{
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		ArrayList<Categoria> listaCategorias = new ArrayList<Categoria>();
		Categoria categoriaX;

		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select codigo_cat,nombre,categoria_padre from categorias");
			rs = ps.executeQuery();
			
			while(rs.next()) {
				int codigoCat = rs.getInt("codigo_cat");
				String nombre = rs.getString("nombre");
				Categoria categoriaPadre = new Categoria();
					int codigoCategoriaPadre = rs.getInt("categoria_padre");
					if(codigoCategoriaPadre == 0) {
						categoriaPadre = null;
					}else {
						categoriaPadre.setCodigoCat(codigoCategoriaPadre);
					}
				categoriaX = new Categoria(codigoCat,nombre,categoriaPadre);
				listaCategorias.add(categoriaX);
			}
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al recuperar. Detalles: "+e.getMessage());
		}
		return listaCategorias;
	}
}
