import React from 'react';

import './ButtonIcon.css';

type Props = {
  icon: React.ReactNode;
};

const ButtonIcon = (props: Props) => {
  const { icon } = props;
  return <div className="buttonIconWrapper">{icon}</div>;
};

export default ButtonIcon;
