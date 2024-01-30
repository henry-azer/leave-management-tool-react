import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import {
  DataGrid,
  GridRowModes,
  GridRowEditStopReasons
} from '@mui/x-data-grid'

import TableActions from './base/table-actions'

function PaginatedTable({ data, columns, hasActions, isLoading }) {
  const [rows, setRows] = useState(data || [])
  const [rowModesModel, setRowModesModel] = useState({})

  useEffect(() => {
    setRows(data || [])
  }, [data])

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      // eslint-disable-next-line no-param-reassign
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id))
  }

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    })

    const editedRow = rows.find((row) => row.id === id)
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id))
    }
  }

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false }
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel)
  }

  const updatedColumns = [...columns]
  if (hasActions) {
    updatedColumns.push({
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <TableActions
              key={id}
              id={id}
              isInEditMode={isInEditMode}
              onSave={handleSaveClick(id)}
              onCancel={handleCancelClick(id)}
            />
          ]
        }

        return [
          <TableActions
            key={id}
            id={id}
            isInEditMode={isInEditMode}
            onEdit={handleEditClick(id)}
            onDelete={handleDeleteClick(id)}
          />
        ]
      }
    })
  }

  return (
    <DataGrid
      rows={rows}
      columns={updatedColumns.map((column) => ({
        ...column,
        flex: 1
      }))}
      editMode="row"
      rowModesModel={rowModesModel}
      onRowModesModelChange={handleRowModesModelChange}
      onRowEditStop={handleRowEditStop}
      processRowUpdate={processRowUpdate}
      checkboxSelection
      showColumnVerticalBorder
      showCellVerticalBorder
      loading={isLoading}
      rowHeight={45}
      slotProps={{
        toolbar: { setRows, setRowModesModel }
      }}
    />
  )
}

PaginatedTable.propTypes = {
  columns: PropTypes.array.isRequired,
  hasActions: PropTypes.bool,
  isLoading: PropTypes.bool,
  data: PropTypes.array
}

PaginatedTable.defaultProps = {
  hasActions: false,
  isLoading: false,
  data: {}
}

export default PaginatedTable
