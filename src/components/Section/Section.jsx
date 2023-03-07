import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrap>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
