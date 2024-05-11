package com.krakedev.inventarios.entidades;

public class Categoria {
	
	private int codigoCat;
	private String nombre;
	private Categoria categoriaPadre = null;
	
	//constructors
	public Categoria(int codigoCat, String nombre, Categoria categoriaPadre) {
		super();
		this.codigoCat = codigoCat;
		this.nombre = nombre;
		this.categoriaPadre = categoriaPadre;
	}
	public Categoria() {
		super();
	}
	
	//getters setters
	public int getCodigoCat() {
		return codigoCat;
	}
	public void setCodigoCat(int codigoCat) {
		this.codigoCat = codigoCat;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public Categoria getCategoriaPadre() {
		return categoriaPadre;
	}
	public void setCategoriaPadre(Categoria categoriaPadre) {
		this.categoriaPadre = categoriaPadre;
	}
	
	
	@Override
	public String toString() {
		return "Categoria [codigoCat=" + codigoCat + ", nombre=" + nombre + ", categoriaPadre=" + categoriaPadre + "]";
	}
	
	
	
	

}
