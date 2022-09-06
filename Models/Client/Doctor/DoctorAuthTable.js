import mongoose from "mongoose";

const DoctorAuthTable = new mongoose.Schema(
  {
    doctorId: {
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

export default mongoose.model("DoctorAuthTable", DoctorAuthTable);
