<<<<<<< HEAD
const { sendFeedback } = require("../controllers/feedback");
module.exports = (app) => { 
    app.post("/api/feedback", sendFeedback);
} 
=======
import { sendFeedBack } from "../controllers/feedback";


module.exports =(app) =>{
    app.post ("/feedback", sendFeedBack );
}
>>>>>>> 9b227ee11f22d0e34a848503e2cea06b455cbe6f
