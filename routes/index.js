import { Router } from "express";
import messageSchema from "../models/messageSchema.js";
import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
const router = Router();
async function seeAllMessage(req, res) {
  const message = await messageSchema.find();
  return res.json(message);
}
router.get("/allMessage", seeAllMessage);

async function login(req, res) {
  const { Name, Password } = req.body;
  console.log(Name);
  try {
    const user = await userSchema.findOne({ Name });
    if (!user) {
      return res.status(400).json({ success: false });
    }
    const pass = await bcrypt.compare(Password, user.Password);
    if (pass) {
      return res.json({ success: true });
    }
  } catch (e) {
    return res.status(400).json({ success: false });
  }
}
router.post("/login", login);

async function addMessage(req, res) {
  try {
    const { message, author } = req.body;
    const added = await messageSchema.create({
      message,
      author,
    });
    return res.json(added);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}
router.post("/addMessage", addMessage);

async function seeAllUser(req, res) {
  const user = await userSchema.find();

  return res.json(user);
}
router.get("/allUser", seeAllUser);

async function addUser(req, res) {
  try {
    const { Name, Email, Password } = req.body;
    const user = userSchema.findOne({ Name });
    if (user) {
      return res
        .status(500)
        .json({ message: "Already a user Name to be unique" });
    }
    const hash = await bcrypt.hash(Password, 10);
    const added = await userSchema.create({ Name, Email, Password: hash });
    return res.json(added);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}
router.post("/addUser", addUser);
export default router;
