import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))


import handlerFunctions from './controller.js'
const {carList, addCar, deleteCar, editCar} = handlerFunctions
app.get('/cars', carList )
app.post('/cars', addCar)
app.delete('/cars/:id', deleteCar)
app.put('/cars/:id', editCar)


ViteExpress.listen(app, 1337, () => console.log('oi lad server is runnin on htttp://localhost:1337'))