import React from 'react';
import {
  Table,
  Segment,
  Loader,
  Image,
  Button,
} from 'semantic-ui-react';

const headers = [
  {
    title: 'First name',
    key: 'firstName',
  },
  {
    title: 'Last name',
    key: 'lastName',
  },
  {
    title: 'Date of Birth',
    key: 'dateOfBirth',
  },
  {
    title: 'Language',
    key: 'primaryLanguage',
  },
  {
    key: 'icons',
  },
];

export default ({
  fetch,
  list,
  deleteEmployeeById,
  handleOpen,
}) => (fetch
  ? (
    <Segment>
      <Loader active />
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  )
  : (
    <Table celled>
      <Table.Header>
        <Table.Row>
          { headers.map(i => <Table.HeaderCell key={i.key}>{i.title}</Table.HeaderCell>)}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {list.map(i => (
          <Table.Row>
            {headers
              .filter(el => el.title)
              .map(el => <Table.Cell key={el.key}>{i[el.key]}</Table.Cell>)
            }
            <Table.Cell>
              <Button icon="delete" onClick={() => deleteEmployeeById(i)} />
              <Button icon="edit" onClick={() => handleOpen(i)} />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
);
