import Rating from 'react-rating';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Wrapper } from './Rating.styled';

export const FeedbackRating = ({ rating }) => {
  return (
    <Wrapper>
      <Rating
        readonly={true}
        stop={5}
        initialRating={rating}
        emptySymbol={<AiOutlineStar color="#ffa900" size={24} />}
        fullSymbol={<AiTwotoneStar color="#ffa900" size={24} />}
      />
    </Wrapper>
  );
};

FeedbackRating.propTypes = {
  rating: PropTypes.string.isRequired,
};
