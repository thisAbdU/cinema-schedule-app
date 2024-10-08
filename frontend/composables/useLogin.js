import { ref } from 'vue';
import { useApolloClient } from '@vue/apollo-composable';
import { SIGN_IN } from '../graphql/mutations/signin';
import { useAuth } from './useAuth';

export function useSignin() {
  const { client: apolloClient } = useApolloClient();
  const { setAuthenticated } = useAuth();
  
  const loading = ref(false);
  const error = ref(null);
  const user = ref(null);

  const signin = async (username, password) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apolloClient.mutate({
        mutation: SIGN_IN,
        variables: {
          input: {
            username,
            password
          }
        }
      });

      const { message, accessToken } = response.data.login;

      // Store the token in localStorage (note: this is not the most secure method)
      //TODO: will work on the security
      localStorage.setItem('accessToken', accessToken);

      // Set basic user info
      user.value = { username };

      console.log('Sign in success:', message);
      setAuthenticated(true);
      return { message };
    } catch (err) {
      console.error('Signin error:', err);
      error.value = 'Invalid credentials. Please try again.';
      throw error.value;
    } finally {
      loading.value = false;
    }
  };

  const signout = () => {
    localStorage.removeItem('accessToken');
    setAuthenticated(false);
    user.value = null;
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
  };

  return {
    signin,
    signout,
    isAuthenticated,
    loading,
    error,
    user
  };
}
