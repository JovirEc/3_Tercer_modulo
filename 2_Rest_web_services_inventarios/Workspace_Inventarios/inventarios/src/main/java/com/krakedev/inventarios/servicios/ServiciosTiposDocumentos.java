package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.TiposDocumentosBDD;
import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakeDevException;

@Path("tiposdocumento")
public class ServiciosTiposDocumentos {

	@Path("recuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperar() {
		
		TiposDocumentosBDD tiposDocBDD = new TiposDocumentosBDD();
		ArrayList<TipoDocumento> tiposDocumentos = null;
		
		try {
			tiposDocumentos = tiposDocBDD.recuperarTipoDocumentos();
			return Response.ok(tiposDocumentos).build();
			
		} catch (KrakeDevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
	
	
}
