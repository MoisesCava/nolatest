-- SE REALIZAN LAS 3 CONSULTAS POR SEPARADO--

-- CONSULTA DE CLIENTE --
SELECT clienteId, nombres
FROM base_datos_cliente.dbo.cliente

-- CONSULTA DE PRODUCTO --
SELECT productoId, nombre
FROM base_datos_productos.dbo.productos

-- CONSULTA DE CARRITO DE COMPRAS --
SELECT idCliente as clienteId, productoId, cantidad
FROM base_datos_carrito.dbo.carrito_de_compras