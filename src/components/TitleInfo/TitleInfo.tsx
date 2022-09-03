import React from 'react';
import Image from 'next/image';

import {
  ReadOutlined,
  LikeOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from '@ant-design/icons';

import './TitleInfo.css';
import Tag from '../Common/Tag/Tag';
import ButtonPrimary from '../Common/ButtonPrimary/ButtonPrimary';
import ButtonIcon from '../Common/ButtonIcon/ButtonIcon';

interface Props {
  data: {
    name: string;
    author: string;
    type: string;
    tags: string[];
    totalChapters: number;
    totalView: number;
    totalLike: number;
    coverImage: string;
  };
}

const TitleInfo = (props: Props) => {
  const { data } = props;
  return (
    <div className="titleInfoWrapper">
      <img
        src={data.coverImage}
        alt="Cover Image"
        style={{
          width: '180px',
          height: '270px',
          objectFit: 'cover',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
        }}
      />

      <div className="titleInfoWrapper__content">
        <div className="h2--medium">{data.name}</div>
        <div className="h5--regular">By {data.author}</div>
        <div className="h5--regular">
          {data.type} • {data.totalChapters} Chapters
        </div>
        <div>
          <span>
            <ReadOutlined /> {data.totalView.toLocaleString('en-US')}
          </span>
          <span style={{ marginLeft: '16px' }}>
            <LikeOutlined /> {data.totalLike.toLocaleString('en-US')}
          </span>
        </div>

        <div
          style={{ marginTop: '24px', display: 'flex', alignItems: 'center' }}
        >
          {data.tags.map((item, idx) => (
            <div key={idx} style={{ marginRight: '8px' }}>
              <Tag text={item} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <ButtonPrimary text="Read First Chapter for FREE" />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '8px' }}>
          <ButtonIcon icon={<ShareAltOutlined />} />
        </div>
        <div>
          <ButtonIcon icon={<MoreOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default TitleInfo;
