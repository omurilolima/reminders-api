import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";

const router = Router();

router.get("/", (req, res) => {
	res.send("List of reminders");
});

router.post("/", (req, res) => {
	const { title } = req.body as CreateReminderDto;
	// send the title back to the client
	res.json("title");
});

export default router;
