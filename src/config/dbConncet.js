import mongoose from "mongoose"

mongoose.connect(//add MongoDB URI for connection with database);

let db = mongoose.connection

export default db;