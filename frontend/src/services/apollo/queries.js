import { gql } from 'apollo-boost';

export const getEmployees = gql`
  {
    getEmployees {
      _id
      firstName
      lastName
      dateOfBirth
      primaryLanguage
      languages
    }
  }
`;
