import { useMutation } from '@vue/apollo-composable';
import { SIGNUP_MUTATION } from '../graphql/mutations/signup';

export default function useSignUp() {
  const { mutate, loading } = useMutation(SIGNUP_MUTATION);

  const executeSignUp = async (userInput) => {
    try {
      const response = await mutate({ input: userInput }); // Use 'input' for mutation argument

      if (!response?.data?.signUp) {
        throw new Error('Invalid response');
      }

      // Return the message from the SignUpOutput
      return response.data.signUp.message;

    } catch (err) {
      throw new Error(err.message || 'Sign-up failed');
    }
  };

  return { executeSignUp, loading };
}
