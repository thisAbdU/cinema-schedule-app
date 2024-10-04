// Defining the SIGNUP_MUTATION
export const SIGNUP_MUTATION = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      message
    }
  }
`;