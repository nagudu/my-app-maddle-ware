const {appointment_details, getAppointment_details, deleteAppointment_details } =require ("../controllers/appointment_details");
const { deleteMessae } = require("../controllers/messge_send");
module.exports = (app) => {
    app.post("/appointment_details", appointment_details); 
    app.get("/get/appointment_details", getAppointment_details);
    app.delete("/delete/appointment_details", deleteAppointment_details);
}