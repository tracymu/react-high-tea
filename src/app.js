import React from 'react';
import ReactDOM from 'react-dom';

function Body(props) {
  return (
    <table>
      <TableEntries teas={props.teas} />
    </table>
  );
}

function TableEntries(props) {
  return (
    <tbody>
      { props.teas.map(tea =>
        <Entry tea={tea} key={tea.id} />,
      )
    }
    </tbody>
  );
}


function Entry(props) {
  return (
    <tr>
      <td>{props.tea.name}</td>
      <td>{props.tea.location}</td>
      <td>{props.tea.date}</td>
      <td>{props.tea.score}</td>
    </tr>
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
