const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
const fs = require("fs")

const upload = multer({ dest: "uploads/" });

app.use(express.urlencoded({ extended: true }));
    
app.post("/", upload.any(),function (req, res) {
    console.log(req.body);
    if (req.files) {
        req.files.forEach(f => {
            console.log(f.filename);
            fs.rename(`uploads/${f.filename}`, `uploads/${Date()} - ${f.originalname}`, () => {
                
            })
        });
    }
    res.send({
        status: true,
        message: "Upload successfull"
    })
})
    

app.listen(5000,function(error) {
    if(error) throw error
        console.log("Server created Successfully on PORT 5000")
})
