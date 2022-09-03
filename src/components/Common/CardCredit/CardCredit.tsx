import React from 'react';

type Props = { name: string; role: string; avatar: string };

const CardCredit = (props: Props) => {
  const { name, role, avatar } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={avatar}
        alt="avatar-credits"
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
      <div style={{ marginLeft: '10px' }}>
        <div className="text--regular">{name}</div>
        <div className="text--small">{role}</div>
      </div>
    </div>
  );
};

export default CardCredit;
