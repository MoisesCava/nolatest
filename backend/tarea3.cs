// Creamos una clase con la estructura solicitada en la tarea 1
public class ResultadoConsulta
{
    public string clientID { get; set; }
    public string productoID { get; set; }
    public string ProductoNombre { get; set; }
    public string ClienteNombre { get; set; }
    public int Cantidad { set; set;}
}

/*
Realizar las tres consultas individuales de cada tabla en su respectiva BD 
asumiento que previamente existe una clase con los metodos que se encargaran 
de hacer las 3 consultas definidas en la tarea 2 y que la clave foranea de cliente 
en carrito de compras tambien esta en una columna llamada ClienteId y no IdCliente
*/
List<ResultadoConsulta> resultadosCliente = RealizarConsultaCliente();
List<ResultadoConsulta> resultadosCarrito = RealizarConsultaCarrito();
List<ResultadoConsulta> resultadosProductos = RealizarConsultaProductos();

// Uno los resultados de cada una de las 3 consultas en una sola lista y los ordenamos por cliente y producto
List<ResultadoConsulta> resultadosFinales = resultadosCliente
    .Concat(resultadosCarrito)
    .Concat(resultadosProductos)
    .OrderBy(r => r.clientID)
    .ThenBy(r => r.productoID)
    .ToList();

// Returno la lista de los resultados combinados y ordenados 
return resultadosFinales;