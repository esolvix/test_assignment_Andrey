import React, { Component } from 'react';
import { Container, Grid, Button } from 'semantic-ui-react';

import {
  withEmployees,
  withCreatingEmployee,
  withDeletingEmployee,
  withEditingEmployee,
} from '../providers';
import { List, Modal } from '../components';

class EmployeePage extends Component {
  state = {
    modalOpen: false,
    activeItem: null,
  };

  handleOpen = activeItem => this.setState({ modalOpen: true, activeItem });

  handleClose = () => this.setState({ modalOpen: false, activeItem: null });

  render() {
    const {
      employees,
      employeesLoading,
      createEmployee,
      deleteEmployeeById,
      editEmployeeById,
    } = this.props;

    const {
      modalOpen,
      activeItem,
    } = this.state;

    return (
      <Container>
        <h2>Employees</h2>
        <Modal
          open={modalOpen}
          activeItem={activeItem}
          createEmployee={createEmployee}
          editEmployeeById={editEmployeeById}
          handleClose={this.handleClose}
        />
        <Grid.Row>
          <Grid.Column>
            <List
              fetch={employeesLoading}
              list={employees}
              deleteEmployeeById={deleteEmployeeById}
              handleOpen={this.handleOpen}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Button onClick={() => this.handleOpen()}>Add Employee</Button>
        </Grid.Row>
      </Container>
    );
  }
}

export default withEditingEmployee(
  withDeletingEmployee(withCreatingEmployee(withEmployees(EmployeePage))),
);
