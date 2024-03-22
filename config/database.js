import mongoose from "mongoose";
import "dotenv/config";
const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB CONNECTED"))
    .catch((e) => console.error("error in DB CONNECT"));
};

export default connect;
