import PropTypes from 'prop-types'

import { Button } from '@mui/material'
import { GridToolbarContainer, GridRowModes } from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'

import AddIcon from '@mui/icons-material/Add'

function TableEditToolbar({ setRows, setRowModesModel }) {
  const handleClick = () => {
    const id = randomId()
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }])
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' }
    }))
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add
      </Button>
    </GridToolbarContainer>
  )
}

TableEditToolbar.propTypes = {
  setRows: PropTypes.func.isRequired,
  setRowModesModel: PropTypes.func.isRequired
}

export default TableEditToolbar
