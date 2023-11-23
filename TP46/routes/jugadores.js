var express = require('express')
var router = express.Router()

var bd = require('./bd')

router.get('/creartabla', function (req, res, next) {
  bd.query('drop table if exists jugadores', function (error, resultado) {
    if (error) {
      console.log(error)
      return
    }
  })
  bd.query('create table jugadores (' +
    'id int primary key auto_increment,' +
    'nombre varchar (50),' +
    'POS varchar (1),' +
    'edad int,' +
    'est int,' +
    'P int,' +
    'NAC varchar (50),' +
    'Ap int,' +
    'SUB int,' +
    'A int,' +
    'GA int,' +
    'At int,' +
    'FC int,' +
    'FS int,' +
    'TA int,' +
    'TR int' +
    ')', function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
  res.render('mensajejugadores', { mensaje: 'La tabla se creo correctamente.' })
})


//Alta de registros
router.get('/alta', function (req, res, next) {
  res.render('altajugadores')
})


router.post('/alta', function (req, res, next) {
  const registro = {
    nombre: req.body.nombre,
    POS: req.body.POS,
    edad: req.body.edad,
    est: req.body.est,
    P: req.body.P,  
    NAC: req.body.NAC,
    Ap: req.body.Ap,
    SUB: req.body.SUB,
    A: req.body.A,
    GA: req.body.GA,
    At: req.body.At,
    FC: req.body.FC,
    FS: req.body.FS,
    TA: req.body.TA,
    TR: req.body.TR
  }
  bd.query('insert into jugadores set ?', registro, function (error, resultado) {
    if (error) {
      console.log(error)
      return
    }
  })
  res.render('mensajejugadores', { mensaje: 'La carga se efectuo correctamente' })
})

//Listado de jugadores
router.get('/listado', function (req, res, next) {
  bd.query("select * from jugadores", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    }
    res.render('listarjugadores', { jugadores: filas })
  })
})

//Listado de Nacionalidad
router.get('/listadonac', function (req, res, next) {
    bd.query("select * from jugadores where NAC = 'Argentina'", function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listarjugadores', { jugadores: filas })
    })
  })
//Listado de Peso
router.get('/listadopeso', function (req, res, next) {
    bd.query('select * from jugadores where P >= 75 && P <= 80', function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listarjugadores', { jugadores: filas })
    })
  })
//Listado jugador mas alto
router.get('/listadoestatura', function (req, res, next) {
    bd.query("select * FROM `jugadores` where est = (select MAX(est) FROM `jugadores`)", function (error, filas) {
      if (error) {
        console.log('error en el listado')
        return
      }
      res.render('listarjugadores', { jugadores: filas })
    })
  })

//Promedio de altura de jugadores 

router.get('/promedioaltura', function (req, res, next){
  bd.query("select AVG(est) AS prom FROM jugadores", function (error, filas) {
    if (error) {
      console.log('error en el listado')
      return
    } 
    res.render('mostrarpromedio', { jugadores: filas })
  })
})

//Modificacion
router.get('/modificar', function (req, res, next) {
  res.render('consultamodificacion')
})


router.post('/modificar', function (req, res, next) {
  bd.query('select * from jugadores where ? && ?', [{nombre: req.body.nombre},{POS: req.body.POS}], function (error, filas) {
    if (error) {
      console.log('error en la consulta')
      return
    }
    if (filas.length > 0) {
      res.render('formulariomodifica', { jugadores: filas })
    } else {
      res.render('mensajejugadores', { mensaje: 'No existe el nombre o POS del jugador ingresado' })
    }
  })
})

router.post('/confirmarmodifica', function (req, res, next) {
  const registro = {
    nombre: req.body.nombre,
    POS: req.body.POS,
    edad: req.body.edad,
    est: req.body.est,
    P: req.body.P,  
    NAC: req.body.NAC,
    Ap: req.body.Ap,
    SUB: req.body.SUB,
    A: req.body.A,
    GA: req.body.GA,
    At: req.body.At,
    FC: req.body.FC,
    FS: req.body.FS,
    TA: req.body.TA,
    TR: req.body.TR
  }
  bd.query('UPDATE jugadores SET ? WHERE ?', [registro, { id: req.body.id }], function (error, filas) {
    if (error) {
      console.log('error en la consulta')
      console.log(error)
      return
    }
    res.render('mensajejugadores', { mensaje: 'El jugador fue modificado' })
  })
})

//delete

router.get('/delete', function (req, res, next) {
  res.render('delete')
})

router.post('/delete', function (req, res, next) {
  bd.query('DELETE FROM jugadores WHERE id = (Select id from jugadores where ? && ?)', [{nombre: req.body.nombre},{POS: req.body.POS}], function (error, resultado) {
      if (error) {
        console.log(error)
        return
      }
    })
  res.render('mensajejugadores', { mensaje: 'el jugador murio' })
})

module.exports = router