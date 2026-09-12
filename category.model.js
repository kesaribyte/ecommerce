import mongooes from "mongooes"

const categorySchema = new mongooes.model({
    name: {
        type: String,
        required:true
    }

}, {timestamps: true})




export const Category = mongoose.model("Category", categorySchema)