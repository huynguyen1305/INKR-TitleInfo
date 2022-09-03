import React from 'react';

import './ButtonPrimary.css';

type Props = {
  text: string;
  icon?: React.ReactNode;
};

const ButtonPrimary = (props: Props) => {
  const { text, icon } = props;
  return (
    <div className="buttonPrimaryWrapper">
      {icon && <span>{icon}</span>}
      {text}
    </div>
  );
};

export default ButtonPrimary;
