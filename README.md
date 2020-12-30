# Portfolio martreyz
## Portfolio Marta Rey Rodríguez, desarrolladora front end junior


### Descripción

Realización de un portfolio personal para la presentación de proyectos:

	• Uso de Sass para los estilos
	• Uso de ES6 y React para la estructuración del JS de la aplicación
	• Uso de mediaqueries para que el diseño sea adaptable al dispositivo
	• Desarrollo usando la estrategia mobile first
	• Uso de git para el control de versiones del proyecto, con ramas.
	• Uso de react-router para navegar en la página entre las secciones de contacto, proyectos e inicio.

Para la realización de este proyecto se han seguido las siguientes fases:

	• Diseño de la apariencia del portfolio y organización de contenidos en secciones.
	• Desarrollo del código JS dentro de React para las funcionalidades requeridas en el portfolio.
	• Maquetación de la web.
	• Creación de las animaciones CSS necesarias para el diseño decorativo del fondo. 
	• Creación de un diseño alternativo de alto contraste y mejora de accesibilidad.
	• Creación de un botón toggle de traducción a inglés y traducción de todos los contenidos.
	
#### Landing


![Portfoliolanding](https://user-images.githubusercontent.com/69849664/103347111-55cd4d80-4a96-11eb-9e31-f479495b7f29.png)


#### Proyectos


![portfolioproyectos](https://user-images.githubusercontent.com/69849664/103347126-6251a600-4a96-11eb-8739-95347a86a9cc.png)


#### Contacto


![portfoliocontacto](https://user-images.githubusercontent.com/69849664/103347143-709fc200-4a96-11eb-9bd3-3f28fa48eaef.png)



## Composición del código:

- Components: Contiene todos los componentes de la aplicación:
	- App.js: Componente raíz de la aplicación.
	- Footer.js: Componente con el código correspondiente al footer.
	- Header.js: Componente con el código correspondiente al header.
	- Background.js: Componente con el código correspondiente al contenido decorativo del fondo.
	- Contact.js: Contienen el código referente a la sección de contacto
	- Projects.js: Contiene el código referente a la sección de proyectos.
	- Landing.js: Contiene el código referente a la sección de la página de landing.
	
- Data: Contiene los .json de datos requeridos para la aplicación:
	- Projects.json: Información de los proyectos en español.
	- projectsEn.json: información de los proyectos en inglés.
	
- Stylesheets: Dividido en partials, cada uno correspondiendo a los estilos de su componente homónimo.


  
## Arranque del proyecto:

- npm install: Para instalar las dependencias
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run build/mv build docs: Para publicar el proyecto a producción
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">


Hecho con :cat: por martreyz
