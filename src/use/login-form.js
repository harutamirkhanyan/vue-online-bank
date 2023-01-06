import { computed, watch } from 'vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()

  const { handleSubmit, isSubmitting, submitCount } = useForm();
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required()
      .email('This is must be a valid Email')
  );

  const MIN_LENGTH = 6;
  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur,
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Please enter the Password')
      .min(MIN_LENGTH, `Min length for password must be a ${MIN_LENGTH}`)
  );

  const isTooManyAttempts = computed(() => {
    return submitCount.value >= 3;
  });

  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0;
      }, 1500);
    }
  });

  const onSubmit = handleSubmit(async values => {
    await store.dispatch('auth/login', values)
    router.push('/')
  });

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    MIN_LENGTH,
    onSubmit,
    isSubmitting,
    submitCount,
    isTooManyAttempts,
  };
}