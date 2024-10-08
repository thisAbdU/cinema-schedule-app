import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { SIGN_UP } from '../graphql/mutations/signup';

export function useSignup() {
  const { client: apolloClient } = useApolloClient();
  const loading = ref(false);
  const error = ref(null);

  const signUp = async (input) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apolloClient.mutate({
        mutation: SIGN_UP,
        variables: { input },
      });
      console.log('Sign up success:', response.data.signUp.message);
      return response.data.signUp;
    } catch (err) {
      console.error('Signup error:', err);
      error.value = err.message || 'An error occurred during signup.';
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    signUp,
    loading,
    error,
  };
}