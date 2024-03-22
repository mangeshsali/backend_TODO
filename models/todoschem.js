import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    createdAt: Date.now(),
  },
  description: {
    type: String,
    createdAt: Date.now(),
  },
});

const todoschema = mongoose.model("todoCollection", schema);
export default todoschema;
