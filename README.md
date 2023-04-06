<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png" alt="Project logo"></a>
</p>

<h3 align="center">Test Developer Full Stack</h3>

<div align="center">


[![TailwindCSS](https://img.shields.io/badge/tailwindcss-3.3.1-blue.svg)]()
[![React](https://img.shields.io/badge/React-blue.svg)]()
[![Vite](https://img.shields.io/badge/-Vite-yellow)]()
[![ReactIcon](https://img.shields.io/badge/react--icon-4.8.0-red.svg)]()
[![C#](https://img.shields.io/badge/-C%23-green)]()
[![SQL](https://img.shields.io/badge/SQL-orange.svg)]()
[![Dependencias](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)](#consideration)

</div>

---

<p align="center"> Este repositorio contiene la solución a una prueba fullstack que combina el uso de .NET y React. La prueba incluía un desafío de backend que requería la realización de cuatro consultas SQL y un algoritmo para unir tres de ellas. Por otro lado, la prueba de frontend consistía en crear un clon responsivo de WhatsApp, consumiendo tres endpoints de un servidor de Node.
    <br> 
</p>

## 📝 Tabla de contenido

- [Consideraciones](#consideration)
- [Uso del frontend](#usage)
- [Autor](#authors)

## ✔️ Consideraciones <a name = "consideration"></a>

* El repositorio con tiene las carpetas backend para la solución a las tareas propuestas en la prueba de backend y la carpeta front para el cliente.

* Para la prueba de backend asumí que las BD eran diferentes, pero se encontraban en el mismo servidor.

* Tuve que agregar la librería cors al servidor para poder hacer peticiones desde mi app de React aunque las instrucciones decían "No debe modificar el servidor de pruebas."

* Para el cambio de foto de perfil tuve que agregar un alert, ya que el servidor no permitía la carga de archivos base64 superiores a 100kb. Esto se debe a que el body-parser por defecto tiene ese límite.

* El filtro de chats es funcional con estados locales.

* El botón para cambiar a modo oscuro es funcional y se realizo siguiendo las instrucciones.

## 🔧 Uso <a name = "usage"></a>
Para correr el entorno de desarrollo solo es necesario acceder a la carpeta client, tener el servidor de pruebas corriendo (usando la librería cors) y ejecutar los siguientes comandos (con la librería co):

Paso 1

```
npm install
```

Paso 2

```
npm run dev
```


## ✍️ Autor <a name = "authors"></a>

<p> Soy <b>Moisés Escudero</b>, ingeniero informático con 2 años de experiencia en el desarrollo fullstack. Me gusta trabajar con tecnologías como React, Tailwind CSS, Javascript y Python. Actualmente busco oportunidades para seguir creciendo y aportando mis habilidades a proyectos desafiantes. </p>
<p> Puedes encontrar más información sobre mi experiencia y proyectos en mi perfil de LinkedIn: <a href="https://www.linkedin.com/in/moisesescudero/">Moises Escudero</a></p>
 <br> 
