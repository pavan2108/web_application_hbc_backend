import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema(
  {
    patientId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: String,
      required: true,
    },
    meetingId: {
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
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Meeting", MeetingSchema);
