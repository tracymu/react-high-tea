import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Table } from 'semantic-ui-react'

function Body(props) {
  return (
    <Container>
      <Table celled>
        <TableTitle />
        <TableEntries teas={props.teas} />
      </Table>
    </Container>
  );
}

function TableTitle(props) {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

function TableEntries(props) {
  return (
    <Table.Body>
      { props.teas.map(tea =>
        <Entry tea={tea} key={tea.id} />,
      )
    }
    </Table.Body>
  );
}


function Entry(props) {
  return (
    <Table.Row>
      <Table.Cell>{props.tea.name}</Table.Cell>
      <Table.Cell>{props.tea.date}</Table.Cell>
      <Table.Cell>{props.tea.score}</Table.Cell>
    </Table.Row>
  );
}


const teas = [
  {
    id: '1',
    name: 'Mandarin Oriental',
    date: '2017,06,21',
    score: '31.5',
  },
  {
    id: '2',
    name: 'Burj al Arab',
    date: '2013,10,1',
    score: '30',
  },
  {
    id: '3',
    name: 'Hydro Majestic',
    date: '2014,04,15',
    score: '10',
  },
];

ReactDOM.render(
  <Body teas={teas} />,
  document.getElementById('root'),
);
