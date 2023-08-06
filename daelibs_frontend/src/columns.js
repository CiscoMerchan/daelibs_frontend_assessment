import React from 'react';

// Function component to render the "Actual Score" cell
const ActualScoreCell = ({ value, row }) => {
  const isRedBg = row.index < 2;
  return (
    <div className={`cell actual ${isRedBg ? 'red-bg' : 'green-bg'}`}>
      <span className="rectangle">
        <h2>{`${value}%`}</h2>
      </span>
    </div>
  );
};

export const COLUMNS = [
  {
    Header: '',
    accessor: 'na',
    width: 52,
  },
  {
    Header: 'Name',
    accessor: 'name',
    width: 553,
  },
  {
    Header: '',
    accessor: 'n_a',
    width: 122,
  },
  {
    Header: 'Target Score',
    accessor: 'target',
    width: 121,
  },
  {
    Header: 'Actual Score',
    accessor: (row) => row.actual,
    Cell: ActualScoreCell,
    width: 122,
  },
  {
    Header: 'Total Points',
    accessor: 'points',
    width: 103,
  }
];
