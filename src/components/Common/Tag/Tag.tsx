import React from 'react';
import './Tag.css';

type Props = {
  text: string;
};

const Tag = (props: Props) => {
  const { text } = props;
  return <div className="tagWrapper">{text}</div>;
};

export default Tag;
