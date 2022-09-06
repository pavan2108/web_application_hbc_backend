import mongoose from "mongoose";

const DoctorDataTable = new mongoose.Schema(
  {
    doctorId: {
      type: String,
      required: true,
    },
    Specialization: {
      type: String,
      required: true,
    },
    Qualification: {
      type: String,
      required: true,
    },
    Experience: {
      type: String,
      required: true,
    },
    ExternalReference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoctorAuthTable",
    },
  },
  { timestamps: true }
);

export default mongoose.model("DoctorDataTable", DoctorDataTable);
