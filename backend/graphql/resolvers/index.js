import {
  getEmployees,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} from './employees';

export default {
  Query: {
    getEmployees,
  },
  Mutation: {
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById,
  },
};
