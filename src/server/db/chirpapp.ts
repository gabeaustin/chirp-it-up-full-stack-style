import { Connection } from "./index";
export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query("SELECT * from chirpapp", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        })
    });
};

// const all = async () => Query("SELECT * FROM chirpapp");
// // const one = async (id: number) => Query("SELECT * FROM blogs WHERE id = ?", [id]);
// const grantAccess = async () => Query("GRANT ALL PRIVILEGES ON chirpapp.*")

export default {
    all
    // one
}