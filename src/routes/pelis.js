const { Router } = require('express');
const router = Router();
const {} = require('underscore');

const pelis = require ('../ejemplo.json');

router.get('/',(req, res) => {
    res.json(pelis);
});

router.post('/', (req, res) => {
    const { nombre, director, clasificacion } = req.body;
    if (nombre && director && clasificacion){
        const id = pelis.length + 1;
        const newpelis = {...req.body, id};
        pelis.push(newpelis);
        res.json(pelis);
    }else{
    res.json({error: 'Ocurrio un error'});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { nombre, director, clasificacion } = req.body;
    if(nombre && director && clasificacion){
        _.each(pelis, (pelis, i) =>{
            if (pelis.id == id){
                pelis.nombre = nombre;
                pelis.director = director;
                pelis.clasificacion = clasificacion;
            }
        });
        res.json(pelis);
    }else{
        res.json({error: 'Todos los campos son requeridos.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(pelis, (pelis, i) => {
        if (pelis.id == id) {
            pelis.splice(i, 1);
        }
    });
    res.send('pelis');
});

module.exports = router;