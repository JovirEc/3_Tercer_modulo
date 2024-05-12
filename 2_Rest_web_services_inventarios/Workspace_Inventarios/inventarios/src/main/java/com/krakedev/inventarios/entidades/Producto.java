package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;

public class Producto {

	private int codigoProd;
	private String nombre;
	private UnidadDeMedida unidadMedida;
	private BigDecimal precioVenta;
	private boolean tieneIva;
	private BigDecimal coste;
	private Categoria categoria;
	private int stock;
	
	//constructors
	public Producto(int codigoProd, String nombre, UnidadDeMedida unidadMedida, BigDecimal precioVenta,
			boolean tieneIva, BigDecimal coste, Categoria categoria, int stock) {
		super();
		this.codigoProd = codigoProd;
		this.nombre = nombre;
		this.unidadMedida = unidadMedida;
		this.precioVenta = precioVenta;
		this.tieneIva = tieneIva;
		this.coste = coste;
		this.categoria = categoria;
		this.stock = stock;
	}
	
	public Producto(int codigoProd) {
		super();
		this.codigoProd = codigoProd;
	}
	
	public Producto() {
		super();
	}
	
	//getters setters
	public int getCodigoProd() {
		return codigoProd;
	}
	public void setCodigoProd(int codigoProd) {
		this.codigoProd = codigoProd;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public UnidadDeMedida getUnidadMedida() {
		return unidadMedida;
	}
	public void setUnidadMedida(UnidadDeMedida unidadMedida) {
		this.unidadMedida = unidadMedida;
	}
	public BigDecimal getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(BigDecimal precioVenta) {
		this.precioVenta = precioVenta;
	}
	public boolean isTieneIva() {
		return tieneIva;
	}
	public void setTieneIva(boolean tieneIva) {
		this.tieneIva = tieneIva;
	}
	public BigDecimal getCoste() {
		return coste;
	}
	public void setCoste(BigDecimal coste) {
		this.coste = coste;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	
	@Override
	public String toString() {
		return "Producto [codigoProd=" + codigoProd + ", nombre=" + nombre + ", unidadMedida=" + unidadMedida
				+ ", precioVenta=" + precioVenta + ", tieneIva=" + tieneIva + ", coste=" + coste + ", categoria="
				+ categoria + ", stock=" + stock + "]";
	}
	
	
	
}
