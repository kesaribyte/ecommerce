import mongooes from "mongoose"

const userSchema = new mongooes.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    useremail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    pa,ssword:{
        type: string,
        required: true
    },

},{timestapms: true})

export const user = mongooes.model("user", userSchema)