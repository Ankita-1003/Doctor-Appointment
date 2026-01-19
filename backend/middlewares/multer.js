import multer from "multer";

// configuration for the disk storage
const storage = multer.diskStorage({
    filename: function(req, file, callback){
        callback(null,file.originalname)
    }
})

// multer instance using above disk storage
const upload = multer({storage})

export default upload