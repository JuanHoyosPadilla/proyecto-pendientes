// importaciones de mongoose
import mongoose from 'mongoose';
const {Schema} = mongoose

import cors from 'cors'

// express
import express from 'express';
const app = express();

app.use(cors())
app.use(express.json());

// conexion a base de datos mongoDB
try {
    await mongoose.connect('mongodb://localhost:27017/DBpendientes');
    console.log('DB ok')
} catch (error) {
    console.log(error)
}

// esquemas de mongodb

const PendientesSchema = new Schema({
    pendiente: String,
    prioridad: String,
    estado: {type: Boolean, default: false}
});

const Pendiente = mongoose.model('Pendiente',PendientesSchema);
console.log(Pendiente)

// RUTAS DE LA API
//RUTA PARA OBTENER DATOS
app.get('/', (req,res) => {
    Pendiente.find()
        .then(pendientes => res.json(pendientes) )
        .catch(error => res.json(error))
});

//RUTA PARA GUARDAR NUEVOS PENDIENTES
app.post('/npendiente', (req,res) => {
    const body = req.body
    const pendiente = new Pendiente(body)
    pendiente.save()
    
    res.json({mensage: 'Pendiente Guardado...'})
});

//RUTA DE ACTUALIZAR DATOS
app.put('/update/:id', async(req,res) => {
    const {id} = req.params;
    const {estado} = await Pendiente.findOne({_id:id});
    const newpendiente = await Pendiente.findByIdAndUpdate(id, {estado:!estado},{new:true})

    res.json({
        mensage: 'actualizando',
        newpendiente
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server Ok',PORT)
})