package com.krakedev.inventarios.bdd;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;

import com.krakedev.inventarios.entidades.DetalleVenta;
import com.krakedev.inventarios.entidades.Venta;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class VentasBDD {

	public void registrarVenta(Venta venta) throws KrakeDevException {
		
		Connection con = null;
		PreparedStatement psVenta = null;
		PreparedStatement psDetalles = null;
		PreparedStatement psVentaUpdate = null;
		PreparedStatement psStock = null;
		ResultSet rsCV = null;
		
		int codigoCV = 0;
		ArrayList<DetalleVenta> detallesVentas;
		BigDecimal sumaTotalSinIva = BigDecimal.ZERO;
		BigDecimal sumaIva = BigDecimal.ZERO;
		BigDecimal sumaTotalConIva = BigDecimal.ZERO;
		
		Date fechaActual = new Date();
		Timestamp fechaSQL = new Timestamp(fechaActual.getTime());
		
		try {
		//CREAR CABECERA
			con = ConexionBDD.obtenerConexion();
			psVenta = con.prepareStatement("insert into cabecera_venta (fecha,total_sin_iva,iva,total) "
					+ "values ( ? , ? , ? , ? )",Statement.RETURN_GENERATED_KEYS);
			psVenta.setTimestamp(1, fechaSQL);
			psVenta.setBigDecimal(2, venta.getTotalSinIva());
			psVenta.setBigDecimal(3, venta.getIva());
			psVenta.setBigDecimal(4, venta.getTotal());
			psVenta.executeUpdate();
			//******OBTENER CODIGO******//
			rsCV = psVenta.getGeneratedKeys();
			if(rsCV.next()) {
				codigoCV = rsCV.getInt(1);
			}
			//*************************//
			
		//DETALLES VENTAS & HISTORIAL STOCK
			detallesVentas = venta.getDetallesVentas();
			
			for(int i = 0; i < detallesVentas.size(); i++) {
				DetalleVenta detalleX = detallesVentas.get(i);
				BigDecimal subtotal;
				BigDecimal iva;
				BigDecimal cantidadIva = BigDecimal.ZERO;
				BigDecimal totalConIva;
				
				psDetalles = con.prepareStatement("insert into detalle_ventas (cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_iva) "
						+ "values ( ? , ? , ? , ? , ? , ? )");
				psDetalles.setInt(1, codigoCV);
				psDetalles.setInt(2, detalleX.getProducto().getCodigoProd());
				psDetalles.setInt(3, detalleX.getCantidad());
				psDetalles.setBigDecimal(4, detalleX.getPrecioVenta());
					BigDecimal cantidadDecimal = new BigDecimal (detalleX.getCantidad());
					subtotal = detalleX.getPrecioVenta().multiply(cantidadDecimal);
				psDetalles.setBigDecimal(5, subtotal);
					if(detalleX.getProducto().isTieneIva()) {
						iva = new BigDecimal(1.15);
						totalConIva = subtotal.multiply(iva);
							cantidadIva = totalConIva.subtract(subtotal);
					}else {
						totalConIva = subtotal;
					}
				psDetalles.setBigDecimal(6, totalConIva);
				//** Sumas de cabecera **//
					sumaTotalSinIva = sumaTotalSinIva.add(subtotal);
					sumaIva = sumaIva.add(cantidadIva);
					sumaTotalConIva = sumaTotalConIva.add(totalConIva);
				//** fin suma de cabecera **//
				psDetalles.executeUpdate();
				
		//HISTORIAL STOCK
				psStock = con.prepareStatement("insert into historial_stock (fecha,referencia,producto,cantidad) "
						+ "values ( ?,?,?,? )");
				psStock.setTimestamp(1, fechaSQL);
				psStock.setString(2, "Venta #"+codigoCV);
				psStock.setInt(3, detalleX.getProducto().getCodigoProd());
				int cantidadVenta = (detalleX.getCantidad()*(-1));
				psStock.setInt(4, cantidadVenta);
				psStock.executeUpdate();
				
			}
		//ACTUALIZAR CABECERA
			psVentaUpdate = con.prepareStatement("update cabecera_venta "
					+ "set total_sin_iva = ? , iva = ? , total = ? where codigo_cv = ? ");
			psVentaUpdate.setBigDecimal(1, sumaTotalSinIva);
			psVentaUpdate.setBigDecimal(2, sumaIva);
			psVentaUpdate.setBigDecimal(3, sumaTotalConIva);
			psVentaUpdate.setInt(4, codigoCV);
			psVentaUpdate.executeUpdate();
			
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException("Error al insertar. Detalle: "+e.getMessage());
		}
		
	}
	
}
