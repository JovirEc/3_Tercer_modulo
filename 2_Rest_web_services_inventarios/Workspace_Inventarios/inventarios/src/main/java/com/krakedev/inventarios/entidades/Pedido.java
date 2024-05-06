package com.krakedev.inventarios.entidades;

import java.util.ArrayList;
import java.util.Date;

public class Pedido {

	private int codigoCP;
	private Proveedor proveedor;
	private Date fecha;
	private EstadoPedido estadoPedido;
	private ArrayList<DetallePedido> detalles;
	
	//constructors
	public Pedido(int codigoCP, Proveedor proveedor, Date fecha, EstadoPedido estadoPedido,
			ArrayList<DetallePedido> detalles) {
		super();
		this.codigoCP = codigoCP;
		this.proveedor = proveedor;
		this.fecha = fecha;
		this.estadoPedido = estadoPedido;
		this.detalles = detalles;
	}
	public Pedido() {
		super();
	}
	
	//getters setters
	public int getCodigoCP() {
		return codigoCP;
	}
	public void setCodigoCP(int codigoCP) {
		this.codigoCP = codigoCP;
	}
	public Proveedor getProveedor() {
		return proveedor;
	}
	public void setProveedor(Proveedor proveedor) {
		this.proveedor = proveedor;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public EstadoPedido getEstadoPedido() {
		return estadoPedido;
	}
	public void setEstadoPedido(EstadoPedido estadoPedido) {
		this.estadoPedido = estadoPedido;
	}
	public ArrayList<DetallePedido> getDetalles() {
		return detalles;
	}
	public void setDetalles(ArrayList<DetallePedido> detalles) {
		this.detalles = detalles;
	}
	
	@Override
	public String toString() {
		return "Pedido [codigoCP=" + codigoCP + ", proveedor=" + proveedor + ", fecha=" + fecha + ", estadoPedido="
				+ estadoPedido + "]";
	}
	
}
