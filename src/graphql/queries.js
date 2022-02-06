import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, REVIEW_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...repositoryBaseFields
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      ...repositoryBaseFields
      reviews {
        edges {
          node {
            ...reviewBaseFields
            user {
              ...userBaseFields
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
  ${REVIEW_BASE_FIELDS}
  ${USER_BASE_FIELDS}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      ...userBaseFields
    }
  }
  ${USER_BASE_FIELDS}
`;