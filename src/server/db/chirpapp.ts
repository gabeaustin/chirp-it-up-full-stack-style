import { Query } from "./index";

const all = async () => Query("SELECT * FROM chirpapp");
// const one = async (id: number) => Query("SELECT * FROM blogs WHERE id = ?", [id]);
const grantAccess = async () => Query("GRANT ALL PRIVILEGES ON chirpapp.*")

export default {
    all
    // one
}