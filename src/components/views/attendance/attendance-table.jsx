import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import moment from 'moment'

import PaginatedTable from '../../common/tables/paginated-table'

function AttendanceTable({ data, isLoading, hasActions }) {
  const { t } = useTranslation()

  const tableColumnsHeaders = [
    {
      field: 'id',
      headerName: t('attendance:table:header:id'),
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true
    },
    {
      field: 'name',
      headerName: t('attendance:table:header:name'),
      editable: true
    },
    {
      field: 'status',
      headerName: t('attendance:table:header:status'),
      editable: true,
      type: 'singleSelect',
      valueOptions: [
        'Work From Office',
        'Early Departure',
        'Work From Home',
        'Late Arrival',
        'Sick Leave',
        'Absent'
      ]
    },
    {
      field: 'checkinTime',
      headerName: t('attendance:table:header:checkinTime'),
      type: 'dateTime',
      editable: true,
      valueFormatter: (params) => moment(params?.value).format('hh:mm A')
    },
    {
      field: 'checkoutTime',
      headerName: t('attendance:table:header:checkoutTime'),
      type: 'dateTime',
      editable: true,
      valueFormatter: (params) => moment(params?.value).format('hh:mm A')
    },
    {
      field: 'workHours',
      headerName: t('attendance:table:header:workHours'),
      type: 'number',
      align: 'left',
      headerAlign: 'left',
      editable: true
    }
  ]

  return (
    <PaginatedTable
      columns={tableColumnsHeaders}
      hasActions={hasActions}
      isLoading={isLoading}
      data={data || []}
    />
  )
}

AttendanceTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  hasActions: PropTypes.bool
}

AttendanceTable.defaultProps = {
  data: [],
  isLoading: false,
  hasActions: false
}

export default AttendanceTable
