import mongoose from "mongoose";

const ConsultationSchema = new mongoose.Schema(
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
    Prescription: {
      type: String,
    },
    Observation: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Consultation", ConsultationSchema);
