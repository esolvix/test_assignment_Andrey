import React from 'react';
import { Mutation } from 'react-apollo';

import { queries, mutations } from '../../../services/apollo';

const withCreatingEmployee = Component => props => (
  <Mutation mutation={mutations.createEmployee}>
    {createEmployee => (
      <Component
        createEmployee={data => createEmployee({
          variables: data,
          refetchQueries: [
            { query: queries.getEmployees },
          ],
        })}
        {...props}
      />
    )}
  </Mutation>
);

export default withCreatingEmployee;
