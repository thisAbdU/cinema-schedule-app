import gql from 'graphql-tag';

export const SIGN_IN = gql`
  mutation SignIn($input: LoginDto!) {
    login(input: $input) {
      message
      accessToken
    }
  }
`;