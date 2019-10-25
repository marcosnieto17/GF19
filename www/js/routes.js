angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.iNICIO', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/iNICIO.html',
        controller: 'iNICIOCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.iNDICE'
      2) Using $state.go programatically:
        $state.go('tabsController.iNDICE');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.iNDICE', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/iNDICE.html',
        controller: 'iNDICECtrl'
      },
      'tab2': {
        templateUrl: 'templates/iNDICE.html',
        controller: 'iNDICECtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pADRN'
      2) Using $state.go programatically:
        $state.go('tabsController.pADRN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.pADRN', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/pADRN.html',
        controller: 'pADRNCtrl'
      },
      'tab3': {
        templateUrl: 'templates/pADRN.html',
        controller: 'pADRNCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.acercaDeLaApp', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('tabsController.guAsEnPDF', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/guAsEnPDF.html',
        controller: 'guAsEnPDFCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.QuElegimos'
      2) Using $state.go programatically:
        $state.go('tabsController.QuElegimos');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page7
      /page1/tab2/page7
  */
  .state('tabsController.QuElegimos', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/QuElegimos.html',
        controller: 'QuElegimosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/QuElegimos.html',
        controller: 'QuElegimosCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.electores'
      2) Using $state.go programatically:
        $state.go('tabsController.electores');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.electores', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/electores.html',
        controller: 'electoresCtrl'
      },
      'tab2': {
        templateUrl: 'templates/electores.html',
        controller: 'electoresCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.padrNElectoral'
      2) Using $state.go programatically:
        $state.go('tabsController.padrNElectoral');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page9
      /page1/tab2/page9
  */
  .state('tabsController.padrNElectoral', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/padrNElectoral.html',
        controller: 'padrNElectoralCtrl'
      },
      'tab2': {
        templateUrl: 'templates/padrNElectoral.html',
        controller: 'padrNElectoralCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.autoridadesDeMesa'
      2) Using $state.go programatically:
        $state.go('tabsController.autoridadesDeMesa');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
  */
  .state('tabsController.autoridadesDeMesa', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/autoridadesDeMesa.html',
        controller: 'autoridadesDeMesaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/autoridadesDeMesa.html',
        controller: 'autoridadesDeMesaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.fiscalesPartidarios'
      2) Using $state.go programatically:
        $state.go('tabsController.fiscalesPartidarios');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
  */
  .state('tabsController.fiscalesPartidarios', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/fiscalesPartidarios.html',
        controller: 'fiscalesPartidariosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/fiscalesPartidarios.html',
        controller: 'fiscalesPartidariosCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.delegadosDeLaJusticiaElectoral'
      2) Using $state.go programatically:
        $state.go('tabsController.delegadosDeLaJusticiaElectoral');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page19
      /page1/tab2/page19
  */
  .state('tabsController.delegadosDeLaJusticiaElectoral', {
    url: '/page19',
    views: {
      'tab1': {
        templateUrl: 'templates/delegadosDeLaJusticiaElectoral.html',
        controller: 'delegadosDeLaJusticiaElectoralCtrl'
      },
      'tab2': {
        templateUrl: 'templates/delegadosDeLaJusticiaElectoral.html',
        controller: 'delegadosDeLaJusticiaElectoralCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.comandoGeneralElectoral'
      2) Using $state.go programatically:
        $state.go('tabsController.comandoGeneralElectoral');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page25
      /page1/tab2/page25
  */
  .state('tabsController.comandoGeneralElectoral', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/comandoGeneralElectoral.html',
        controller: 'comandoGeneralElectoralCtrl'
      },
      'tab2': {
        templateUrl: 'templates/comandoGeneralElectoral.html',
        controller: 'comandoGeneralElectoralCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.personalDelCorreo'
      2) Using $state.go programatically:
        $state.go('tabsController.personalDelCorreo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page18
      /page1/tab2/page18
  */
  .state('tabsController.personalDelCorreo', {
    url: '/page18',
    views: {
      'tab1': {
        templateUrl: 'templates/personalDelCorreo.html',
        controller: 'personalDelCorreoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/personalDelCorreo.html',
        controller: 'personalDelCorreoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.acompaAntesCVicoElectorales'
      2) Using $state.go programatically:
        $state.go('tabsController.acompaAntesCVicoElectorales');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page17
      /page1/tab2/page17
  */
  .state('tabsController.acompaAntesCVicoElectorales', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/acompaAntesCVicoElectorales.html',
        controller: 'acompaAntesCVicoElectoralesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/acompaAntesCVicoElectorales.html',
        controller: 'acompaAntesCVicoElectoralesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.presentaciNDeAutoridadesDeMesa'
      2) Using $state.go programatically:
        $state.go('tabsController.presentaciNDeAutoridadesDeMesa');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page16
      /page1/tab2/page16
  */
  .state('tabsController.presentaciNDeAutoridadesDeMesa', {
    url: '/page16',
    views: {
      'tab1': {
        templateUrl: 'templates/presentaciNDeAutoridadesDeMesa.html',
        controller: 'presentaciNDeAutoridadesDeMesaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/presentaciNDeAutoridadesDeMesa.html',
        controller: 'presentaciNDeAutoridadesDeMesaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.entregaDeUrnaDocumentosYTiles'
      2) Using $state.go programatically:
        $state.go('tabsController.entregaDeUrnaDocumentosYTiles');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page15
      /page1/tab2/page15
  */
  .state('tabsController.entregaDeUrnaDocumentosYTiles', {
    url: '/page15',
    views: {
      'tab1': {
        templateUrl: 'templates/entregaDeUrnaDocumentosYTiles.html',
        controller: 'entregaDeUrnaDocumentosYTilesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/entregaDeUrnaDocumentosYTiles.html',
        controller: 'entregaDeUrnaDocumentosYTilesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.preparaciNDeLaMesaYArmadoDeUrna'
      2) Using $state.go programatically:
        $state.go('tabsController.preparaciNDeLaMesaYArmadoDeUrna');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page14
      /page1/tab2/page14
  */
  .state('tabsController.preparaciNDeLaMesaYArmadoDeUrna', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/preparaciNDeLaMesaYArmadoDeUrna.html',
        controller: 'preparaciNDeLaMesaYArmadoDeUrnaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/preparaciNDeLaMesaYArmadoDeUrna.html',
        controller: 'preparaciNDeLaMesaYArmadoDeUrnaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.habilitaciNDelCuartoOscuro'
      2) Using $state.go programatically:
        $state.go('tabsController.habilitaciNDelCuartoOscuro');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page13
      /page1/tab2/page13
  */
  .state('tabsController.habilitaciNDelCuartoOscuro', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/habilitaciNDelCuartoOscuro.html',
        controller: 'habilitaciNDelCuartoOscuroCtrl'
      },
      'tab2': {
        templateUrl: 'templates/habilitaciNDelCuartoOscuro.html',
        controller: 'habilitaciNDelCuartoOscuroCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cuartoOscuroAccesible'
      2) Using $state.go programatically:
        $state.go('tabsController.cuartoOscuroAccesible');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page24
      /page1/tab2/page24
  */
  .state('tabsController.cuartoOscuroAccesible', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/cuartoOscuroAccesible.html',
        controller: 'cuartoOscuroAccesibleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/cuartoOscuroAccesible.html',
        controller: 'cuartoOscuroAccesibleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.aperturaDelActo'
      2) Using $state.go programatically:
        $state.go('tabsController.aperturaDelActo');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page23
      /page1/tab2/page23
  */
  .state('tabsController.aperturaDelActo', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/aperturaDelActo.html',
        controller: 'aperturaDelActoCtrl'
      },
      'tab2': {
        templateUrl: 'templates/aperturaDelActo.html',
        controller: 'aperturaDelActoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.procedimientoDeVotaciN'
      2) Using $state.go programatically:
        $state.go('tabsController.procedimientoDeVotaciN');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page22
      /page1/tab2/page22
  */
  .state('tabsController.procedimientoDeVotaciN', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/procedimientoDeVotaciN.html',
        controller: 'procedimientoDeVotaciNCtrl'
      },
      'tab2': {
        templateUrl: 'templates/procedimientoDeVotaciN.html',
        controller: 'procedimientoDeVotaciNCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.votoDeIdentidadImpugnada'
      2) Using $state.go programatically:
        $state.go('tabsController.votoDeIdentidadImpugnada');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page20
      /page1/tab2/page20
  */
  .state('tabsController.votoDeIdentidadImpugnada', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/votoDeIdentidadImpugnada.html',
        controller: 'votoDeIdentidadImpugnadaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/votoDeIdentidadImpugnada.html',
        controller: 'votoDeIdentidadImpugnadaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.votoDelComandoGeneralElectoral'
      2) Using $state.go programatically:
        $state.go('tabsController.votoDelComandoGeneralElectoral');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page32
      /page1/tab2/page32
  */
  .state('tabsController.votoDelComandoGeneralElectoral', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/votoDelComandoGeneralElectoral.html',
        controller: 'votoDelComandoGeneralElectoralCtrl'
      },
      'tab2': {
        templateUrl: 'templates/votoDelComandoGeneralElectoral.html',
        controller: 'votoDelComandoGeneralElectoralCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.funcionamientoDelCuartoOscuro'
      2) Using $state.go programatically:
        $state.go('tabsController.funcionamientoDelCuartoOscuro');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page31
      /page1/tab2/page31
  */
  .state('tabsController.funcionamientoDelCuartoOscuro', {
    url: '/page31',
    views: {
      'tab1': {
        templateUrl: 'templates/funcionamientoDelCuartoOscuro.html',
        controller: 'funcionamientoDelCuartoOscuroCtrl'
      },
      'tab2': {
        templateUrl: 'templates/funcionamientoDelCuartoOscuro.html',
        controller: 'funcionamientoDelCuartoOscuroCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.clausuraDelActoElectoral'
      2) Using $state.go programatically:
        $state.go('tabsController.clausuraDelActoElectoral');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page30
      /page1/tab2/page30
  */
  .state('tabsController.clausuraDelActoElectoral', {
    url: '/page30',
    views: {
      'tab1': {
        templateUrl: 'templates/clausuraDelActoElectoral.html',
        controller: 'clausuraDelActoElectoralCtrl'
      },
      'tab2': {
        templateUrl: 'templates/clausuraDelActoElectoral.html',
        controller: 'clausuraDelActoElectoralCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.escrutinioDeLaMesa'
      2) Using $state.go programatically:
        $state.go('tabsController.escrutinioDeLaMesa');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page29
      /page1/tab2/page29
  */
  .state('tabsController.escrutinioDeLaMesa', {
    url: '/page29',
    views: {
      'tab1': {
        templateUrl: 'templates/escrutinioDeLaMesa.html',
        controller: 'escrutinioDeLaMesaCtrl'
      },
      'tab2': {
        templateUrl: 'templates/escrutinioDeLaMesa.html',
        controller: 'escrutinioDeLaMesaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.actaEscrutinioTelegramaYCertificados'
      2) Using $state.go programatically:
        $state.go('tabsController.actaEscrutinioTelegramaYCertificados');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page28
      /page1/tab2/page28
  */
  .state('tabsController.actaEscrutinioTelegramaYCertificados', {
    url: '/page28',
    views: {
      'tab1': {
        templateUrl: 'templates/actaEscrutinioTelegramaYCertificados.html',
        controller: 'actaEscrutinioTelegramaYCertificadosCtrl'
      },
      'tab2': {
        templateUrl: 'templates/actaEscrutinioTelegramaYCertificados.html',
        controller: 'actaEscrutinioTelegramaYCertificadosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});