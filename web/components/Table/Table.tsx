import { ReactNode } from 'react'

interface TableCell {
  renderCell: (prop?: unknown) => ReactNode
  headerLabel: string
}

interface TableProps {
  cells: TableCell[]
  rows?: unknown[]
  skeletonRows?: number
}

const Table = ({ cells, rows, skeletonRows }: TableProps) => {
  const isSkeletonLoader = !!skeletonRows
  const tableRows = isSkeletonLoader ? Array(skeletonRows).fill(1) : rows

  return (
    <table className='table-fixed' width='100%'>
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
        {tableRows.map((_, index: number) => (
          // TODO: created a table row component that uses the use client flag
          <tr key={`table-row-${index}`} className='hover:bg-backgroundContainerAlt hover:cursor-pointer'>
            {cells.map(({ renderCell }: TableCell, cellIndex: number) => {
              return (
                <td className='py-4 pr-5 border-gray-100 border-b' key={`table-cell-${cellIndex}`}>{renderCell(tableRows[index])}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table