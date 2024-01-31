/* eslint-disable jsx-a11y/label-has-associated-control */
import { useTranslation } from 'react-i18next'

import PropTypes from 'prop-types'

import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import {
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText
} from '@mui/material'

import { Oval } from 'react-loader-spinner'

import OverlayForm from '../../../common/forms/overlay-form'

function AddEmployeeForm({ isOpen, onClose, onSubmit }) {
  const { t } = useTranslation()

  const AddEmployeeInititalValues = {
    name: '',
    email: '',
    phoneNumber: '',
    age: '',
    gender: '',
    jobTitle: '',
    joinDate: '',
    vacationsBalance: ''
  }

  const AddEmployeeSchema = Yup.object({
    name: Yup.string().required(t('form:name:required')),
    email: Yup.string()
      .email(t('form:email:invalid'))
      .required(t('form:email:required')),
    phoneNumber: Yup.string().required(t('form:phoneNumber:required')),
    age: Yup.number()
      .required(t('form:age:required'))
      .positive(t('form:age:positive'))
      .integer(t('form:age:integer')),
    gender: Yup.string().required(t('form:gender:required')),
    jobTitle: Yup.string().required(t('form:jobTitle:required')),
    joinDate: Yup.date().required(t('form:joinDate:required')),
    vacationsBalance: Yup.number()
      .required(t('form:vacationsBalance:required'))
      .positive(t('form:vacationsBalance:positive'))
      .integer(t('form:vacationsBalance:integer'))
  })

  const handleOnSubmit = (employee, { resetForm }) => {
    onSubmit(employee)
    resetForm()
  }

  return (
    <OverlayForm title={t('employees:add')} isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={AddEmployeeInititalValues}
        validationSchema={AddEmployeeSchema}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <Form
            className="flex flex-col flex-wrap justify-between gap-4 mt-6 mx-4"
            onSubmit={handleSubmit}
          >
            <TextField
              id="name"
              name="name"
              label={t('form:name:label')}
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <Box className="flex flex-wrap gap-4">
              <TextField
                className="text-field"
                id="email"
                name="email"
                label={t('form:email:label')}
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                className="text-field"
                id="phoneNumber"
                name="phoneNumber"
                label={t('form:phoneNumber:label')}
                value={values.phoneNumber}
                onChange={handleChange}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />
            </Box>

            <Box className="flex justify-between flex-wrap w-full gap-4">
              <FormControl className="text-field">
                <InputLabel id="gender-label">
                  {t('form:gender:label')}
                </InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  label={t('form:gender:label')}
                  value={values.gender || ''}
                  onChange={handleChange}
                  error={touched.gender && Boolean(errors.gender)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                <FormHelperText
                  error={touched.gender && Boolean(errors.gender)}
                >
                  {touched.gender && errors.gender}
                </FormHelperText>
              </FormControl>

              <TextField
                className="text-field"
                id="age"
                name="age"
                label={t('form:age:label')}
                type="number"
                value={values.age}
                onChange={handleChange}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
              />
            </Box>

            <TextField
              id="jobTitle"
              name="jobTitle"
              label={t('form:jobTitle:label')}
              value={values.jobTitle}
              onChange={handleChange}
              error={touched.jobTitle && Boolean(errors.jobTitle)}
              helperText={touched.jobTitle && errors.jobTitle}
            />

            <Box className="flex justify-between flex-wrap w-full gap-4">
              <TextField
                className="text-field"
                id="joinDate"
                name="joinDate"
                label={t('form:joinDate:label')}
                type="date"
                value={values.joinDate}
                onChange={handleChange}
                error={touched.joinDate && Boolean(errors.joinDate)}
                helperText={touched.joinDate && errors.joinDate}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                className="text-field"
                id="vacationsBalance"
                name="vacationsBalance"
                label={t('form:vacationsBalance:label')}
                type="number"
                value={values.vacationsBalance}
                onChange={handleChange}
                error={
                  touched.vacationsBalance && Boolean(errors.vacationsBalance)
                }
                helperText={touched.vacationsBalance && errors.vacationsBalance}
              />
            </Box>

            <Box className="self-center pt-4 w-1/3">
              <Button
                className="w-full"
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Oval
                    visible
                    height="20"
                    width="20"
                    color="#2e63f7"
                    secondaryColor="#d8d8da"
                    ariaLabel="oval-loading"
                  />
                ) : (
                  t('common:submit')
                )}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </OverlayForm>
  )
}

AddEmployeeForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default AddEmployeeForm
