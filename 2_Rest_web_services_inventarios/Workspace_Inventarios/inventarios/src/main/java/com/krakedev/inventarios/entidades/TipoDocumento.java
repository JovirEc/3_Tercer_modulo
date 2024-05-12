package com.krakedev.inventarios.entidades;

public class TipoDocumento {

	private String codigo;
	private String descripcion;
	
	//constructores
	public TipoDocumento(String codigo, String descripcion) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
	}
	
	public TipoDocumento(String codigo) {
		super();
		this.codigo = codigo;
	}
	public TipoDocumento() {
		super();
	}
	
	//getters setters
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	@Override
	public String toString() {
		return "TipoDocumento [codigo=" + codigo + ", descripcion=" + descripcion + "]";
	}
	
	
	
}
