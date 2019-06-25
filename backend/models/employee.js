import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  primaryLanguage: String,
  languages: String,
});

const Employee = model('employees', employeeSchema);

export default Employee;
