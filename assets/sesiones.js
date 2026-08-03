/* ============================================================
   sesiones.js · Controlador de visibilidad del curso
   Fuente única de verdad: sesiones.csv (raíz del proyecto)

   Este archivo NO decide contenido, solo qué se ve y qué no.
   Para abrir o cerrar algo, se edita el CSV, nunca este archivo.

   Columnas del CSV
     sesion     número de sesión, 1 a 15
     titulo     título que aparece en la portada
     unidad     1 a 5, agrupa las sesiones en la portada
     estado     disponible | proximamente | oculta
     etiqueta   texto opcional de la píldora de estado, vacío usa el default
     teoria     1 / 0, muestra u oculta esa pestaña dentro de la sesión
     auditoria  1 / 0
     ficha      1 / 0
     recursos   1 / 0
     glosario   1 / 0, si los términos de esa sesión aparecen en glosario y red

   Valores aceptados como sí: 1, si, sí, x, true, y
   Cualquier otra cosa, incluida celda vacía, se lee como no.

   ------------------------------------------------------------
   Segundo CSV: enlaces.csv (raíz del proyecto)
   Todos los enlaces externos de cada sesión viven ahí, no en el HTML.

     sesion             número de sesión, 1 a 15
     gamma_url          link de la presentación Gamma, /docs/ o /embed/, da igual
     presentacion_url   archivo de la presentación para descargar (botón del encabezado)
     video_url          video de NotebookLM, link de Drive tal como lo copias
     video_modo         ambos | embed | descarga
     audio_url          podcast de NotebookLM, link de Drive tal como lo copias
     audio_modo         ambos | embed | descarga

   Celda vacía apaga esa pieza: sin video_url no se dibuja la tarjeta de video,
   sin presentacion_url no aparece el botón de descarga, y así.
   Los links de Drive se pegan tal cual (.../view?usp=...), el código deriva
   solo la versión /preview para el reproductor embebido.
   ============================================================ */
(function(){
  'use strict';

  var SRC = (document.currentScript && document.currentScript.src) || '';
  var CSV_URL = SRC ? new URL('../sesiones.csv', SRC).href : 'sesiones.csv';
  var ENL_URL = SRC ? new URL('../enlaces.csv', SRC).href : 'enlaces.csv';
  var RAIZ    = SRC ? new URL('../', SRC).href : './';

  var UNIDADES = {
    '1': 'Unidad 1 · Matemáticas como herramienta estratégica (sem. 1–2)',
    '2': 'Unidad 2 · Repaso de operaciones fundamentales (sem. 3–5)',
    '3': 'Unidad 3 · Álgebra aplicada a negocios (sem. 6–8)',
    '4': 'Unidad 4 · Pre-cálculo (sem. 9–12)',
    '5': 'Unidad 5 · Herramientas digitales, ética y cierre (sem. 13–15)'
  };

  var TABS = ['teoria', 'auditoria', 'ficha', 'recursos'];

  /* ── Parseo CSV (mismo criterio que glosario/terminos.csv) ── */
  function parsearCSV(texto){
    var lineas = texto.replace(/\r/g, '').trim().split('\n');
    var encabezados = lineas[0].split(',');
    return lineas.slice(1).map(function(linea){
      var cols = [], dentro = false, actual = '';
      for(var i = 0; i < linea.length; i++){
        var c = linea[i];
        if(c === '"'){ dentro = !dentro; }
        else if(c === ',' && !dentro){ cols.push(actual); actual = ''; }
        else { actual += c; }
      }
      cols.push(actual);
      var obj = {};
      encabezados.forEach(function(h, i){ obj[h.trim()] = (cols[i] || '').trim(); });
      return obj;
    }).filter(function(r){ return r.sesion; });
  }

  function esSi(v){
    v = (v || '').trim().toLowerCase();
    return v === '1' || v === 'si' || v === 'sí' || v === 'x' || v === 'true' || v === 'y';
  }

  function pad2(n){ return (n < 10 ? '0' : '') + n; }

  function normalizarFila(f){
    var n = parseInt(f.sesion, 10);
    var estado = (f.estado || '').trim().toLowerCase();
    if(estado !== 'disponible' && estado !== 'oculta') estado = 'proximamente';
    var tabs = {};
    TABS.forEach(function(k){ tabs[k] = esSi(f[k]); });
    return {
      n: n,
      titulo: (f.titulo || '').trim(),
      unidad: (f.unidad || '').trim(),
      estado: estado,
      etiqueta: (f.etiqueta || '').trim(),
      carpeta: 'semana-' + pad2(n),
      tabs: tabs,
      glosario: esSi(f.glosario)
    };
  }

  /* ── Carga con caché: varias llamadas comparten un solo fetch ── */
  var promesa = null;
  function cargar(){
    if(!promesa){
      promesa = fetch(CSV_URL)
        .then(function(r){
          if(!r.ok) throw new Error('sesiones.csv: HTTP ' + r.status);
          return r.text();
        })
        .then(function(txt){
          return parsearCSV(txt).map(normalizarFila).sort(function(a, b){ return a.n - b.n; });
        });
    }
    return promesa;
  }

  function buscar(lista, n){
    n = parseInt(n, 10);
    for(var i = 0; i < lista.length; i++){ if(lista[i].n === n) return lista[i]; }
    return null;
  }

  /* ── Set de sesiones cuyos términos sí entran al glosario y a la red ── */
  function visiblesGlosario(){
    return cargar().then(function(lista){
      var set = {};
      lista.forEach(function(s){
        if(s.estado === 'disponible' && s.glosario) set[String(s.n)] = true;
      });
      return {
        tiene: function(semana){ return !!set[String(parseInt(semana, 10))]; },
        total: Object.keys(set).length
      };
    });
  }

  /* ── Portada: pinta la lista de las 15 sesiones agrupadas por unidad ── */
  function pintarIndice(idContenedor){
    var cont = document.getElementById(idContenedor);
    if(!cont) return;
    return cargar().then(function(lista){
      var visibles = lista.filter(function(s){ return s.estado !== 'oculta'; });
      var html = '';
      var unidadPrev = null;
      var abierta = false;

      visibles.forEach(function(s){
        if(s.unidad !== unidadPrev){
          if(abierta) html += '</div>';
          html += '<div class="unidad-label">' + (UNIDADES[s.unidad] || 'Unidad ' + s.unidad) + '</div>';
          html += '<div class="lista-semanas">';
          abierta = true;
          unidadPrev = s.unidad;
        }
        var listo = s.estado === 'disponible';
        var etiqueta = s.etiqueta || (listo ? 'Disponible' : 'Próximamente');
        var interior =
          '<span class="num">Semana ' + s.n + '</span>' +
          '<span class="titulo">' + s.titulo + '</span>' +
          '<span class="estado ' + (listo ? 'listo' : 'pendiente') + '">' + etiqueta + '</span>';
        html += listo
          ? '<a href="' + s.carpeta + '/index.html" class="semana-item disponible">' + interior + '</a>'
          : '<div class="semana-item pendiente" aria-disabled="true">' + interior + '</div>';
      });

      if(abierta) html += '</div>';
      cont.innerHTML = html;
      return lista;
    }).catch(function(e){
      cont.innerHTML = '<p style="color:var(--gris-nota);padding:24px 0;">' +
        'No se pudo cargar la lista de sesiones. Abre la página desde un servidor local, no con doble clic sobre el archivo.</p>';
      console.error(e);
    });
  }

  /* ── Aviso de sesión cerrada, sustituye el contenido de la semana ── */
  function pintarCerrada(s){
    var etiqueta = (s && s.etiqueta) || 'Esta sesión todavía no está abierta';
    document.body.innerHTML =
      '<div style="max-width:520px;margin:18vh auto;padding:0 24px;text-align:center;font-family:\'Public Sans\',system-ui,sans-serif;">' +
        '<div style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8a8a8a;">' +
          'Semana ' + (s ? s.n : '') +
        '</div>' +
        '<h1 style="font-family:\'Fraunces\',serif;font-size:26px;margin:10px 0 12px;color:#1c1c1c;">' + etiqueta + '</h1>' +
        '<p style="font-size:15px;line-height:1.6;color:#555;">Se abrirá cuando lleguemos a esa sesión del curso. Mientras tanto puedes revisar las semanas que ya están publicadas.</p>' +
        '<p style="margin-top:22px;"><a href="' + RAIZ + 'index.html" style="color:#2B579A;font-size:14px;">Volver al índice del curso →</a></p>' +
      '</div>';
  }

  /* ============================================================
     ENLACES: gamma, presentación, video y audio de cada sesión
     ============================================================ */

  var promesaEnlaces = null;
  function cargarEnlaces(){
    if(!promesaEnlaces){
      promesaEnlaces = fetch(ENL_URL)
        .then(function(r){
          if(!r.ok) throw new Error('enlaces.csv: HTTP ' + r.status);
          return r.text();
        })
        .then(function(txt){
          var mapa = {};
          parsearCSV(txt).forEach(function(f){ mapa[String(parseInt(f.sesion, 10))] = f; });
          return mapa;
        });
    }
    return promesaEnlaces;
  }

  /* Un link de Drive se pega tal cual; de ahí salen las dos versiones. */
  function idDrive(url){
    var m = /drive\.google\.com\/file\/d\/([\w-]+)/.exec(url || '');
    return m ? m[1] : null;
  }
  function urlEmbed(url){
    var id = idDrive(url);
    return id ? 'https://drive.google.com/file/d/' + id + '/preview' : url;
  }
  function urlDescarga(url){
    var id = idDrive(url);
    return id ? 'https://drive.google.com/file/d/' + id + '/view?usp=drive_link' : url;
  }
  /* Gamma acepta el link normal (/docs/) o el de incrustar (/embed/). */
  function urlGammaEmbed(url){
    var m = /gamma\.app\/(?:docs|embed)\/([\w-]+)/.exec(url || '');
    return m ? 'https://gamma.app/embed/' + m[1] : url;
  }

  function ocultar(el){ if(el) el.style.display = 'none'; }
  function mostrar(el, display){ if(el) el.style.display = display || ''; }

  /* Aplica un medio (video o audio) según su url y su modo. */
  function aplicarMedio(prefijo, url, modo){
    var cap = prefijo.charAt(0).toUpperCase() + prefijo.slice(1);
    var card  = document.getElementById('card' + cap);
    var frame = document.getElementById(prefijo + 'Frame');
    var boton = document.getElementById(prefijo + 'Descarga');

    if(!url){ ocultar(card); return; }

    modo = (modo || 'ambos').trim().toLowerCase();
    var quiereEmbed    = modo !== 'descarga';
    var quiereDescarga = modo !== 'embed';

    if(frame){
      if(quiereEmbed){ frame.src = urlEmbed(url); mostrar(frame.parentElement); }
      else { ocultar(frame.parentElement); }
    }
    if(boton){
      if(quiereDescarga){ boton.href = urlDescarga(url); mostrar(boton, 'inline-flex'); }
      else { ocultar(boton); }
    }
    mostrar(card);
  }

  function aplicarEnlaces(numero){
    return cargarEnlaces().then(function(mapa){
      var e = mapa[String(parseInt(numero, 10))] || {};

      // Botón de descarga de la presentación, en el encabezado
      var descarga = document.getElementById('descargaSesion');
      if(descarga){
        if(e.presentacion_url){ descarga.href = e.presentacion_url; mostrar(descarga, 'inline-flex'); }
        else { ocultar(descarga); }
      }

      // Presentación Gamma incrustada en la pestaña de Teoría
      var gamma = document.getElementById('gammaFrame');
      if(gamma){
        if(e.gamma_url){ gamma.src = urlGammaEmbed(e.gamma_url); mostrar(gamma, 'block'); }
        else {
          ocultar(gamma);
          var panel = document.getElementById('panelTeoria');
          if(panel && !panel.querySelector('.sin-teoria')){
            var aviso = document.createElement('p');
            aviso.className = 'sin-teoria';
            aviso.style.cssText = 'padding:40px 24px;text-align:center;color:var(--gris-nota);font-size:14px;';
            aviso.textContent = 'La presentación de esta sesión todavía no está publicada.';
            panel.appendChild(aviso);
          }
        }
      }

      aplicarMedio('video', e.video_url, e.video_modo);
      aplicarMedio('audio', e.audio_url, e.audio_modo);
      return e;
    }).catch(function(err){ console.error(err); return null; });
  }

  /* ── Página de semana: guardia de acceso y visibilidad de pestañas ── */
  function aplicarSesion(numero){
    return cargar().then(function(lista){
      var s = buscar(lista, numero);
      if(!s) return null;

      if(s.estado !== 'disponible'){ pintarCerrada(s); return s; }

      aplicarEnlaces(numero);

      var activos = TABS.filter(function(k){ return s.tabs[k]; });

      TABS.forEach(function(k){
        var id = k.charAt(0).toUpperCase() + k.slice(1);
        var btn = document.getElementById('tabBtn' + id);
        var panel = document.getElementById('panel' + id);
        if(!s.tabs[k]){
          if(btn) btn.style.display = 'none';
          if(panel) panel.classList.remove('active');
        }
      });

      if(!activos.length){ pintarCerrada(s); return s; }

      // Si la pestaña activa quedó apagada, se abre la primera que sí esté encendida.
      var hayActiva = activos.some(function(k){
        var p = document.getElementById('panel' + k.charAt(0).toUpperCase() + k.slice(1));
        return p && p.classList.contains('active');
      });
      if(!hayActiva && typeof window.cambiarTab === 'function') window.cambiarTab(activos[0]);

      return s;
    }).catch(function(e){ console.error(e); return null; });
  }

  window.FCNC = {
    cargar: cargar,
    cargarEnlaces: cargarEnlaces,
    pintarIndice: pintarIndice,
    aplicarSesion: aplicarSesion,
    aplicarEnlaces: aplicarEnlaces,
    visiblesGlosario: visiblesGlosario,
    UNIDADES: UNIDADES
  };
})();
