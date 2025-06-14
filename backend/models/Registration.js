// models/Registration.js
import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  event: String,
  parentName: String,
  mobile: String,
  email: String,
  kidName: String,
  kidAge: Number, // ✅ Changed from String to Number
}, {
  timestamps: true
});

const Registration = mongoose.model('Registration', RegistrationSchema);
export default Registration;
