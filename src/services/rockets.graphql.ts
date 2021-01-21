import gql from 'graphql-tag';

export const GET_ROCKETS = gql`
  {
    rockets {
        id
        name
        description
        wikipedia
        cost_per_launch
        height {
          meters
        }
        active
      }
  }
`;
