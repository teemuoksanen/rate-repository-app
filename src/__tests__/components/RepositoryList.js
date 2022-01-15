import React from 'react';
import { render } from '@testing-library/react-native';

import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const formatCount = value => {
        if (value >= 1000) {
          return `${Math.round((value / 1000) * 10) / 10}k`;
        }
        return value.toString();
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const repositoriesCount = getAllByTestId('RepositoryItem').length;

      for (let i = 0; i < repositoriesCount; i++) {
        expect(getAllByTestId('fullName')[i]).toHaveTextContent(repositories.edges[i].node.fullName);
        expect(getAllByTestId('description')[i]).toHaveTextContent(repositories.edges[i].node.description);
        expect(getAllByTestId('language')[i]).toHaveTextContent(repositories.edges[i].node.language);
        expect(getAllByTestId('Stars')[i]).toHaveTextContent(formatCount(repositories.edges[i].node.stargazersCount));
        expect(getAllByTestId('Stars')[i]).toHaveTextContent("Stars");
        expect(getAllByTestId('Forks')[i]).toHaveTextContent(formatCount(repositories.edges[i].node.forksCount));
        expect(getAllByTestId('Forks')[i]).toHaveTextContent("Forks");
        expect(getAllByTestId('Reviews')[i]).toHaveTextContent(formatCount(repositories.edges[i].node.reviewCount));
        expect(getAllByTestId('Reviews')[i]).toHaveTextContent("Reviews");
        expect(getAllByTestId('Rating')[i]).toHaveTextContent(formatCount(repositories.edges[i].node.ratingAverage));
        expect(getAllByTestId('Rating')[i]).toHaveTextContent("Rating");
      }

    });
  });
});