import todoschema from "../models/todoschem.js";
const created = async (req, res) => {
  const { title, description } = req.body;
  const create = await todoschema.create({ title, description });
  res.status(200).json({ message: "Created", tilte: create.title });
};

const Finded = async (req, res) => {
  const { id } = req.params;
  const find = await todoschema.findById(id);
  res.status(200).json({ message: "Finded", tilte: find.title });
};

const Updated = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const update = await todoschema.findByIdAndUpdate(
    { _id: id },
    { title: title, description: description }
  );
  res.status(200).json({ message: "Updated", title: update.title });
};
const Deleted = async (req, res) => {
  const { id } = req.params;
  const m = await todoschema.findByIdAndDelete({ _id: id });
  res.status(200).json({ message: "deleted" });
};
export { created, Finded, Updated, Deleted };
