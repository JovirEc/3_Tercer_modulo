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

import com.krakedev.inventarios.entidades.DetallePedido;
import com.krakedev.inventarios.entidades.Pedido;
import com.krakedev.inventarios.excepciones.KrakeDevException;
import com.krakedev.inventarios.utils.ConexionBDD;

public class PedidosBDD {
	
	public void insertar(Pedido pedido) throws KrakeDevException {
		
		Connection con = null;
		PreparedStatement ps = null;
		PreparedStatement psDet = null;	
		ResultSet rsClave = null;
		int codigoCabecera = 0;
		
		Date fechaActual = new Date();
		java.sql.Date fechaSQL = new java.sql.Date(fechaActual.getTime());
		
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("insert into cabecera_pedido (proveedor,fecha,estado) "
					+"values (?,?,?)",Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, pedido.getProveedor().getIdentificador());
			ps.setDate(2, fechaSQL);
			ps.setString(3, "S");
			
			ps.executeUpdate();
			
			//******OBTENER CODIGO*******//
			rsClave = ps.getGeneratedKeys();
			if(rsClave.next()) {
				codigoCabecera = rsClave.getInt(1);
			}
			//***************************//
			
			ArrayList<DetallePedido> detallesPedido = pedido.getDetalles();
			DetallePedido det;
			for(int i = 0; i < detallesPedido.size(); i++) {
				det = detallesPedido.get(i);
				psDet = con.prepareStatement("insert into detalle_pedido "
						+ "(cabecera_pedido_codigo,producto,cantidad_solicitada,cantidad_recibida,subtotal) "
						+ "values (?,?,?,?,?)");
				psDet.setInt(1, codigoCabecera);
				psDet.setInt(2, det.getProducto().getCodigoProd());
				psDet.setInt(3, det.getCantidadSolicitada());
				psDet.setInt(4, 0);
				
				BigDecimal pv = det.getProducto().getPrecioVenta();
				BigDecimal cantidad= new BigDecimal(det.getCantidadSolicitada());
				BigDecimal subtotal = pv.multiply(cantidad);
				psDet.setBigDecimal(5, subtotal);
				
				psDet.executeUpdate();
			}
			
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException ("Error al insertar. Detalles: "+e.getMessage());
		}
		
	}
	
	public void recibir(Pedido pedido) throws KrakeDevException {
		Connection con = null;
		PreparedStatement ps = null;
		PreparedStatement psDetalle = null;
		PreparedStatement psHS = null;
		ArrayList<DetallePedido> detallesPedido;
		
		try {
			con = ConexionBDD.obtenerConexion();
			ps = con.prepareStatement("update cabecera_pedido set estado = 'R' "
					+ "where codigo_cp = ?");
			ps.setInt(1, pedido.getCodigoCP());
			
			ps.executeUpdate();
			
			detallesPedido = pedido.getDetalles();
			
			for (int i = 0; i < detallesPedido.size() ; i++) {
				
				DetallePedido detalleX = detallesPedido.get(i);
				
				psDetalle = con.prepareStatement("update detalle_pedido set cantidad_recibida = ?, subtotal = ? "
						+ "where codigo_dp = ?");
				psDetalle.setInt(1, detalleX.getCantidadRecibida());
				
				BigDecimal precioVentaX = detalleX.getProducto().getPrecioVenta();
				BigDecimal cantidad = new BigDecimal(detalleX.getCantidadRecibida());
				BigDecimal newPrecioVenta = precioVentaX.multiply(cantidad);
				
				psDetalle.setBigDecimal(2, newPrecioVenta);
				psDetalle.setInt(3, detalleX.getCodigoDP());
				psDetalle.executeUpdate();
				
				psHS = con.prepareStatement("insert into historial_stock (fecha,referencia,producto,cantidad) "
						+ "values (?,?,?,?)");
				
				Date fechaActual = new Date();
				Timestamp nuevaFecha = new Timestamp(fechaActual.getTime());
				psHS.setTimestamp(1, nuevaFecha);
				psHS.setString(2, "Pedido #"+pedido.getCodigoCP());
				psHS.setInt(3, detalleX.getProducto().getCodigoProd());
				psHS.setInt(4, detalleX.getCantidadRecibida());
				
				psHS.executeUpdate();
				
			}

		} catch (KrakeDevException e) {
			e.printStackTrace();
			throw e;
		} catch (SQLException e) {
			e.printStackTrace();
			throw new KrakeDevException ("Error al actualizar. Detalles: "+e.getMessage());
		}
		
	}

}
