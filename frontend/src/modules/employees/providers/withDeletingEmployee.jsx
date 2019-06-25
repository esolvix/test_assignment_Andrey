import React from 'react';
import { Mutation } from 'react-apollo';

import { queries, mutations } from '../../../services/apollo';

const withDeletingEmployee = Component => props => (
  <Mutation mutation={mutations.deleteEmployeeById}>
    {deleteEmployeeById => (
      <Component
        deleteEmployeeById={({ _id }) => deleteEmployeeById({
          variables: { _id },
          refetchQueries: [
            { query: queries.getEmployees },
          ],
        })}
        {...props}
      />
    )}
  </Mutation>
);

export default withDeletingEmployee;
