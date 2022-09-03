import Paragraph from 'antd/lib/typography/Paragraph';

import React from 'react';
import CardCredit from '../Common/CardCredit/CardCredit';
import Tag from '../Common/Tag/Tag';

import './TitleAbout.css';

type Credits = { name: string; role: string; avatar: string };

type Props = {
  data: {
    genres: string[];
    summary: string;
    imageListAbout: string[];
    credits: Credits[];
    lastUpdate: string;
    ageRating: string;
    color: string;
    originMedia: string;
    styleOrigin: string;
    copyRight: string;
    otherName: string;
  };
};

const TitleAbout = (props: Props) => {
  const [isExpand, setIsExpand] = React.useState(false);

  const { data } = props;
  return (
    <div
      className="aboutWrapper"
      style={{ padding: '24px', background: '#141414', borderRadius: '8px' }}
    >
      <div className="h4--medium">About This</div>
      <div
        className="h5--medium"
        style={{ color: 'rgba(255, 255, 255, 0.85)', marginTop: '12px' }}
      >
        Genres
      </div>
      <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
        {data.genres.length > 0 &&
          data.genres.map((genre, idx) => (
            <span key={idx} style={{ marginRight: '8px' }}>
              <Tag text={genre} />
            </span>
          ))}
      </div>

      <div className="h5--medium" style={{ margin: '22px 0 10px 0' }}>
        Summary
      </div>

      <Paragraph
        ellipsis={isExpand ? false : { rows: 4 }}
        style={{ color: 'rgba(255, 255, 255, 0.65)' }}
      >
        Kasane is an ugly girl who is severely bullied by her classmates because
        of her appearance; making things worse, Kasane's mother was a beautiful
        actress to whom Kasane is a dark contrast, even though she is as
        talented as her mother. However, there is nothing to do with this.
      </Paragraph>

      {isExpand && (
        <div style={{ marginTop: '16px' }}>
          <div className="about__listImage">
            {data.imageListAbout.length > 0 &&
              data.imageListAbout.map((image, idx) => (
                <img
                  src={image}
                  alt="about List"
                  className="listImage__item"
                  key={idx}
                />
              ))}
          </div>

          <div className="h5--medium" style={{ marginTop: '22px' }}>
            Credits
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {data.credits.length > 0 &&
              data.credits.map((credit, idx) => (
                <div key={idx} style={{ marginTop: '14px' }}>
                  <CardCredit
                    name={credit.name}
                    role={credit.role}
                    avatar={credit.avatar}
                  />
                </div>
              ))}
          </div>

          <div style={{ marginTop: '32px' }} className="h5--medium">
            Other Fact
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div>
              <span className="fact-key">Last Updated</span>:
              <span className="fact-value">{data.lastUpdate}</span>
            </div>
            <div>
              <span className="fact-key">Age Rating</span>:
              <span className="fact-value">{data.ageRating}</span>
            </div>
            <div>
              <span className="fact-key">Color</span>:
              <span className="fact-value">{data.color}</span>
            </div>
            <div>
              <span className="fact-key">Origin Media</span>:
              <span className="fact-value">{data.originMedia}</span>
            </div>
            <div>
              <span className="fact-key">Style Origin</span>:
              <span className="fact-value">{data.styleOrigin}</span>
            </div>
            <div>
              <span className="fact-key">Copyright</span>:
              <span className="fact-value">{data.copyRight}</span>
            </div>
            <div>
              <span className="fact-key">Other Name</span>:
              <span className="fact-value">{data.otherName}</span>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setIsExpand(!isExpand)}
        className="text--regular"
        style={{ textAlign: 'center', cursor: 'pointer' }}
      >
        Show {isExpand ? 'Less' : 'More'}
      </div>
    </div>
  );
};

export default TitleAbout;
