import React from 'react';
import PropTypes from 'prop-types';
import { Option, OptionList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <OptionList>
      {options.map(option => {
        return (
          <Option key={option} id={option} onClick={addFeedback}>
            {option}
          </Option>
        );
      })}
    </OptionList>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFeedback: PropTypes.func.isRequired,
};
