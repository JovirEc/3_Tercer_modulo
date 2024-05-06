package com.krakedev.inventarios.entidades;

public class EstadoPedido {

	private String codigoEP;
	private String descripcionEP;
	
	//constructors
	public EstadoPedido(String codigoEP, String descripcionEP) {
		super();
		this.codigoEP = codigoEP;
		this.descripcionEP = descripcionEP;
	}
	public EstadoPedido() {
		super();
	}
	
	//getters setters
	public String getCodigoEP() {
		return codigoEP;
	}
	public void setCodigoEP(String codigoEP) {
		this.codigoEP = codigoEP;
	}
	public String getDescripcionEP() {
		return descripcionEP;
	}
	public void setDescripcionEP(String descripcionEP) {
		this.descripcionEP = descripcionEP;
	}
	
	@Override
	public String toString() {
		return "EstadoPedido [codigoEP=" + codigoEP + ", descripcionEP=" + descripcionEP + "]";
	}
	
	
	
}
