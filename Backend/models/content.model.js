import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    title:{
        type: String,
        default: "Untitled"
    },
    content:{
        type: String,
        required: true,
    },
    customId:{
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 900
    }
})

const Data = mongoose.model("Data", dataSchema);
export default Data;