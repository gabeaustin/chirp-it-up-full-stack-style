import * as express from "express";
import chirpsRouter from "./chirps";
import usersRouter from "./users";
import mentionsRouter from './mentions';
import DB from "../db";


const router = express.Router();

// route is already matched to /api
router.use("/chirps", chirpsRouter);
router.use("/users", usersRouter);
router.use("/mentions", mentionsRouter);

router.get("/api/chirpapp", async (req, res) => {
    let chirps = await DB.Chirpapp.all();
})

export default {
    router
}