import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import useCreateReview from '../hooks/useCreateReview';
import ReviewForm from './ReviewForm';

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required('Repository name is required'),
  ownerName: yup.string().required('Repository owner name is required'),
  rating: yup.number()
    .typeError('Rating must be integer between 0 and 100')
    .required('Rating is required')
    .integer('Rating must be integer between 0 and 100')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating can be 100 at most'),
});

export const ReviewContainer = ({ onSubmit }) => (
  <View>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  </View>  
);

const Review = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const review = { ...values, rating:parseInt(values.rating) };

    try {
      const { data } = await createReview(review);
      const repositoryId = data.createReview.repositoryId;
      if (repositoryId) {
        history.push(`/repositories/${repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewContainer onSubmit={onSubmit} />
  );
};

export default Review;