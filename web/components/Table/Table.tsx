import { ReactNode } from 'react'

interface TableCell {
  renderCell: (prop?: unknown) => ReactNode
  headerLabel: string
}

interface TableProps {
  rows: unknown[]
  cells: TableCell[]
}

const Table = ({ cells, rows }: TableProps) => {
  return (
    <table width='100%'>
      <thead>
        <tr className='border-gray-100 border-b'>
          {cells.map(({ headerLabel }: TableCell, i: number) => (
            <th className='text-text py-3 text-left font-semibold' key={`table-header-${i}`}>
              {headerLabel} 
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((_, index: number) => (
          // TODO: created a table row component that uses the use client flag
          <tr key={`table-row-${index}`} className='hover:bg-backgroundContainerAlt hover:cursor-pointer'>
            {cells.map(({ renderCell }: TableCell, cellIndex: number) => {
              return (
                <td className='py-4 pr-5 border-gray-100 border-b' key={`table-cell-${cellIndex}`}>{renderCell(rows[index])}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table