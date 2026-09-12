import mongooes from "mongooes"

const categorySchema =  mongooes.model({
    name: {
        type: String,
        required:true
    }

}, {timestamp: true})




export const Category = mongoose.model("Category", categorySchema)