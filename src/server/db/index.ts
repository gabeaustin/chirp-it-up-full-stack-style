import * as mysql from "mysql";
import Chirpapp from "../db/chirpapp";
import DB from "./db";

export const Connection = mysql.createConnection({
    // don't store pswd here - only putting here for walkthru
    host: "localhost",
    port: 3306, // or 3000
    user: "chirper01",
    password: "password123",
    database: "chirperapp"
});


Connection.connect(err => {
    if(err) console.log(err);
});



import chirps from "./chirps";
import users from "./users";
import mentions from "./mentions";
export default {
    chirps,
    users,
    mentions,
    Chirpapp
}