if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/Nuevo1/sw.js");
    console.log ("si funciona");
  } else {
      console.log("Aqui no funciona")
  }

