import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

// GET the list of reminders
router.get("/", (req, res) => {
	res.json(reminders);
});

// POST a new reminder
router.post("/", (req, res) => {
	const { title } = req.body as CreateReminderDto;
	// send the title back to the client
	const reminder = new Reminder(title);
	reminders.push(reminder);
	res.status(201).json(reminder);
});

export default router;
