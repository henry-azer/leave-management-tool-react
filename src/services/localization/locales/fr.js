const fr = {
  dashboard: {
    weather: {
      title: 'Météo',
      error: 'Impossible de charger les données météorologiques !',
      wind: {
        unit: 'km/h'
      }
    },
    card: {
      employees: {
        title: 'Total des employés',
        description: 'Total des employés du système.'
      },
      attendance: {
        title: 'Présence',
        description: "Total des participants aujourd'hui."
      },
      absent: {
        title: 'Total des absences',
        description: "Total des absences aujourd'hui."
      },
      onTime: {
        title: "À l'heure",
        description: 'Surveiller la ponctualité.'
      },
      late: {
        title: 'Arrivée tardive',
        description: "Suivre les retards à l'arrivée."
      },
      early: {
        title: 'Départs anticipés',
        description: 'Suivre les départs anticipés.'
      }
    },
    chart: {
      attendance: {
        today: {
          title: "Statistiques de présence aujourd'hui"
        },
        year: {
          title: 'Statistiques de présence annuelles'
        }
      }
    }
  },

  employees: {
    title: 'Employés',
    add: 'Ajouter un employé',
    table: {
      header: {
        id: 'ID',
        name: 'Nom',
        age: 'Âge',
        gender: 'Genre',
        email: 'E-mail',
        phoneNumber: 'Numéro de téléphone',
        jobTitle: 'Titre du poste',
        joinDate: "Date d'adhésion",
        vacationsBalance: 'Solde de vacances'
      }
    }
  },

  attendance: {
    title: 'Présence',
    holiday: {
      add: 'Ajouter des vacances'
    },
    table: {
      header: {
        id: 'ID',
        name: 'Nom',
        status: 'Statut',
        checkinTime: "Heure d'arrivée",
        checkoutTime: 'Heure de départ',
        workHours: 'Heures de travail'
      }
    }
  },

  statistics: {
    title: 'Statistiques'
  },

  settings: {
    title: 'Paramètres',
    card: {
      language: {
        title: 'Langue',
        description: 'Changer de langue'
      },
      theme: {
        title: 'Thème',
        description: 'Changer de thème',
        light: 'Thème clair',
        dark: 'Thème sombre'
      }
    }
  },

  policies: {
    title: 'Politiques',
    card: {
      empowerment: {
        title: 'Autonomisation et Inclusion',
        description:
          "Nous célébrons la diversité et l'inclusivité, favorisant un environnement où chaque individu se sent valorisé, entendu et habilité. Notre succès repose sur la force de nos perspectives diverses et une culture inclusive."
      },
      collaborative: {
        title: 'Synergie Collaborative',
        description:
          "Nous croyons en la puissance de la collaboration, où des perspectives diverses convergent pour créer une force synergique. Notre travail d'équipe prospère grâce à une communication ouverte, un respect mutuel et l'engagement partagé à atteindre des objectifs communs."
      },
      pioneering: {
        title: 'Ingéniosité Pionnière',
        description:
          "Nous encourageons une culture d'innovation continue, incitant notre équipe à penser de manière créative, à embrasser le changement et à pionnier des solutions révolutionnaires qui redéfinissent les normes de l'industrie."
      }
    }
  },

  sidebar: {
    notifications: 'Notifications',
    dashboard: 'Tableau',
    employees: 'Employés',
    attendance: 'Présence',
    statistics: 'Statistiques',
    settings: 'Paramètres',
    policies: 'Politiques',
    logout: 'Déconnexion'
  },

  header: {
    greeting: 'Bonjour',
    profile: 'Profil',
    settings: 'Paramètres',
    help: 'Aide',
    logout: 'Déconnexion'
  },

  snackbar: {
    show: 'Afficher le Snackbar'
  },

  common: {
    back: 'Retour',
    submit: 'Envoyer',
    language: 'Langue',
    error: {
      title: 'Erreur',
      description: "Ops! Une erreur inattendue s'est produite.",
      not_found: 'Non trouvé',
      server_error: 'Erreur du serveur',
      unknown: 'Erreur inconnue'
    }
  },

  form: {
    name: {
      label: 'Nom',
      required: 'Le nom est requis.'
    },
    email: {
      label: 'E-mail',
      required: "L'adresse e-mail est requise.",
      invalid: 'Veuillez saisir une adresse e-mail valide.'
    },
    phoneNumber: {
      label: 'Numéro de téléphone',
      required: 'Le numéro de téléphone est requis.'
    },
    age: {
      label: 'Âge',
      required: "L'âge est requis.",
      positive: "L'âge doit être un nombre positif.",
      integer: "L'âge doit être un nombre entier."
    },
    gender: {
      label: 'Sexe',
      required: 'Le sexe est requis.'
    },
    jobTitle: {
      label: 'Titre du poste',
      required: 'Le titre du poste est requis.'
    },
    joinDate: {
      label: "Date d'embauche",
      required: "La date d'embauche est requise."
    },
    vacationsBalance: {
      label: 'Solde des congés',
      required: 'Le solde des congés est requis.',
      positive: 'Le solde des congés doit être un nombre positif.',
      integer: 'Le solde des congés doit être un nombre entier.'
    }
  }
}

export default fr
