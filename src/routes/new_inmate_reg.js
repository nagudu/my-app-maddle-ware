const { localUploadNew } = require("../config/Multer");
const { new_inmate_reg, get_inmates, get_inmate_by_id, update_inmate, nigerianstates, 
    get_dashboard, notification } = require("../controllers/new-inmate-reg");

module.exports =(app) =>{
    app.post ("/new_inmate_reg", localUploadNew.single(),  new_inmate_reg );
    app.put ("/update_inmate", update_inmate );
    app.get ("/inmate_list", get_inmates );
    app.get ("/inmate_info", get_inmate_by_id );
    app.get ("/nigerianstates",nigerianstates );
    app.get ("/get_dashboard", get_dashboard);
    app.get ("/notification",  notification );


    
}