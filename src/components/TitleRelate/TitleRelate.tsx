import React from 'react';
import CardRelate from '../Common/CardRelate/CardRelate';

import './TitleRelate.css';

type RelateTitle = {
  name: string;
  image: string;
  type: string;
  totalViews: string;
  author: string;
};

type Props = {
  data: {
    relateTitles: RelateTitle[];
  };
};

const TitleRelate = (props: Props) => {
  return (
    <div className="relateWrapper" style={{ padding: '24px 0' }}>
      <div className="h4--medium" style={{ padding: '0 24px' }}>
        Relate Title
      </div>
      <div style={{ marginTop: '1rem' }}>
        {props.data.relateTitles.length > 0 &&
          props.data.relateTitles.map((relate, idx) => (
            <div key={idx}>
              <CardRelate
                name={relate.name}
                image={relate.image}
                type={relate.type}
                totalViews={relate.totalViews}
                author={relate.author}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TitleRelate;
