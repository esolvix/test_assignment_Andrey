import React from 'react';
import { Mutation } from 'react-apollo';

import { queries, mutations } from '../../../services/apollo';

const withEditingEmployee = Component => props => (
  <Mutation mutation={mutations.editEmployeeById}>
    {editEmployeeById => (
      <Component
        editEmployeeById={data => editEmployeeById({
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

export default withEditingEmployee;
