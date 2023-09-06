import PropTypes from 'prop-types';
import { FeedbackButtonList } from './FeedbackOptions.styled';
import { FeedbackButtonListItem } from 'components/FeedbackButtonListItem/FeedbackButtonListItem';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackButtonList>
        {options.map(option => (
          <FeedbackButtonListItem
            key={option}
            option={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </FeedbackButtonList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
