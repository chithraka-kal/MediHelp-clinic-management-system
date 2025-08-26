 import mongoose, { Types } from "mongoose"; 

 const doctorSchema = new mongoose.Schema({
    name: {Type: String, required: true},
    email: {Type: String, required: true, unique: true},
    password: {Type: String, required: true},
    image: {Type: String, required: true},
    speciality: {Type: String, required: true},
    degree: {Type: String, required: true},
    experience: {Type: String, required: true},
    about: {Type: String, required: true},
    available: {Type: Boolean, required: true},
    fees: {Type: Number, required: true},
    address: {Type: Object, required: true},
    date: {Type: Number, required: true},
    slots_booked: {Type: Object, default: {}}

 },{minimize: false})

 const doctorModel = mongoose.models.doctors || mongoose.model('doctors', doctorSchema);

 export default doctorModel;