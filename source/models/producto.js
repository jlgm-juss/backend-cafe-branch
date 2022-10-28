import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:50,
    },
    precio:{
        type:Number,
        requierd:true,
        min:1,
        max:10000
    },
    imagen:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true,
        maxLength:50,
    }
})

//aqui realizamos el modelo
const Producto = mongoose.model('producto', productoSchema);     //<-------el nombre de la const debe ir siempre con mayusc. el .model en su parámetro me pide un nombre (siempre el nombre debe estar en singular),string y schema.

export default Producto;