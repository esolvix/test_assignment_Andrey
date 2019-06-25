import { gql } from 'apollo-boost';

export const createEmployee = gql`
  mutation($firstName: String!, $lastName: String!, $language: String, $dateOfBirth: String) {
    createEmployee(
      firstName: $firstName,
      lastName: $lastName,
      primaryLanguage: $language,
      dateOfBirth: $dateOfBirth
    ) {
      firstName
      lastName
      primaryLanguage
      dateOfBirth
    }
  }
`;

export const deleteEmployeeById = gql`
  mutation($_id: ID!) {
      deleteEmployeeById(_id:$_id) {
      _id
    }
  }
`;

export const editEmployeeById = gql`
  mutation($_id: ID!, $firstName: String!, $lastName: String!, $language: String, $dateOfBirth: String) {
    updateEmployeeById(
      _id: $_id
      firstName: $firstName,
      lastName: $lastName,
      primaryLanguage: $language,
      dateOfBirth: $dateOfBirth
  ) {
      _id
      firstName
      lastName
      primaryLanguage
      dateOfBirth
    }
  }
`;
