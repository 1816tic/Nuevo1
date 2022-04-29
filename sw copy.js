var appShellFiles = [
    '/Prueba2/index.html',
    '/Prueba2/about.html',
    '/Prueba2/blog_single.html',
    '/Prueba2/contact.html',
    '/Prueba2/blog.html',
    '/Prueba2/service.html',
    '/Prueba2/project.html',
    '/Prueba2/team.html',
    '/Prueba2/css/bootstrap.min.css',
    '/Prueba2/css/animate.css',
    '/Prueba2/css/bootsnav.css',
    '/Prueba2/css/font-awesome.min.css',
    '/Prueba2/css/hover-min.css',
    '/Prueba2/css/magnific-popup.css',
    '/Prueba2/css/owl.carousel.min.css',
    '/Prueba2/css/owl.theme.default.min.css',
    '/Prueba2/css/responsive.css',
    '/Prueba2/css/style.css',
    '/Prueba2/js/bootsnav.js',
    '/Prueba2/js/bootstrap.min.js',
    '/Prueba2/js/custom.js',
    '/Prueba2/js/kak-menusearch.js',
    '/Prueba2/js/jquery.counterup.min.js',
    '/Prueba2/js/jquery.hc-sticky.min.js',
    '/Prueba2/js/jquery.js',
    '/Prueba2/js/jquery.magnific-popup.min.js',
    '/Prueba2/js/owl.carousel.min.js',
    '/Prueba2/js/waypoint.min.js',
    '/Prueba2/asset/images/about/ab1.jpg',
    '/Prueba2/asset/images/about/ab2.jpg',
    '/Prueba2/asset/images/about/about-banner.jpg',
    '/Prueba2/asset/images/about/about-part.jpg',
    '/Prueba2/asset/images/banner/banner1.jpg',
    '/Prueba2/asset/images/banner/banner2.jpg',
    '/Prueba2/asset/images/blog/bl1.jpg',
    '/Prueba2/asset/images/blog/bl2.jpg',
    '/Prueba2/asset/images/blog/bl3.jpg',
    '/Prueba2/asset/images/blog/bl4.jpg',
    '/Prueba2/asset/images/blog/bl5.jpg',
    '/Prueba2/asset/images/blog/bl6.jpg',
    '/Prueba2/asset/images/blog/bl7.jpg',
    '/Prueba2/asset/images/blog/bl8.jpg',
    '/Prueba2/asset/images/blog/blog-banner.jpg',
    '/Prueba2/asset/images/blog/cmn1.jpg',
    '/Prueba2/asset/images/blog/cmn2.jpg',
    '/Prueba2/asset/images/blog/cmn3.jpg',
    '/Prueba2/asset/images/blog/facebook.png',
    '/Prueba2/asset/images/blog/g.png',
    '/Prueba2/asset/images/blog/linkedin.png',
    '/Prueba2/asset/images/blog/play-icon.png',
    '/Prueba2/asset/images/blog/rp1.jpg',
    '/Prueba2/asset/images/blog/rp2.jpg',
    '/Prueba2/asset/images/blog/rp3.jpg',
    '/Prueba2/asset/images/blog/tw.png',
    '/Prueba2/asset/images/client/client1.png',
    '/Prueba2/asset/images/client/client2.png',
    '/Prueba2/asset/images/client/client3.png',
    '/Prueba2/asset/images/client/client4.png',
    '/Prueba2/asset/images/client/client5.png',
    '/Prueba2/asset/images/client/testimonial1.jpg',
    '/Prueba2/asset/images/client/testimonial2.jpg',
    '/Prueba2/asset/images/counter/counter1.png',
    '/Prueba2/asset/images/counter/counter2.png',
    '/Prueba2/asset/images/counter/counter3.png',
    '/Prueba2/asset/images/counter/counter4.png',
    '/Prueba2/asset/images/counter/counter-banner.jpg',
  
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