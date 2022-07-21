import db from "../models"

export const message_send = (req, res) => {
    const { selectPatient, messegeTille, messegeBody, sms, email } = req.body;

    db.sequelize
        .query(`INSERT INTO messge_send(select_patient,messege_tille,messege_body,sms, email) 
        VALUES('${selectPatient}','${messegeTille}','${messegeBody} ','${sms} ','${email}')`)

        .then((results) => req.json({ success: true, results }))
        .catch((err) => res.status(500).json({ err }));
}

export const getMessge_send = (req, res) => {
    db.sequelize.query(`SELECT * FROM messge_send`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ success: false, err })
        })  

}

export const deleteMessae = (req, res) => {
    const {id} = req.body
    db.sequelize.query(`DELETE FROM messge_send WHERE id="${id}"`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ success: false, err })
        })

}