const ar = {
  dashboard: {
    weather: {
      title: 'الطقس',
      error: 'تعذر تحميل بيانات الطقس!',
      wind: {
        unit: 'كم/س'
      }
    },
    card: {
      employees: {
        title: 'إجمالي الموظفين',
        description: 'إجمالي موظفي النظام.'
      },
      attendance: {
        title: 'الحضور',
        description: 'إجمالي الحاضرين اليوم.'
      },
      absent: {
        title: 'إجمالي الغياب',
        description: 'إجمالي الغياب اليوم.'
      },
      onTime: {
        title: 'في الوقت المحدد',
        description: 'رصد الانضباط الزمني.'
      },
      late: {
        title: 'تأخر في الوصول',
        description: 'تتبع التأخير في الوصول.'
      },
      early: {
        title: 'مغادرة مبكرة',
        description: 'تتبع المغادرات المبكرة.'
      }
    },
    chart: {
      attendance: {
        today: {
          title: 'إحصائيات الحضور اليومية'
        },
        year: {
          title: 'إحصائيات الحضور السنوية'
        }
      }
    }
  },

  employees: {
    title: 'الموظفين',
    add: 'أضف موظف',
    table: {
      header: {
        id: 'الرقم التعريفي',
        name: 'الاسم',
        age: 'العمر',
        gender: 'الجنس',
        email: 'البريد الإلكتروني',
        phoneNumber: 'رقم الهاتف',
        jobTitle: 'المسمى الوظيفي',
        joinDate: 'تاريخ الانضمام',
        vacationsBalance: 'رصيد الاجازات'
      }
    }
  },

  attendance: {
    title: 'الحضور',
    holiday: {
      add: 'أضف عطلة'
    },
    table: {
      header: {
        id: 'الرقم التعريفي',
        name: 'الاسم',
        status: 'الحالة',
        checkinTime: 'وقت الحضور',
        checkoutTime: 'وقت الانصراف',
        workHours: 'ساعات العمل'
      }
    }
  },

  statistics: {
    title: 'الإحصائيات'
  },

  settings: {
    title: 'الإعدادات',
    card: {
      language: {
        title: 'اللغة',
        description: 'تغيير اللغة'
      },
      theme: {
        title: 'السمة',
        description: 'تغيير السمة',
        light: 'سمة فاتحة',
        dark: 'سمة داكنة'
      }
    }
  },

  policies: {
    title: 'السياسات',
    card: {
      empowerment: {
        title: 'تمكين وإشراك',
        description:
          'نحن نحتفل بالتنوع والشمولية، نعزز بيئة حيث يشعر كل فرد بأهميته، ويتم تقديره، ويتم تمكينه. نجاحنا يعتمد على قوة وجهات نظرنا المتنوعة وثقافتنا الشاملة.'
      },
      collaborative: {
        title: 'تآزر التعاون',
        description:
          'نحن نؤمن بقوة التعاون، حيث تتلاقى وجهات النظر المتنوعة لخلق قوة تآزرية. يزدهر تعاوننا على التواصل المفتوح، والاحترام المتبادل، والتفاني المشترك لتحقيق الأهداف المشتركة.'
      },
      pioneering: {
        title: 'الابتكار الريادي',
        description:
          'نحن نعزز ثقافة الابتكار المستمر، حيث نشجع فريقنا على التفكير بإبداع، واستقبال التغيير، وريادة حلول رائدة تعيد تعريف معايير الصناعة.'
      }
    }
  },

  sidebar: {
    notifications: 'الإشعارات',
    dashboard: 'لوحة التحكم',
    employees: 'الموظفين',
    attendance: 'الحضور',
    statistics: 'الإحصائيات',
    settings: 'الإعدادات',
    policies: 'السياسات',
    logout: 'تسجيل الخروج'
  },

  header: {
    greeting: 'صباح الخير',
    profile: 'الملف الشخصي',
    settings: 'الإعدادات',
    help: 'المساعدة',
    logout: 'تسجيل الخروج'
  },

  snackbar: {
    show: 'عرض الشريط'
  },

  common: {
    back: 'رجوع',
    submit: 'إرسال',
    language: 'اللغة',
    error: {
      title: 'خطأ',
      description: 'عفوًا! حدث خطأ غير متوقع.',
      not_found: 'غير موجود',
      server_error: 'خطأ في الخادم',
      unknown: 'خطأ غير معروف'
    }
  },

  form: {
    name: {
      label: 'الاسم',
      required: 'الاسم مطلوب.'
    },
    email: {
      label: 'البريد الإلكتروني',
      required: 'عنوان البريد الإلكتروني مطلوب.',
      invalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح.'
    },
    phoneNumber: {
      label: 'رقم الهاتف',
      required: 'رقم الهاتف مطلوب.'
    },
    age: {
      label: 'العمر',
      required: 'العمر مطلوب.',
      positive: 'يجب أن يكون العمر رقمًا موجبًا.',
      integer: 'يجب أن يكون العمر عددًا صحيحًا.'
    },
    gender: {
      label: 'الجنس',
      required: 'الجنس مطلوب.'
    },
    jobTitle: {
      label: 'المسمى الوظيفي',
      required: 'المسمى الوظيفي مطلوب.'
    },
    joinDate: {
      label: 'تاريخ الانضمام',
      required: 'تاريخ الانضمام مطلوب.'
    },
    vacationsBalance: {
      label: 'رصيد الإجازات',
      required: 'رصيد الإجازات مطلوب.',
      positive: 'يجب أن يكون رصيد الإجازات رقمًا موجبًا.',
      integer: 'يجب أن يكون رصيد الإجازات عددًا صحيحًا.'
    }
  }
}

export default ar
