import React from 'react';

type Props = {
  number: number;
  size: number;
  isBold?: boolean;
  color?: string;
};

const Money = (props: Props) => {
  const { number, size, isBold, color } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/assets/coin.png" style={{ width: size, height: size }} />
      <span
        className={isBold && 'h5--bold'}
        style={{ marginLeft: '4px', color: color }}
      >
        {number}
      </span>
    </div>
  );
};

export default Money;
