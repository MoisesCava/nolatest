SELECT 
  c.clienteId as clientID,
  p.productoId as productoID,
  p.nombre as ProductoNombre,
  c.nombres as ClienteNombre,
  cc.cantidad as Cantidad
FROM cliente c
JOIN carrito_compras cc ON c.clienteId = cc.clienteId
JOIN productos p ON cc.productoId = p.productoId