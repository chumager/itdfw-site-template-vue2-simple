"use strict";
//si va a usar componentes de dirección o mapas de google necesita una llave
//window.google_key = "llave de google maps";
//de la misma forma si va a necesitar bibliotecas especiales debe definirlas acá;
//window.google_libraries = "places";

//importación  diferida del front del FW.
import("@chumager/itdfw-site-base").then(async ({default: main}) => {
  //la función main retorna el siguiente objeto:
  //{
  //  app(): función usara para hacer del deploy del sitio, soporta como argumento otra app (instancia vue),
  //  Vue, la importación de vue desde la biblioteca,
  //  ...vars, todos los objetos cargados por el front del FW, dentro de los principales está store y router, usados por vuejs
  //}
  const {app /*, store, router*/} = await main();
  //a partir de acá se pueden usar las funcionalidades del router y store en caso de querer cambiar algo.

  //Se puede importar una app interna en vez de la del FW, incluso una extendida de la APP.
  //const myApp = () => import([>webpackChunkName: "DIApp"<] "./App.vue");
  //app(myApp);

  app();
  //también se pueden importar CSS para sobreescribir las definiciones previas, pero siempre debe ir al final para que se sobreescriban efectivamente
  //import("algun-css");
});
