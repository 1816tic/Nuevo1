var appShellFiles = [
    '/Nuevo1/index.html',
    '/Nuevo1/css/animate.min.css',
    '/Nuevo1/css/bootstrap.min.css',
    '/Nuevo1/css/font-awesome.min.css',
    '/Nuevo1/css/jquery-ui.css',
    '/Nuevo1/css/jquery.mCustomScrollbar.min.css',
    '/Nuevo1/css/meanmenu.css',
    '/Nuevo1/css/nice-select.css',
    '/Nuevo1/css/normalize.css',
    '/Nuevo1/css/owl.carousel.min.css',
    '/Nuevo1/css/responsive.css',
    '/Nuevo1/css/slick.css',
    '/Nuevo1/css/style.css',
    '/Nuevo1/js/bootstrap.bundle.min.js',
    '/Nuevo1/js/custom.js',
    '/Nuevo1/js/jquery-3.0.0.min.js',
    '/Nuevo1/js/jquery.mCustomScrollbar.concat.min.js',
    '/Nuevo1/js/jquery.min.js',
    '/Nuevo1/js/jquery.validate.js',
    '/Nuevo1/js/plugin.js',
    '/Nuevo1/js/popper.min.js',
    '/Nuevo1//images/banner1.png',
    '/Nuevo1//images/banner2.png',
    '/Nuevo1//images/beimg.png',
    '/Nuevo1//images/beimg2.png',
    '/Nuevo1//images/beimg3.png',
    '/Nuevo1//images/cac.png',
    '/Nuevo1//images/clients.png',
    '/Nuevo1//images/cop.png',
    '/Nuevo1//images/croo.png',
    '/Nuevo1//images/croo1.png',
    '/Nuevo1//images/icon_1.png',
    '/Nuevo1//images/img.png',
    '/Nuevo1//images/logo.png',
  
  
  ];
  
  self.addEventListener('install', event => {  
  
    const endInstall = caches.open('box').then( cache =>{  
      return cache.addAll(appShellFiles);
    });
  
    event.waitUntil( endInstall);
  
    //self.skipWaiting();
  });
  
  self.addEventListener('fetch', e =>{
  
    const respuesta = caches.open( 'box' ).then( cache => {
  
           fetch( e.request ).then( newRes => 
                   cache.put( e.request, newRes ));
  
           return cache.match( e.request );
  
       });
  
       e.respondWith( respuesta );
  });