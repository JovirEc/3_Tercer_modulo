--TABLA CATEGORIAS--
drop table if exists categorias;
create table categorias (
	codigo_cat serial not null,
	nombre varchar(100) not null,
	categoria_padre int,
	constraint categorias_pk primary key (codigo_cat),
	constraint categorias_fk foreign key (categoria_padre) references categorias(codigo_cat)
);
insert into categorias (nombre,categoria_padre)
values ('Materia Prima', null);
insert into categorias (nombre,categoria_padre)
values ('Proteina', 1);
insert into categorias (nombre,categoria_padre)
values ('Salsas', 1);
insert into categorias (nombre,categoria_padre)
values ('Punto de Venta', null);
insert into categorias (nombre,categoria_padre)
values ('Bebidas', 4);
insert into categorias (nombre,categoria_padre)
values ('Con Alcohol', 5);
insert into categorias (nombre,categoria_padre)
values ('Sin Alcohol', 4);
select * from categorias;

--TABLA CATEGORIAS_UNIDAD_MEDIDA--
drop table if exists categorias_unidad_medida;
create table categorias_unidad_medida(
	codigo_cdm char(1) not null,
	nombre varchar(100) not null,
	constraint categoria_unidad_medida_pk primary key (codigo_cdm)
);
insert into categorias_unidad_medida (codigo_cdm,nombre)
values ('U','Unidades');
insert into categorias_unidad_medida (codigo_cdm,nombre)
values ('V','Volumen');
insert into categorias_unidad_medida (codigo_cdm,nombre)
values ('P','Peso');
select * from categorias_unidad_medida;

--TABLA UNIDADES MEDIDA--
drop table if exists unidades_medida;
create table unidades_medida(
	codigo_udm varchar(2) not null,
	descripcion varchar(100) not null,
	categoria_udm char(1) not null,
	constraint unidades_medida_pk primary key (codigo_udm),
	constraint unidades_medida_y_cudm_fk foreign key (categoria_udm) references categorias_unidad_medida(codigo_cdm)
);
insert into unidades_medida(codigo_udm,descripcion,categoria_udm)
values ('ml','mililitros','V'),
		('l','litros','V'),
		('u','unidad','U'),
		('d','docena','U'),
		('g','gramos','P'),
		('kg','kilogramos','P'),
		('lb','libras','P');
select * from unidades_medida;

--TABLA PRODUCTOS--
drop table if exists productos;
create table productos (
	codigo_prod serial not null,
	nombre varchar(100) not null,
	udm varchar(2) not null,
	precio_venta money not null,
	tiene_iva boolean not null,
	coste money not null,
	categoria int not null,
	stock int not null,
	constraint productos_pk primary key (codigo_prod),
	constraint productos_unidades_medida_fk foreign key (udm) references unidades_medida(codigo_udm),
	constraint productos_categorias_fk foreign key (categoria) references categorias(codigo_cat)
);
insert into productos (nombre,udm,precio_venta,tiene_iva,coste,categoria,stock)
values ('Coca cola pequeña','u',0.5804,true,0.3729,7,110),
	   ('Salsa de tomate','kg',0.85,true,0.8736,3,0),
	   ('Mostaza','kg',0.95,true,0.89,3,0),
	   ('Fuze tea','u',0.8,true,0.7,7,49);
select * from productos;

--TABLA HISTORIAL_STOCK--
drop table if exists historial_stock;
create table historial_stock (
	codigo_historial serial not null,
	fecha timestamp not null,
	referencia varchar(100) not null,
	producto int not null,
	cantidad int not null,
	constraint historial_stock_pk primary key (codigo_historial),
	constraint historial_stock_productos_fk foreign key (producto) references productos(codigo_prod)
);
insert into historial_stock (fecha,referencia,producto,cantidad)
values ('20/11/2023 19:59','Pedido 1',1,100),
	   ('20/11/2023 19:59','Pedido 1',4,50),
	   ('20/11/2023 20:59','Pedido 2',1,10),
	   ('20/11/2023 20:59','Venta 1',1,-5),
	   ('20/11/2023 20:59','Venta 1',4,-1);
select * from historial_stock;

--TABLE CABECERA_VENTA--
drop table if exists cabecera_venta;
create table cabecera_venta(
	codigo_cv serial not null,
	fecha timestamp not null,
	total_sin_iva money not null,
	iva money not null,
	total money not null,
	constraint cabecera_venta_pk primary key (codigo_cv)
);
insert into cabecera_venta (fecha,total_sin_iva,iva,total)
values ('20/11/2023 20:59',3.26,0.39,3.65);
select * from cabecera_venta

--TABLA DETALLE_VENTAS--
drop table if exists detalle_ventas;
create table detalle_ventas (
	codigo_dv serial not null,
	cabecera_ventas int not null,
	producto int not null,
	cantidad int not null,
	precio_venta money not null,
	subtotal money not null,
	subtotal_iva money not null,
	constraint detalle_ventas_pk primary key (codigo_dv),
	constraint detalle_ventas_cabecera_ventas_fk foreign key (cabecera_ventas) references cabecera_venta(codigo_cv),
	constraint detalle_ventas_producto_fk foreign key (producto) references productos(codigo_prod)
);
insert into detalle_ventas(cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_iva)
values (1,1,5,0.58,2.9,3.25),
	   (1,4,1,0.36,0.36,0.4);
select * from detalle_ventas