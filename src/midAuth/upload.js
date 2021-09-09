const multer = require('multer')
const path = require('path')

const multerUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, "./uploads"); 
        },
        filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); 
        cb(null, `${Math.round(Math.random() * 1e9)}${ext}`); 
        },
    }), 
    fileFilter: (req, file, cb) =>{
        const ext = path.extname(file.originalname)
        if(ext === '.jpg' || ext === '.png' || ext === '.jpeg' ){
            cb(null, true)
        }else{
            const error = {
                msg : ""
            }
            cb (error, false)
        }
    },
    limits: {fileSize : 2 * 1000 * 1000}
});
const upload = (req, res, next) =>{
    const multerSingle = multerUpload.single("photo")
    multerSingle(req, res, (err)=>{
        if(err){
            res.json(err)
        }else{
            next()
        }
    })
}
module.exports = upload
