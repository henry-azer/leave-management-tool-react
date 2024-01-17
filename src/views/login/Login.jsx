import { useTranslation } from 'react-i18next'
import { useSnackbar } from 'notistack'

import Typography from '@mui/material/Typography'

function Login() {
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    enqueueSnackbar('This is a success message!', { variant: 'success' })
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4">{t('login:title')}</Typography>
      <br />
      <button className="button" onClick={handleClick} type="button">
        {t('snackbar:show')}
      </button>
    </div>
  )
}

export default Login
