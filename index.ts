// 1. Install express: "npm i express"
// 2. Add Typescript and the declararion files: "npm i -D typescript @types/node @types/express"
// 3. Create a Typescript compiler configuration file: "tsc --inittsc"
// 4. Install node Mon for restart the server everytime you change a file: "npm i -D nodemon"
// 5. Update the start Script in package.json to "start": "nodemon --exec \"node --loader ts-node/esm\" index.ts"

import express from "express";
import remindersRouter from "./routers/reminders.ts";
const app = express();

app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(8000, () => console.log("Server started+++"));
