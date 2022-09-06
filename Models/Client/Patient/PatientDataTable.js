import mongoose from "mongoose";

const PatientDataTableSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    proffession: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    ecg_url: {
      type: String,
    },
    basic_health_info: {
      type: JSON,
    },
    all_health_info: {
      type: JSON,
    },
    health_reports: {
      type: JSON,
    },
    test_reports: {
      type: JSON,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PatientDataTable", PatientDataTableSchema);
