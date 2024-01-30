import moment from 'moment'

export const EMPLOYEE_TABLE_COLUMNS = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'name',
    headerName: 'Name',
    editable: true
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'gender',
    headerName: 'Gender',
    editable: true,
    type: 'singleSelect',
    valueOptions: ['Male', 'Female']
  },
  {
    field: 'email',
    headerName: 'Email',
    editable: true
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    editable: true
  },
  {
    field: 'jobTitle',
    headerName: 'Job Title',
    editable: true
  },
  {
    field: 'joinDate',
    headerName: 'Join Date',
    type: 'date',
    editable: true,
    valueFormatter: (params) => moment(params?.value).format('DD/MM/YYYY')
  }
]

export const ATTENDANCE_TABLE_COLUMNS = [
  {
    field: 'id',
    headerName: 'ID',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    editable: true
  },
  {
    field: 'name',
    headerName: 'Name',
    editable: true
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: true,
    type: 'singleSelect',
    valueOptions: [
      'Work From Office',
      'Eearly Departure',
      'Work From Home',
      'Late Arrival',
      'Sick Leave',
      'Absent'
    ]
  },
  {
    field: 'checkinTime',
    headerName: 'Check in Time',
    type: 'dateTime',
    editable: true,
    valueFormatter: (params) => moment(params?.value).format('hh:mm A')
  },
  {
    field: 'checkoutTime',
    headerName: 'Check out Time',
    type: 'dateTime',
    editable: true,
    valueFormatter: (params) => moment(params?.value).format('hh:mm A')
  },
  {
    field: 'workHours',
    headerName: 'Work Hours',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    editable: true
  }
]
