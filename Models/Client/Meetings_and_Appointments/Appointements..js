import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
    Time: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
    PatientData: {
      type: JSON,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("AppointmentSchema", AppointmentSchema);
