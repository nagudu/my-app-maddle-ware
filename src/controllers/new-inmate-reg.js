import moment from 'moment';
import db from '../models';

function getNextCode(description, callback = (f) => f, error = (f) => f) {
  db.sequelize
    .query(
      `SELECT code + 1 as next_code FROM number_generator WHERE description="${description}"`,
    )
    .then(callback)
    .catch(error);
}

function updateNextCode(description, callback = (f) => f, error = (f) => f) {
  db.sequelize
    .query(
      `UPDATE number_generator set code = code + 1 WHERE description="${description}"`,
    )
    .then(callback)
    .catch(error);
}
export const nigerianstates = (req, res) => {
  db.sequelize
    .query(
      "SELECT * FROM nigerianstates"
    )
    .then((results) => res.json({ success: true, results: results[0] }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};
export const new_inmate_reg = (req, res) => {
  const {
    id = '',
    First_Name = '',
    Last_Name = '',
    Other_Name = '',
    gender = '',
    DOB = '',
    Age = '',
    State = '',
    Court = '',
    DateOfAdmission = '',
    LGA = '',
    Height = '',
    Weight = '',
    Complextion = '',
    Tribalmark = '',
    Eye_color = '',
    Hair_color = '',
    Offence = '',
    Sentence_type = '',
    Sentence_duration = '',
    Sentence_calender = '',
    Court_return = '',
    Legal_Aid = '',
    Cell_Number = '',
    CorrectionCenter,
    DateToBeTakenToCourt,
    nationality,
    Inmatetype,
    Status,
    Tribe,
    Religion,
    Healthstatus,
    Disability,
    Amount,
    Unit,
    
  } = req.body;

  getNextCode(
    'prison_no',
    (resp) => {
      if (resp && resp.length) {
        let nextCode = resp[0][0].next_code;

        const prisonNo = `KSP/KUR/${moment().format('YY')}/${nextCode}`;
        // const Warrant= req.files[0].path
        const Warrant= ''

        db.sequelize
          .query(
            `INSERT INTO new_inmate_reg(First_Name, Last_Name, Other_Name,gender, DOB, Age, State, Court, DateOfAdmission, LGA, Height, 
        Weight, Complextion, Tribalmark, Eye_color, Hair_color, Offence, Sentence_type, Sentence_duration, Sentence_calender,
        Court_return,Prison_Number,Legal_Aid,Cell_No,CorrectionCenter,DateToBeTakenToCourt, nationality,Inmatetype,Status,Tribe,
        Religion,Healthstatus,Disability,Warrant,Amount,Unit) VALUES ('${First_Name}','${Last_Name}','${Other_Name}','${gender}','${DOB}','${Age}','${State}','${Court}','${DateOfAdmission}',
        '${LGA}','${Height}','${Weight}','${Complextion}','${Tribalmark}','${Eye_color}','${Hair_color}','${Offence}','${Sentence_type}',
        '${Sentence_duration}','${Sentence_calender}','${Court_return}','${ prisonNo}','${Legal_Aid}','${Cell_Number}',
        '${CorrectionCenter}','${DateToBeTakenToCourt}','${nationality}','${Inmatetype}','${Status}','${Tribe}',
        '${Religion}','${ Healthstatus}','${Disability}','${Warrant}','${Amount}','${Unit}')`,
          )
          .then((results) => {
            updateNextCode('prison_no');
            res.json({ success: true, results, prisonNo  });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ err });
          });
      }
    },
    (err) => {
      console.log(err);
      res.status(500).json({ err });
    },
  );
};

export const update_inmate = (req, res) => {
  const {
    id = '',
    First_Name = '',
    Last_Name = '',
    Other_Name = '',
    gender = '',
    DOB = '',
    Age = '',
    State = '',
    Court = '',
    DateOfAdmission = '',
    LGA = '',
    Height = '',
    Weight = '',
    Complextion = '',
    Tribalmark = '',
    Eye_color = '',
    Hair_color = '',
    Offence = '',
    Sentence_type = '',
    Sentence_duration = '',
    Sentence_calender = '',
    Court_return = '',
    Prison_Number = '',
    Legal_Aid = '',
    Cell_No = '',
    dateofaddmission = '',
    CorrectionCenter,
    DateToBeTakenToCourt,
    nationality,
    inmatetype,
    status,
  } = req.body;
  db.sequelize
    .query(
      `UPDATE new_inmate_reg SET Court="${Court}", DateOfAdmission="${DateOfAdmission}", 
       Offence="${Offence}", Sentence_type="${Sentence_type}", Sentence_duration="${Sentence_duration}", Sentence_calender="${Sentence_calender}",
        Court_return="${Court_return}",Legal_Aid="${Legal_Aid}",Cell_No="${Cell_No}",CorrectionCenter="${CorrectionCenter}",
        DateToBeTakenToCourt="${DateToBeTakenToCourt}",inmatetype="${inmatetype}",status="${status}"`,
    )
    .then((results) => res.json({ success: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};

export const get_inmates = (req, res) => {
  db.sequelize
    .query(
      `SELECT *, concat(First_Name, ' ', Last_Name, ' ', Other_Name) as fullname FROM new_inmate_reg`,
    )
    .then((results) => res.json({ success: true, results: results[0] }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};

export const get_inmate_by_id = (req, res) => {
  const { id } = req.query;
  db.sequelize

    .query(
      `SELECT *, concat(First_Name, ' ', Last_Name, ' ', Other_Name) as fullname FROM new_inmate_reg where id ='${id}'`,
    )
    .then((results) => res.json({ success: true, results: results[0] }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};
export const get_dashboard = (req, res) => {
  const { id } = req.query;
  db.sequelize

    .query(
      `SELECT DISTINCT Inmatetype, COUNT(Prison_Number) as inmate_count FROM new_inmate_reg GROUP BY Inmatetype;`,
    )
    .then((results) => res.json({ success: true, results: results[0] }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};
export const notification = (req, res) => {
  // const { id } = req.query;
  let today = moment().format('YYYY-MM-DD')
  let aWeekFromNow = moment().add(1, 'week').format('YYYY-MM-DD')
  console.log(today, aWeekFromNow)
  db.sequelize
    .query(
      `SELECT *, concat(First_Name, ' ', Last_Name, ' ', Other_Name) as fullname  FROM new_inmate_reg WHERE Court_return BETWEEN DATE("${today}") AND DATE("${aWeekFromNow}")`,
 
    )
    .then((results) => res.json({ success: true, results: results[0] }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err });
    });
};