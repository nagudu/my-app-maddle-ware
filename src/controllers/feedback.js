import db from "../models";

export const sendFeedback = (req, res) => {
    const { name, email, message } = req.body;
    db.sequelize
        .query (`INSERT INTO feedback( name, email, message) VALUES  ('${name}','${email}','${message}')`)
        .then((results) => res.json ({results,success:true, message: "successfull submit"}))
        .catch((err) => res.json({err,success: false}))
};
