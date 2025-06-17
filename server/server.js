import app from "./app.js";
import { PORT } from "./config/env.js";
import connectToDb from "./database/mongoose.js";

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectToDb();
})