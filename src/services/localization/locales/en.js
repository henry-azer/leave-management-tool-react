const en = {
  dashboard: {
    weather: {
      title: 'Weather',
      error: 'Unable to load weather data!',
      wind: {
        unit: 'km/h'
      }
    },
    card: {
      employees: {
        title: 'Total Employees',
        description: 'Total system employees.'
      },
      attendance: {
        title: 'Attendance',
        description: 'Total attendees today.'
      },
      absent: {
        title: 'Absent',
        description: 'Total absences today.'
      },
      onTime: {
        title: 'On Time',
        description: 'Monitor punctuality.'
      },
      late: {
        title: 'Late Arrival',
        description: 'Track late arrivals.'
      },
      early: {
        title: 'Early Departures',
        description: 'Track early departures.'
      }
    },
    chart: {
      attendance: {
        today: {
          title: 'Today Attendance Stats'
        },
        year: {
          title: 'Yearly Attendance Stats'
        }
      }
    }
  },

  employees: {
    title: 'Employees',
    add: 'Add Employee',
    table: {
      header: {
        id: 'ID',
        name: 'Name',
        age: 'Age',
        gender: 'Gender',
        email: 'Email',
        phoneNumber: 'Phone Number',
        jobTitle: 'Job Title',
        joinDate: 'Join Date',
        vacationsBalance: 'Vacations Balance'
      }
    }
  },

  attendance: {
    title: 'Attendance',
    holiday: {
      add: 'Add Holiday'
    },
    table: {
      header: {
        id: 'ID',
        name: 'Name',
        status: 'Status',
        checkinTime: 'Check-in Time',
        checkoutTime: 'Check-out Time',
        workHours: 'Work Hours'
      }
    }
  },

  statistics: {
    title: 'Statistics'
  },

  settings: {
    title: 'Settings',
    card: {
      language: {
        title: 'Language',
        description: 'Change Language'
      },
      theme: {
        title: 'Theme',
        description: 'Change Theme',
        light: 'Light Theme',
        dark: ' Dark Theme'
      }
    }
  },

  policies: {
    title: 'Policies',
    card: {
      empowerment: {
        title: 'Empowerment and Inclusion',
        description:
          'We celebrate diversity and inclusivity, fostering an environment where every individual feels valued, heard, and empowered. Our success is built on the strength of our diverse perspectives and inclusive culture.'
      },
      collaborative: {
        title: 'Collaborative Synergy',
        description:
          'We believe in the power of collaboration, where diverse perspectives converge to create a synergistic force. Our teamwork thrives on open communication, mutual respect, and the shared commitment to achieving common goals.'
      },
      pioneering: {
        title: 'Pioneering Ingenuity',
        description:
          'We foster a culture of continuous innovation, encouraging our team to think creatively, embrace change, and pioneer groundbreaking solutions that redefine industry standards.'
      }
    }
  },

  sidebar: {
    notifications: 'Notifications',
    dashboard: 'Dashboard',
    employees: 'Employees',
    attendance: 'Attendance',
    statistics: 'Statistics',
    settings: 'Settings',
    policies: 'Policies',
    logout: 'Logout'
  },

  header: {
    greeting: 'Good Morning',
    profile: 'Profile',
    settings: 'Settings',
    help: 'Help',
    logout: 'Logout'
  },

  snackbar: {
    show: 'Show Snackbar'
  },

  common: {
    back: 'Back',
    submit: 'Submit',
    language: 'Language',
    error: {
      title: 'Error',
      description: 'Ops! Unexpected error happened.',
      not_found: 'Not Found',
      server_error: 'Server Error',
      unknown: 'Unknown Error'
    }
  },

  form: {
    name: {
      label: 'Name',
      required: 'Name is required.'
    },
    email: {
      label: 'Email',
      required: 'Email address is required.',
      invalid: 'Please enter a valid email address.'
    },
    phoneNumber: {
      label: 'Phone Number',
      required: 'Phone number is required.'
    },
    age: {
      label: 'Age',
      required: 'Age is required.',
      positive: 'Age must be a positive number.',
      integer: 'Age must be an integer.'
    },
    gender: {
      label: 'Gender',
      required: 'Gender is required.'
    },
    jobTitle: {
      label: 'Job Title',
      required: 'Job title is required.'
    },
    joinDate: {
      label: 'Join Date',
      required: 'Join date is required.'
    },
    vacationsBalance: {
      label: 'Vacations Balance',
      required: 'Vacations balance is required.',
      positive: 'Vacations balance must be a positive number.',
      integer: 'Vacations balance must be an integer.'
    }
  }
}

export default en
