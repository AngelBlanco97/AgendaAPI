import { model, Schema, Document } from "mongoose";

export interface IAgenda extends Document {
  name: string;
  tlf: string;
  email: string;
}
const agendaSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  tlf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
});
export default model<IAgenda>("contactos", agendaSchema);
