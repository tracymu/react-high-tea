import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Header, Image, Modal, Popup, Table } from 'semantic-ui-react'

class Entry extends React.Component {
  state = { open: false };
  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    const date = (new Date(this.props.tea.date)).toDateString();
    
    return (
      <Table.Row>
        <Table.Cell onClick={this.show('inverted')}>{this.props.tea.name}</Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{this.props.tea.score}</Table.Cell>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Inherit the name here</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Is this another little Header</Header>
              <p>Put whatever in here</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='pink' onClick={this.close}>
              Close
            </Button>
            <Button color='purple' onClick={this.close}>
              Maybe Edit
            </Button>
          </Modal.Actions>
        </Modal>        
      </Table.Row>
    )
  }
}

function Body(props) {
  return (
    <Container>
      <Header size='huge'>High Teas Around The World</Header>
      <Table celled selectable>
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
