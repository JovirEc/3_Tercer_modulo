package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetallePedido {
	
	private int codigoDP;
	private Pedido cabeceraPedidoCodigo;
	private Producto producto;
	private int cantidadSolicitada;
	private BigDecimal subtotal;
	private int cantidadRecibida;
	
	//constructors
	public DetallePedido(int codigoDP, Pedido cabeceraPedidoCodigo, Producto producto, int cantidadSolicitada,
			BigDecimal subtotal, int cantidadRecibida) {
		super();
		this.codigoDP = codigoDP;
		this.cabeceraPedidoCodigo = cabeceraPedidoCodigo;
		this.producto = producto;
		this.cantidadSolicitada = cantidadSolicitada;
		this.subtotal = subtotal;
		this.cantidadRecibida = cantidadRecibida;
	}
	public DetallePedido() {
		super();
	}
	
	//getters setters
	public int getCodigoDP() {
		return codigoDP;
	}
	public void setCodigoDP(int codigoDP) {
		this.codigoDP = codigoDP;
	}
	public Pedido getCabeceraPedidoCodigo() {
		return cabeceraPedidoCodigo;
	}
	public void setCabeceraPedidoCodigo(Pedido cabeceraPedidoCodigo) {
		this.cabeceraPedidoCodigo = cabeceraPedidoCodigo;
	}
	public Producto getProducto() {
		return producto;
	}
	public void setProducto(Producto producto) {
		this.producto = producto;
	}
	public int getCantidadSolicitada() {
		return cantidadSolicitada;
	}
	public void setCantidadSolicitada(int cantidadSolicitada) {
		this.cantidadSolicitada = cantidadSolicitada;
	}
	public BigDecimal getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}
	public int getCantidadRecibida() {
		return cantidadRecibida;
	}
	public void setCantidadRecibida(int cantidadRecibida) {
		this.cantidadRecibida = cantidadRecibida;
	}
	
	
	@Override
	public String toString() {
		return "DetallePedido [codigoDP=" + codigoDP + ", cabeceraPedidoCodigo=" + cabeceraPedidoCodigo + ", producto="
				+ producto + ", cantidadSolicitada=" + cantidadSolicitada + ", subtotal=" + subtotal
				+ ", cantidadRecibida=" + cantidadRecibida + "]";
	}
	
	
	
	

}
