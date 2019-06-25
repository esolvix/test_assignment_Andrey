import React, { Component } from 'react';
import {
  Button,
  Input,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

export default class ModalControlled extends Component {
  state = {
    firstName: '',
    lastName: '',
    language: '',
    date: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeItem) {
      const {
        firstName = '',
        lastName = '',
        dateOfBirth,
        primaryLanguage,
      } = nextProps.activeItem;

      this.setState({
        date: dateOfBirth || '',
        lastName,
        firstName,
        language: primaryLanguage || '',
      });
    } else {
      this.setState({
        date: '',
        lastName: '',
        firstName: '',
        language: '',
      });
    }
  }

  handleChange = (key, value) => this.setState({ [key]: value })

  handleSubmit = () => {
    const {
      createEmployee,
      editEmployeeById,
      handleClose,
      activeItem,
    } = this.props;

    const {
      firstName,
      lastName,
      language,
      date: dateOfBirth,
    } = this.state;

    const data = {
      firstName,
      lastName,
      dateOfBirth,
      language,
    };
    return Promise.resolve()
      .then(() => {
        if (activeItem) {
          return editEmployeeById({ _id: activeItem._id, ...data });
        }
        return createEmployee(data);
      })
      .then(() => handleClose());
  }

  render() {
    const {
      date,
      firstName,
      lastName,
      language,
    } = this.state;

    const {
      handleClose,
      activeItem,
      open,
    } = this.props;

    return (
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Modal.Header>{activeItem ? 'Edit Employee' : 'Create Employee'}</Modal.Header>
        <Modal.Content>
          <Input
            label="First Name"
            fluid
            value={firstName}
            onChange={e => this.handleChange('firstName', e.target.value)}
          />
          <Input
            label="Last Name"
            fluid
            value={lastName}
            onChange={e => this.handleChange('lastName', e.target.value)}
          />
          <Input
            label="Language"
            fluid
            value={language}
            onChange={e => this.handleChange('language', e.target.value)}
          />
          <DateInput
            style={{ width: '100%' }}
            name="date"
            placeholder="Date of Birth"
            value={date}
            iconPosition="left"
            onChange={(e, { name, value }) => this.handleChange(name, value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={handleClose} inverted>
            <Icon name="remove" />
            Cancel
          </Button>
          <Button color="green" inverted onClick={this.handleSubmit} disabled={!firstName || !lastName}>
            <Icon name="checkmark" />
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
