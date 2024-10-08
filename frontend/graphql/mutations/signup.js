import gql from 'graphql-tag';

export const SIGN_UP = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(input: $input) {
      message
    }
  }
`;