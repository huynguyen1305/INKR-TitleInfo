import { LockFilled, LockOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';

import cardChapterImage from '../../../public/assets/card-image.png';
import Money from '../Money/Money';

import './CardChapter.css';

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
  isFree: boolean;
  isInLastRead?: boolean;
  chapter: Chapter;
};

const CardChapter = (props: Props) => {
  const { isFree, chapter, isInLastRead } = props;
  // const readProcess = 90;

  return (
    <div className="cardChapterWrapper">
      <div
        style={{
          background: `url('/assets/card-image.png')`,
          width: '78px',
          height: '62px',
          borderRadius: '4px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {!isFree && (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `rgba(0, 0, 0, 0.6)`,
            }}
          >
            <div
              style={{
                background: 'white',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LockFilled style={{ color: 'black' }} />
            </div>
          </div>
        )}

        {chapter.lastRead && chapter.lastRead.readProcess > 0 && (
          <div
            style={{
              position: 'absolute',
              width: `${chapter.lastRead.readProcess}%`,
              bottom: 0,
              left: 0,
              height: '4px',
              background: 'yellow',
            }}
          ></div>
        )}
      </div>
      <div style={{ flex: '1', marginLeft: '12px' }}>
        <div className="text--regular">{chapter.name}</div>
        {isInLastRead && (
          <div className="text--small">{chapter.lastRead.lastReadAt}</div>
        )}
      </div>
      <div>
        {isFree ? (
          <div>{isInLastRead ? '' : 'FREE'}</div>
        ) : (
          <div
            style={{ display: 'flex', fontSize: '14px', alignItems: 'center' }}
          >
            <Money number={5} size={14} color="rgba(255, 255, 255, 0.65)" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardChapter;
