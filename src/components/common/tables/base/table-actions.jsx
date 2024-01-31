import PropTypes from 'prop-types'
import { GridActionsCellItem } from '@mui/x-data-grid'
import {
  Edit as EditIcon,
  DeleteOutlined as DeleteIcon,
  Save as SaveIcon,
  Close as CancelIcon
} from '@mui/icons-material'

function TableActions({
  id,
  isInEditMode,
  onSave,
  onCancel,
  onEdit,
  onDelete
}) {
  if (isInEditMode) {
    return (
      <>
        <GridActionsCellItem
          key={id}
          icon={<SaveIcon />}
          label="Save"
          sx={{ color: 'primary.main' }}
          onClick={onSave}
        />
        <GridActionsCellItem
          icon={<CancelIcon />}
          label="Cancel"
          className="textPrimary"
          onClick={onCancel}
          color="inherit"
        />
      </>
    )
  }

  return (
    <>
      <GridActionsCellItem
        key={id}
        icon={<EditIcon />}
        label="Edit"
        className="textPrimary"
        onClick={onEdit}
        color="inherit"
      />
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={onDelete}
        color="inherit"
      />
    </>
  )
}

TableActions.propTypes = {
  id: PropTypes.number.isRequired,
  isInEditMode: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
}

TableActions.defaultProps = {
  onSave: () => {},
  onEdit: () => {},
  onCancel: () => {},
  onDelete: () => {}
}

export default TableActions
