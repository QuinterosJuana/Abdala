const http = require('http')
const fs = require('fs')
const public = require('public') //dudoso

const servidor = http.createServer((pedido, respuesta) => {
    const url = new URL('http://localhost:8888' + pedido.url)
    let camino = '' + url.pathname
    if (camino == '')
      camino = 'public.html'
    encaminar(pedido, respuesta, camino)
  })


  servidor.listen(8888)  

  function encaminar(pedido, respuesta, camino) {
    console.log(camino)
    switch (camino) {
      case '/IdiomaP': {
        IdiomaP (pedido, respuesta)
        break
      }
      default: {
        fs.stat(camino, error => {
          if (!error) {
            fs.readFile(camino, (error, contenido) => {
              if (error) {
                respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
                respuesta.write('Error interno')
                respuesta.end()
              } else {
                const vec = camino.split('.')
                const extension = vec[vec.length - 1]
                const mimearchivo = mime[extension]
                respuesta.writeHead(200, { 'Content-Type': mimearchivo })
                respuesta.write(contenido)
                respuesta.end()
              }
            })
          } else {
            respuesta.writeHead(404, { 'Content-Type': 'text/html' })
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
            respuesta.end()
          }
        })
      }
    }
  }

function IdiomaP(palabra) {
  
    let palabraNueva = '';
    let vocales = 'aeiouAEIOU';
  
    for (let i=0; i < palabra.length;i++){
        hola
        for (let j=0; j < vocales.length; j++){
            if (palabra[i] == vocales[j]){
                palabraNueva = palabraNueva + 'p' + palabra[i];
            }
        }
        
        palabraNueva = palabraNueva + palabra[i];

    }
  
    return palabraNueva;
  }
