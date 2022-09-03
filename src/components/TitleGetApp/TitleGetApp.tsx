import React from 'react';

type Props = {};

const TitleGetApp = (props: Props) => {
  return (
    <div
      style={{
        padding: '24px',
        background: '#141414',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>
        <div className="h5--medium">Get The App</div>
        <div className="h5--medium">
          Love this title? Scan the QR code to continue reading right on your
          mobile devices.
        </div>
      </div>
      <img
        src="/assets/qrcode.png"
        alt="QR-Code"
        style={{ width: '116px', height: '116px' }}
      />
    </div>
  );
};

export default TitleGetApp;
