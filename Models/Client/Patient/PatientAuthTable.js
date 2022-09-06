import mongoose from "mongoose";

const PatientAuthTableSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PatientAuthTable", PatientAuthTableSchema);
