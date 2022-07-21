import db from "../models";
export const appointment_details = (req, res) => {
    const {
        patientName = "",
        purpose = "",
        preferredDate = "",
        preferredLocation = "",
        departmentSpeciality = "",
        selectDocterOption = "",
        otherNoise = "",
    } = req.body;

    db.sequelize.query(`INSERT INTO appointment_details(
    patient_name, 
    purpose, 
    Preferred_date, 
    Preferred_location, 
    department_speciality, 
    select_docter_option, 
    other_noise)
    VALUES 
    ('
        ${patientName}','
        ${purpose}','
        ${preferredDate}','
        ${preferredLocation}','
        ${departmentSpeciality}','
        ${selectDocterOption}','
        ${otherNoise}
')`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ err })
        })

}

export const getAppointment_details = (req, res) => {
    db.sequelize.query(`SELECT * FROM appointment_details`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ success: false, err })
        })

}


export const deleteAppointment_details = (req, res) => {
    const { id } = req.body
    db.sequelize.query(`DELETE FROM appointment_details WHERE id="${id}"`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ success: false, err })
        })

}