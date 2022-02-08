import { useMutation } from '@apollo/client';

import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = ({ id }) => {
    try {
      mutate({ variables: { id } });
    } catch(e) {
      console.log(e);
    }
  };

  return [deleteReview, result];
};

export default useDeleteReview;