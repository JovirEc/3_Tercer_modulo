package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.krakedev.inventarios.entidades.Categoria;
import com.krakedev.inventarios.entidades.Producto;
import com.krakedev.inventarios.entidades.UnidadDeMedida;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class ProductosBDD {
	
	public ArrayList<Producto> buscar(String subcadena) throws KrakeDevException{
		ArrayList<Producto> productos = new ArrayList<Producto>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Producto producto;
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("select prod.codigo_prod, prod.nombre as nombre_prod, "
					+ "udm.codigo_udm, udm.descripcion as descripcion_udm, "
					+ "cast (prod.precio_venta as decimal (5,2)), prod.tiene_iva, cast (prod.coste as decimal (5,2)), "
					+ "cat.codigo_cat, cat.nombre as nombre_cat, prod.stock "
					+ "from productos prod, unidades_medida udm, categorias cat "
					+ "where prod.udm = udm.codigo_udm "
					+ "and prod.categoria = cat.codigo_cat "
					+ "and upper (prod.nombre) like ?");
			ps.setString(1, "%"+subcadena.toUpperCase()+"%");
			
			rs = ps.executeQuery();
			
			while (rs.next()) {
				
				int codigoProd = rs.getInt("codigo_prod");
				String nombreProd = rs.getString("nombre_prod");
				String codigoUDM = rs.getString("codigo_udm");
				String descripcionUDM = rs.getString("descripcion_udm");
				BigDecimal precioVenta = rs.getBigDecimal("precio_venta");
				boolean tieneIva = rs.getBoolean("tiene_iva");
				BigDecimal coste = rs.getBigDecimal("coste");
				int codigoCat = rs.getInt("codigo_cat");
				String nombreCat = rs.getString("nombre_cat");
				int stock = rs.getInt("stock");		
				
				UnidadDeMedida unidadDeMedida = new UnidadDeMedida();
				unidadDeMedida.setCodigoUdm(codigoUDM);
				unidadDeMedida.setDescripcion(descripcionUDM);
				
				Categoria categoria = new Categoria();
				categoria.setCodigoCat(codigoCat);
				categoria.setNombre(nombreCat);
				
				producto = new Producto();
				producto.setCodigoProd(codigoProd);
				producto.setNombre(nombreProd);
				producto.setUnidadMedida(unidadDeMedida);
				producto.setPrecioVenta(precioVenta);
				producto.setTieneIva(tieneIva);
				producto.setCoste(coste);
				producto.setCategoria(categoria);
				producto.setStock(stock);
				
				productos.add(producto);

			}	
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al consultar base de datos. Detalles: "+e.getMessage());
		}
		
		return productos;

	}
	
	public void insertar(Producto producto) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into productos (nombre,udm,precio_venta,tiene_iva,coste,categoria,stock) "
					+ "values ( ? , ? , ? , ? , ? , ? , ?)");
			
			ps.setString(1, producto.getNombre());
			ps.setString(2, producto.getUnidadMedida().getCodigoUdm());
			ps.setBigDecimal(3, producto.getPrecioVenta());
			ps.setBoolean(4, producto.isTieneIva());
			ps.setBigDecimal(5, producto.getCoste());
			ps.setInt(6, producto.getCategoria().getCodigoCat());
			ps.setInt(7, producto.getStock());
			
			ps.executeUpdate();

		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar en base de datos. Detalles: "+e.getMessage());
			
		}
		
	}
	
	public void actualizar(Producto producto) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("update productos set nombre = ?, udm = ?, precio_venta = ?, tiene_iva = ?, coste = ?, categoria = ? "
					+ "where codigo_prod = ?");
			ps.setString(1, producto.getNombre());
			ps.setString(2, producto.getUnidadMedida().getCodigoUdm());
			ps.setBigDecimal(3, producto.getPrecioVenta());
			ps.setBoolean(4, producto.isTieneIva());
			ps.setBigDecimal(5, producto.getCoste());
			ps.setInt(6, producto.getCategoria().getCodigoCat());
			ps.setInt(7, producto.getCodigoProd());
			
			ps.executeUpdate();
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al actualizar. Detalle: "+e.getMessage());
		}
		
		
		
	}
	
}
