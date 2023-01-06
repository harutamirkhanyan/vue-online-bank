import { useField, useForm } from "vee-validate"
import * as yup from 'yup'

export function useRequestForm(fn) {
  const { isSubmitting, handleSubmit } = useForm({
  initialValues:{
  status: 'active'
  }
  })

  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    'name',
    yup.string()
      .trim()
      .required('Name required field')
  )
  const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
    'phone',
    yup.number()
      .min(0, 'Min value 0')
      .required('Phone required field')
  )
  const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
    'amount',
    yup.number()
      .min(0, 'Min value 0')
      .required('Phone required field')
    )
  const { value: status, errorMessage: sError, handleBlur: sBlur } = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    status,
    isSubmitting,
    onSubmit,
    name,
    nError,
    nBlur,
    phone,
    pError,
    pBlur,
    amount,
    aError,
    aBlur,
    status,
    sError,
    sBlur

  }
}
