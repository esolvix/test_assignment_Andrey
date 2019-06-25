import { Employee } from '../../models';

const getEmployees = () => Employee.find({});

const createEmployee = (u, {
  firstName,
  lastName,
  dateOfBirth,
  primaryLanguage,
  languages,
}) => {
  const newEmployee = new Employee({
    firstName,
    lastName,
    dateOfBirth,
    primaryLanguage,
    languages,
  });
  return newEmployee.save();
};

const updateEmployeeById = (u, {
  _id,
  firstName,
  lastName,
  dateOfBirth,
  primaryLanguage,
  languages,
}) => Employee
  .findByIdAndUpdate({ _id }, {
    firstName,
    lastName,
    dateOfBirth,
    primaryLanguage,
    languages,
  }, { lean: true, useFindAndModify: false });

const deleteEmployeeById = (u, { _id }) => Employee.findOne({ _id }).remove();

export {
  getEmployees,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
