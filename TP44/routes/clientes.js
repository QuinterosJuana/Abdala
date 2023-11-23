var express = require('express')
var router = express.Router()

var bd = require('./bd')

router.get('/creartabla', function (req, res, next) {
  bd.query('drop table if exists clientes', function (error, resultado) {
    if (error) {
      console.log(error)
      return
    }
  })
  bd.query('create table clientes (' +
    'id int primary key auto_increment,' +
    'nombre varchar (50),' +
    'apellido varchar (50),' +
    'fecha varchar (50),' +
    'P int,' +
    'est float,' +
    'domicilio varchar (50),' +
    'codpost int,' +
    'tel1 int,' +
    'tel2 int,' +
    'email varchar (50),' +
    'edad int' +
    ')', function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
  res.render('mensajecliente', { mensaje: 'La tabla se creo correctamente.' })
})


//Alta de registros
router.get('/alta', function (req, res, next) {
  res.render('altaclientes')
})


router.post('/alta', function (req, res, next) {
  const registro = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fecha: req.body.fecha,
    P: req.body.P,
    est: req.body.est,  
    domicilio: req.body.domicilio,
    codpost: req.body.codpost,
    tel1: req.body.tel1,
    tel2: req.body.tel2,
    email: req.body.email,
    edad: req.body.edad,
  }
  bd.query('insert into clientes set ?', registro, function (error, resultado) {
    if (error) {
      console.log(error)
      return
    }
  })
  res.render('mensajecliente', { mensaje: 'La carga se efectuo correctamente' })
})

//Listado de clientes :)
router.get('/listado', function (req, res, next) {
  bd.query("select * from clientes", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listarclientes', { clientes: filas })
  })
})

//Listado de no pertenecientes a Mar del PLata :)

router.get('/listadocodpost', function (req, res, next) {
    bd.query("select * from clientes where codpost != '7600'", function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listarclientes', { clientes: filas })
    })
  })
//Listado de Peso :)
router.get('/listadopeso', function (req, res, next) {
    bd.query('select * from clientes where P = (select MAX(P) FROM `clientes`)', function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listarclientes', { clientes: filas })
    })
  })

  //Listado de Peso mayor a 90 :)
router.get('/listadopesomayor90', function (req, res, next) {
  bd.query('select * from clientes where P > 90', function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listarclientes', { clientes: filas })
  })
})
//Listado cliente mas alto :)
router.get('/listadoestatura', function (req, res, next) {
    bd.query("select * FROM `clientes` where est = '1.78'", function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listarclientes', { clientes: filas })
    })
  })

//Promedio de altura de los clientes :)

router.get('/promedioaltura', function (req, res, next){
  bd.query("select AVG(est) AS prom FROM clientes", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    } 
    res.render('mostrarpromedio', { clientes: filas })
  })
})

//Listado de cliente menor edad :)

router.get('/listadoedad', function (req, res, next) {
  bd.query('select * from clientes where edad = (select MIN(edad) FROM `clientes`)', function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listarclientes', { clientes: filas })
  })
})

//Listado de clientes con gmail :)

router.get('/listadoemail', function (req, res, next) {
  bd.query("select * from clientes where email = 'gmail'", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listarclientes', { clientes: filas })
  })
})

//Modificacion :)
router.get('/modificar', function (req, res, next) {
  res.render('consultamodificacion')
})


router.post('/modificar', function (req, res, next) {
  bd.query('select * from clientes where ? && ?', [{nombre: req.body.nombre},{apellido: req.body.apellido}], function (error, filas) {
    if (error) {
      console.log('error en la consulta')
      return
    }
    if (filas.length > 0) {
      res.render('formulariomodifica', { clientes: filas })
    } else {
      res.render('mensajecliente', { mensaje: 'No existe el nombre o apellido del cliente ingresado' })
    }
  })
})

router.post('/confirmarmodifica', function (req, res, next) {
  const registro = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fecha: req.body.fecha,
    P: req.body.P,
    est: req.body.est,  
    domicilio: req.body.domicilio,
    codpost: req.body.codpost,
    tel1: req.body.tel1,
    tel2: req.body.tel2,
    email: req.body.email,
    edad: req.body.edad, 

  }
  bd.query('UPDATE clientes SET ? WHERE ?', [registro, { id: req.body.id }], function (error, filas) {
    if (error) {
      console.log('error en la consulta')
      console.log(error)
      return
    }
    res.render('mensajecliente', { mensaje: 'El cliente fue modificado' })
  })
})

//Delete :)

router.get('/delete', function (req, res, next) {
  res.render('delete')
})

router.post('/delete', function (req, res, next) {
  bd.query('DELETE FROM clientes WHERE id = (Select id from clientes where ? && ?)', [{nombre: req.body.nombre},{apellido: req.body.apellido}], function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
  res.render('mensajecliente', { mensaje: 'cliente eliminado' })
})

module.exports = router