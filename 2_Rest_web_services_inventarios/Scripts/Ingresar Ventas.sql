select * from cabecera_venta
select * from detalle_ventas
select * from historial_stock
select * from productos


insert into cabecera_venta (fecha,total_sin_iva,iva,total)
values ('2024-08-05 22:08:00',0,0,0)

insert into detalle_ventas (cabecera_ventas,producto,cantidad,precio_venta,subtotal,subtotal_iva)
values (2,2,2,0.95,1.9,2.18)

update cabecera_venta
set total_sin_iva = 1.1, iva = 1.2, total = 1.3
where codigo_cv = 2

insert into historial_stock (fecha,referencia,producto,cantidad)
values ('2024-05-08','Venta #2',2,-5)