package com.krakedev.inventarios.entidades;

public class CategoriaUDM {

	private String codigoCdm;
	private String nombre;
	
	//constructores
	public CategoriaUDM(String codigoCdm, String nombre) {
		super();
		this.codigoCdm = codigoCdm;
		this.nombre = nombre;
	}
	public CategoriaUDM() {
		super();
	}
	
	//getters setters
	public String getCodigoCdm() {
		return codigoCdm;
	}
	public void setCodigoCdm(String codigoCdm) {
		this.codigoCdm = codigoCdm;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	@Override
	public String toString() {
		return "CategoriaUDM [codigoCdm=" + codigoCdm + ", nombre=" + nombre + "]";
	}
	
	
	
}
