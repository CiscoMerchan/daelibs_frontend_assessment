import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import DATA from './DATA.json';
import { COLUMNS } from './columns';
import './table.css';

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="thead-row">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="header" key={column.id} style={{ width: column.width }}>
                <h3 id='header'>{column.render('Header')}</h3>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="tbody">
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="trow">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className={`cell ${cell.column.id}`} key={cell.column.id} style={{ width: cell.column.width }}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

