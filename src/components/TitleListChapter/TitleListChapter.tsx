import React from 'react';
import { BellOutlined, SortAscendingOutlined } from '@ant-design/icons';

import ButtonIcon from '../Common/ButtonIcon/ButtonIcon';
import CardChapter from '../Common/CardChapter/CardChapter';

import './TitleListChapter.css';

type Chapter = {
  name: string;
  link: string;
  chapterImage: string;
  isFree: boolean;
  lastRead?: {
    hasRead: boolean;
    readProcess: number;
    lastReadAt: string;
  };
};

type Props = {
  data: {
    chapters: Chapter[];
    freeChapters: number;
    costEachChap: number;
  };
};

const TitleListChapter = (props: Props) => {
  const { data } = props;
  const lastReadList = data.chapters.filter((chapter) => chapter.lastRead);

  console.log(lastReadList);

  return (
    <div className="listChaperWrapper">
      <div className="h4--medium" style={{ padding: '24px 0 0 24px' }}>
        Last read
      </div>
      <div
        style={{
          margin: '10px 12px 0 10px',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {lastReadList.length > 0 &&
          lastReadList.map((chapter, idx) => (
            <div key={idx}>
              <CardChapter
                chapter={chapter}
                isFree={chapter.isFree}
                isInLastRead={true}
              />
            </div>
          ))}
      </div>

      <div
        style={{
          padding: '24px 24px 0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div className="h4--medium">{data.chapters.length} Chapters</div>
          <div className="text--regular" style={{ opacity: '0.8' }}>
            New chapter every Thursday
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '8px' }}>
            <ButtonIcon icon={<BellOutlined />} />
          </div>
          <div>
            <ButtonIcon icon={<SortAscendingOutlined />} />
          </div>
        </div>
      </div>

      <div style={{ padding: '8px 0 16px 0' }}>
        {data.chapters.map((chapter, idx) => (
          <div key={idx}>
            <CardChapter
              chapter={chapter}
              isFree={chapter.isFree}
              isInLastRead={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleListChapter;
