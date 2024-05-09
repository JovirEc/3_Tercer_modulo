package com.krakedev.inventarios.entidades;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;

public class Venta {

	private int codigoCV;
	private Date fecha;
	private BigDecimal totalSinIva = BigDecimal.ZERO;
	private BigDecimal iva = BigDecimal.ZERO;
	private BigDecimal total = BigDecimal.ZERO;
	private ArrayList<DetalleVenta> detallesVentas;
	
	//CONSTRUCTORS
	
	public Venta() {
		super();
	}

	public Venta(int codigoCV, Date fecha, BigDecimal totalSinIva, BigDecimal iva, BigDecimal total,
			ArrayList<DetalleVenta> detallesVentas) {
		super();
		this.codigoCV = codigoCV;
		this.fecha = fecha;
		this.totalSinIva = totalSinIva;
		this.iva = iva;
		this.total = total;
		this.detallesVentas = detallesVentas;
	}

	//GETTERS AND SETTERS

	public int getCodigoCV() {
		return codigoCV;
	}

	public void setCodigoCV(int codigoCV) {
		this.codigoCV = codigoCV;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public BigDecimal getTotalSinIva() {
		return totalSinIva;
	}

	public void setTotalSinIva(BigDecimal totalSinIva) {
		this.totalSinIva = totalSinIva;
	}

	public BigDecimal getIva() {
		return iva;
	}

	public void setIva(BigDecimal iva) {
		this.iva = iva;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public ArrayList<DetalleVenta> getDetallesVentas() {
		return detallesVentas;
	}

	public void setDetallesVentas(ArrayList<DetalleVenta> detallesVentas) {
		this.detallesVentas = detallesVentas;
	}
	
	@Override
	public String toString() {
		return "Venta [codigoCV=" + codigoCV + ", fecha=" + fecha + ", totalSinIva=" + totalSinIva + ", iva=" + iva
				+ ", total=" + total + "]";
	}
	
}
