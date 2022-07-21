const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb) =>  {
      cb(null,'./');},
    filename: function(req,file,cb) {
    //   console.log(file, 'file in the middleware')
      const ext=file.mimetype.split('/')[1];
      cb(null,`uploads/${file.originalname}-${Date.now()}.${ext}`);
    }
  })
  
  exports.localUploadNew = multer({ storage: storage})