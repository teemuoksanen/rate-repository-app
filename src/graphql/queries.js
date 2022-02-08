import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, REVIEW_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...repositoryBaseFields
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository(
    $id: ID!
    $first: Int
    $after: String
  ) {
    repository(
      id: $id
    ) {
      ...repositoryBaseFields
      reviews(
        first: $first
        after: $after
      ) {
        edges {
          node {
            ...reviewBaseFields
            user {
              ...userBaseFields
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${REPOSITORY_BASE_FIELDS}
  ${REVIEW_BASE_FIELDS}
  ${USER_BASE_FIELDS}
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser(
    $includeReviews: Boolean = false
  ) {
    authorizedUser {
      ...userBaseFields
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...reviewBaseFields
            repository {
              fullName
            }
          }
        }
      }
    }
  }
  ${USER_BASE_FIELDS}
  ${REVIEW_BASE_FIELDS}
`;