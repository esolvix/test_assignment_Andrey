import React from 'react';
import { Query } from 'react-apollo';

import { queries } from '../../../services/apollo';

const withEmployees = Component => props => (
  <Query query={queries.getEmployees}>
    {({ loading, data }) => (
      <Component
        employeesLoading={loading}
        employees={data && data.getEmployees}
        {...props}
      />
    )}
  </Query>
);

export default withEmployees;
