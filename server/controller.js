let carCards = [
    {
    make: "Dodge",
    model: "Viper",
    img: "https://www.usatoday.com/gcdn/-mm-/9725f2335b6b6e7d9c23dc8a3f1d45f61ab45269/c=292-589-2554-1868/local/-/media/USATODAY/driveon/2014/05/06//1399415891000-SRTViper14.JPG",
    power: "645",
    weight: "3374",
    id:1
    },
    {
    make: "Mazda",
    model: "Miata",
    img: "https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b2e4cd0c91_-_1995_miata_mazda-lg.jpg?crop=0.925xw:0.824xh;0.0561xw,0.173xh&resize=640:*",
    power: "116",
    weight: "2160",
    id:2
    },
    {
    make: "Ford",
    model: "Thunderbird",
    img: "https://cdn.dealeraccelerate.com/hillbank/1/393/8765/1920x1440/1955-ford-thunderbird",
    power: "193",
    weight: "2981",
    id:3
    }
]

let globalID = 4
const handlerFunctions = {
    carList: (req, res) => {
        res.send (carCards)
    },
    addCar: (req, res) => {
        const newCar = {
            make: "",
            model: "",
            img: "",
            power: "",
            weight: "",
            id: globalID
        }
        carCards.push(newCar)

        globalID++
        res.send(carCards)
    },
    deleteCar: (req, res) =>{
        const {id} = req.params
        

        const filteredCars = carCards.filter((car) => car.id !== +id)
        carCards = filteredCars
        res.send(carCards)
    },
    editCar: (req, res) =>{

        console.log(req.params)
        console.log(req.body)
        const {id} = req.params

        const {make, model, img, power, weight} = req.body

        const car = carCards.find((car) => car.id === +id)

    
        
        car.make = make
        car.model = model
        car.img = img
        car.power = power
        car.weight = weight

        res.send(carCards)
        console.log(carCards);
    }

}

export default handlerFunctions