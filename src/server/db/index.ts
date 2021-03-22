import * as mysql from "mysql";

export const Connection = mysql.createConnection({
    // don't store pswd here - only putting here for walkthru
    host: "localhost",
    port: 3306, // or 3000
    user: "chirper01",
    password: "password123",
    database: "chirperapp"
});

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        });
    });
};

import chirps from "./chirps";
import users from "./users";
import mentions from "./mentions";
export default {
    chirps,
    users,
    mentions
}