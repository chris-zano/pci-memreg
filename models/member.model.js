import mongoose from "mongoose";
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {
        type: toString,
        default: 'add_username'
    }
});

const Members = mongoose.model('Members', memberSchema);
export default Members;