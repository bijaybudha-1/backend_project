import { app } from "./app.js";
import connectionDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
});

connectionDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is listening at port ${process.env.PORT || 4000}`);  
    });
}).catch((err) => {
    console.log("Database Connection failed", err);
})