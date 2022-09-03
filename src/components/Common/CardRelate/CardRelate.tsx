import Image from 'next/image';
import React from 'react';

import './CardRelate.css';

type Props = {
  name: string;
  image: string;
  type: string;
  totalViews: string;
  author: string;
};

function CardRelate(props: Props) {
  return (
    <div className="cardRelateWrapper">
      <img
        src={props.image}
        style={{
          width: '80px',
          height: '120px',
          borderRadius: '10px',
          objectFit: 'cover',
        }}
      />
      <div style={{ flex: 1, marginLeft: '24px' }}>
        <div
          className="h5--medium"
          style={{ textTransform: 'capitalize', cursor: 'pointer' }}
        >
          {props.name}
        </div>
        <div
          className="text--medium"
          style={{
            color: '#844CFF',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/assets/extra.png"
            alt="coin"
            style={{ width: '16px', height: '16px', marginRight: '8px' }}
          ></img>
          <span>{props.type}</span>
        </div>
        <div
          className="text--regular"
          style={{ color: 'rgba(255, 255, 255, 0.45)' }}
        >
          {props.author}
        </div>
        <div
          className="text--regular"
          style={{ color: 'rgba(255, 255, 255, 0.45)' }}
        >
          {props.totalViews} reads
        </div>
      </div>
    </div>
  );
}

export default CardRelate;
