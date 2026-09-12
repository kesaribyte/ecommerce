import mongoose from "mongoose"


const orderItemSchema = new mongoose.model({

    productId:{
        type: mongoose.schema.type.objectId,
        ref:"Product",
    },

    quantity:{
        type:Number,
        required:true,
    },
})


const orderSchema = new orderSchema({
    orderprice:{
        type:Number,
        required: true,

    },

    costomer:{
        type: mongoose.schema.type.objectId,
        ref:"user",
    },

    orderitems:{
        type:[orderItemSchema],
    },

    address:{
        type: String,
        required:true,
    },

    status:{
        type:String,
        enum:["CANCLE","PENDING","DELIVERD"],
        default:"PENDING",
    },



}, {timestamps: true})


export const Order = orderSchema ("Order",orderSchema)