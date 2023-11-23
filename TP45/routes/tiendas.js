var express = require('express')
var router = express.Router()

var bd = require('./bd')

router.get('/creartabla', function (req, res, next) {
  bd.query('drop table if exists tiendas', function (error, resultado) {
    if (error) {
      console.log(error)
      return
    }
  })
  bd.query('create table tiendas (' +
    'id int primary key auto_increment,' +
    'nombre_comercial varchar (50),' +
    'tipo int,' +
    'direccion varchar (50),' +
    'codpost int,' +
    'poblacion int,' +
    'lat int,' +
    'lng int' +

    ')', function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
  res.render('mensajetiendas', { mensaje: 'La tabla se creo correctamente.' })
})


//Alta de registros
router.get('/alta', function (req, res, next) {
  res.render('altatiendas')
})


router.post('/alta', function (req, res, next) {
  const registro = {
    nombre_comercial: req.body.nombre_comercial,
    tipo: req.body.tipo,
    direccion: req.body.direccion,
    codpost: req.body.codpost,
    poblacion: req.body.poblacion,
    lat: req.body.lat,  
    lng: req.body.lng,
  }
  bd.query('insert into tiendas set ?', registro, function (error, resultado) {
    if (error) {
      console.log(error)
      return
    }
  })
  res.render('mensajetiendas', { mensaje: 'La carga se efectuo correctamente' })
})

//Listado de tiendas 
router.get('/listado', function (req, res, next) {
  bd.query("select * from tiendas", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listartiendas', { tiendas: filas })
  })
})

//Listado de pertenecientes a Mar del PLata 

router.get('/listadocodpost', function (req, res, next) {
    bd.query("select * from tiendas where codpost = '7600'", function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listartiendas', { tiendas: filas })
    })
  })

//Listado de poblacion = 1  hacer enlace

router.get('/listadopoblacion', function (req, res, next) {
  bd.query("select * from tiendas where poblacion = '1'", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listartiendas', { tiendas: filas })
  })
})

//Listado de domicilio en calle Castello hacer enlace

router.get('/listadodomicilio', function (req, res, next) {
  bd.query("select * from tiendas where domicilio = 'Castello'", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listartiendas', { tiendas: filas })
  })
})

//Listado de tiendas tipo = 1  hacer enlace

router.get('/listadotipo', function (req, res, next) {
  bd.query("select * from tiendas where tipo = '1'", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listartiendas', { tiendas: filas })
  })
})

//Listado tienda con latitud mas alta  hacer enlace
router.get('/listadolat', function (req, res, next) {
    bd.query("select * FROM `tiendas` where lat = (select MAX(lat) FROM `tiendas`)", function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listartiendas', { tiendas: filas })
    })
  })

//Listado tienda con longitud mas baja  hacer enlace
router.get('/listadolng', function (req, res, next) {
  bd.query("select * FROM `tiendas` where lng = (select MIN(lng) FROM `tiendas`)", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listartiendas',  { tiendas: filas })
  })
})

//Modificacion :)
router.get('/modificar', function (req, res, next) {
  res.render('consultamodificacion')
})


router.post('/modificar', function (req, res, next) {
  bd.query('select * from tiendas where ? && ?', [{nombre_comercial: req.body.nombre_comercial},{tipo: req.body.tipo}], function (error, filas) {
    if (error) {
      console.log('error en la consulta')
      return
    }
    if (filas.length > 0) {
      res.render('formulariomodifica', { tiendas : filas })
    } else {
      res.render('mensajetiendas', { mensaje: 'No existe el nombre comercial o tipo de la tienda ingresada' })
    }
  })
})

router.post('/confirmarmodifica', function (req, res, next) {
  const registro = {
    nombre_comercial: req.body.nombre_comercial,
    tipo: req.body.tipo,
    direccion: req.body.direccion,
    codpost: req.body.codpost,
    poblacion: req.body.poblacion,
    lat: req.body.lat,  
    lng: req.body.lng,

  }
  bd.query('UPDATE tiedas SET ? WHERE ?', [registro, { id: req.body.id }], function (error, filas) {
    if (error) {
      console.log('error en la consulta')
      console.log(error)
      return
    }
    res.render('mensajetiendas', { mensaje: 'La tienda fue modificado' })
  })
})

//Delete :)

router.get('/delete', function (req, res, next) {
  res.render('delete')
})

router.post('/delete', function (req, res, next) {
  bd.query('DELETE FROM tiendas WHERE id = (Select id from tiendas where ? && ?)', [{nombre_comercial: req.body.nombre_comercial},{tipo: req.body.tipo}], function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
  res.render('mensajetiendas', { mensaje: 'tienda eliminado' })
})

module.exports = router