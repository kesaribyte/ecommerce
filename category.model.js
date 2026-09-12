import mongooes from "mongooes"

const categorySchema =  mongooes.model({}, {timestamp: true})




export const category = mongoose.model("category", categorySchema)