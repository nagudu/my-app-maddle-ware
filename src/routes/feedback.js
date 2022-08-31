import { sendFeedBack } from "../controllers/feedback";


module.exports =(app) =>{
    app.post ("/feedback", sendFeedBack );
}
