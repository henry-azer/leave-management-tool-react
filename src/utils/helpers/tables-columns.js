const EMPLOYEE_TABLE_COLUMNS = [
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
    editable: true
  }
]

export default EMPLOYEE_TABLE_COLUMNS
