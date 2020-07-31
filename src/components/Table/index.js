import React from 'react'
import './styles.scss'

import ReactTable from 'react-table'

export const ContentTable = ({ data, type }) => {
  const noDataMessage = () => {
    return (
      <span className="animated zoomIn animate-f02 rt-no-data-found">
        No Data
      </span>
    )
  }

  const movieColumns = [
    { Header: 'Title', accessor: 'title', className: 'name-cell-head' },
    {
      Header: 'Release Data',
      accessor: 'release_date',
      className: 'name-cell'
    },
    { Header: 'Director', accessor: 'director', className: 'name-cell' },
    { Header: 'Producer', accessor: 'producer', className: 'name-cell' }
  ]

  const peopleColumns = [
    { Header: 'Name', accessor: 'name', className: 'name-cell-head' },
    { Header: 'Gender', accessor: 'gender', className: 'name-cell' },
    { Header: 'Height', accessor: 'height', className: 'name-cell' },
    { Header: 'Weight', accessor: 'mass', className: 'name-cell' }
  ]
  return (
    <div>
      <ReactTable
        data={data}
        columns={type === 'movies' ? movieColumns : peopleColumns}
        showPaginationBottom={false}
        pageSize={data.length}
        className="movie-data-table"
        NoDataComponent={noDataMessage}
      />
    </div>
  )
}
