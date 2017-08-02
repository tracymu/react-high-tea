import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Header, Image, Modal, Popup, Statistic, Table } from 'semantic-ui-react'

function ScoreBreakdown(props) {
  const attrs = ['tea', 'service', 'ambience', 'savoury', 'scones', 'sweets', 'bonus']
  return(
    <Statistic.Group>
      { attrs.map((attr, index) =>
        <ScoreRow score={props.tea[attr]} name={attr} key={index} />,
      )}
    </Statistic.Group>
  );
}

function ScoreRow(props) {
  return (
    <Statistic color='yellow' value={props.score} label={props.name} />
  )
}

class Entry extends React.Component {
  state = { open: false };
  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    const date = (new Date(this.props.tea.date)).toDateString();
    
    return (
      <Table.Row onClick={this.show('inverted')}>
        <Table.Cell>{this.props.tea.name}</Table.Cell>
        <Table.Cell>{date}</Table.Cell>
        <Table.Cell>{this.props.tea.score}</Table.Cell>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{this.props.tea.name}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p><strong>Location: </strong>{this.props.tea.location}</p>
              <p><strong>Date: </strong>{this.props.tea.date}</p>
              <p><strong>Price: </strong>{this.props.tea.price}</p>
              <p><strong>Score out of 32: </strong>{this.props.tea.score}</p>
              <h4>Score breakdown (each out of 5)</h4>
              <ScoreBreakdown tea={this.props.tea} />
              <h4>Notes</h4>
              <p>{this.props.tea.notes}</p>
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
    tea: '4',
    service: '5',
    ambience: '2',
    savoury: '5',
    scones: '3',
    sweets: '2.5',
    bonus: 1,
    price: '$50',
    notes: 'This was not a shit show',
    location: 'Bangkok'
  },
  {
    id: '2',
    name: 'Burj al Arab',
    date: '2013,10,1',
    score: '30',
    tea: '4',
    service: '5',
    ambience: '2',
    savoury: '5',
    scones: '3',
    sweets: '2.5',
    bonus: 1,
    price: '$50',
    notes: 'This was not a shit show',
    location: 'Dubai'
  },
  {
    id: '3',
    name: 'Hydro Majestic',
    date: '2014,04,15',
    score: '10',
    tea: '4',
    service: '5',
    ambience: '2',
    savoury: '5',
    scones: '3',
    sweets: '2.5',
    bonus: 1,
    price: '$50',
    notes: 'This was not a shit show',
    location: 'Blue Mountains'
  },
];

ReactDOM.render(
  <Body teas={teas} />,
  document.getElementById('root'),
);
