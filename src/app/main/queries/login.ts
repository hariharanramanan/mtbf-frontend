import gql from 'graphql-tag';

export const LOGIN = gql`
    query loginData($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            userId
        }
    }
`;