<<<<<<< HEAD
import db from "../models";

export const sendFeedback = (req, res) => {
    const { name, email, message } = req.body;
    db.sequelize
        .query (`INSERT INTO feedback( name, email, message) VALUES  ('${name}','${email}','${message}')`)
        .then((results) => res.json ({results,success:true, message: "successfull submit"}))
        .catch((err) => res.json({err,success: false}))
};
=======
import db from '../models';

export const sendFeedBack = (req, res) => {
  const { name, email, message } = req.body;
  db.sequelize
    .query(
      `
    INSERT INTO contact us(name, email, message) VALUES (${name},${email}, ${message};`,
    )
    .then((results) => res.json({ results, success: true }))
    .catch((err) => res.json( {err,success:false}));
};
>>>>>>> 9b227ee11f22d0e34a848503e2cea06b455cbe6f
