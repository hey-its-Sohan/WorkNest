const { Schema, model } = require("mongoose");

const AttendanceSchema = new Schema(
  {
    employeeId: {
      type: String,
      required: true,
    },
    employeeName: {
      type: String,
      required: true,
    },
    checkInTime: {
      type: Date,
      default: Date.now,
    },
    checkOutTime: {
      type: Date,
      default: null,
    },
    date: {
      type: Date,
      required: true,
    },
    totalHours: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);

AttendanceSchema.index(
  { employeeId: 1, date: 1 },
  { unique: true }
);

module.exports = model("attendance", AttendanceSchema);