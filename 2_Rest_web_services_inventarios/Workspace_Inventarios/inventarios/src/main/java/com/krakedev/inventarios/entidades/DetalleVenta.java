package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class DetalleVenta {
	
	private int codigoDV;
	private Venta cabeceraVenta;
	private Producto producto;
	private int cantidad;
	private BigDecimal precioVenta;
	private BigDecimal subtotal;
	private BigDecimal subotalIva;
	
	//CONSTRUCTOR
	public DetalleVenta(int codigoDV, Venta cabeceraVenta, Producto producto, int cantidad, BigDecimal precioVenta,
			BigDecimal subtotal, BigDecimal subotalIva) {
		super();
		this.codigoDV = codigoDV;
		this.cabeceraVenta = cabeceraVenta;
		this.producto = producto;
		this.cantidad = cantidad;
		this.precioVenta = precioVenta;
		this.subtotal = subtotal;
		this.subotalIva = subotalIva;
	}
	public DetalleVenta() {
		super();
	}
	
	//GETTER SETTERS
	public int getCodigoDV() {
		return codigoDV;
	}
	public void setCodigoDV(int codigoDV) {
		this.codigoDV = codigoDV;
	}
	public Venta getCabeceraVenta() {
		return cabeceraVenta;
	}
	public void setCabeceraVenta(Venta cabeceraVenta) {
		this.cabeceraVenta = cabeceraVenta;
	}
	public Producto getProducto() {
		return producto;
	}
	public void setProducto(Producto producto) {
		this.producto = producto;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}
	public BigDecimal getSubtotal() {
		return subtotal;
	}
	public void setSubtotal(BigDecimal subtotal) {
		this.subtotal = subtotal;
	}
	public BigDecimal getSubotalIva() {
		return subotalIva;
	}
	public void setSubotalIva(BigDecimal subotalIva) {
		this.subotalIva = subotalIva;
	}
	
	
	@Override
	public String toString() {
		return "DetalleVenta [codigoDV=" + codigoDV + ", cabeceraVenta=" + cabeceraVenta + ", producto=" + producto
				+ ", cantidad=" + cantidad + ", precioVenta=" + precioVenta + ", subtotal=" + subtotal + ", subotalIva="
				+ subotalIva + "]";
	}

}
