import mongoose from "mongoose"

const productSchema = new mongoose.model({

    description:{
        type: String,
        required: true,

    },

    name:{
        type: String,
        required:true,
        lowercase: true,
    },
    productimge:{
        tpye:String,
    },

    price:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        defalut:0,
    },

    category:{
        type: mongoose.schema.types.objectId,
        ref:"Category",
        required: true,
    },

    owner:{
        type: mongoose.schema.types.objectId,
        ref:"user",
    },



},{timestmps: true})




export const Product = mongoose.model("Product",productSchema)