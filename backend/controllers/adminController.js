import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'


// API for adding doctor
const addDoctor = async (req, res) => {
   
    try {

        const {name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        // Checking for all data to add Doctor 
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            res.json({success:false, message:"Missing Details"})
        }

        // Validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // Validating strong format
        if(password.length < 8){
            return res.json({success:false, message:"Please enter a strong password"})
        }

        // hashing or encrypting password
        const salt = await bcrypt.genSalt(10)
        const hashedPasssword = await bcrypt.hash(password, salt) 

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"} )
        const imageUrl = imageUpload.secure_url

        
        // data format for the doctor
        const doctorData = {
              name,
              email,
              password:hashedPasssword,
              image:imageUrl,
              speciality,
              degree,
              experience,
              about,
              fees,
              address:JSON.parse(address),
              date:Date.now()
        }

        // saving doctor data into database
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true, message:"Doctor added"})

        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}

    // API for admin login
const loginAdmin = async (req, res) => {

    try {
        
        const {email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get all doctors ist for admin panel
const allDoctors = async (req, res) => {
    try {

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true, doctors})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})

    }
}

export {addDoctor, loginAdmin, allDoctors}