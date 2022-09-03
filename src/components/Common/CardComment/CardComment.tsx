import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react';

import './CardComment.css';

type Props = {
  comment: {
    by: string;
    commentOn: string;
    commentAt: string;
    avatar: string;
    commentText: string;
    totalLike: number;
    totalComment: number;
  };
};

const CardComment = (props: Props) => {
  return (
    <div className="cardCommentWrapper">
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <img
          src={props.comment.avatar}
          alt="Default Avatar"
          style={{ width: '32px', height: '32px', borderRadius: '50%' }}
        />

        <div style={{ marginLeft: '16px' }}>
          <div>
            <span
              className="text--regular"
              style={{ color: 'rgba(255, 255, 255, 0.45)' }}
            >
              {props.comment.by}
            </span>
            <span
              style={{ marginLeft: '8px', fontSize: '11px' }}
              className="text--small"
            >
              Commented on {props.comment.commentOn} • {props.comment.commentAt}
            </span>
          </div>
          <div className="text--regular">
            I had no idea such a sequel was coming as I thought the show had
            ended and Kyoto Animation took a hard hit from the tragedy but
            currently 4 episodes in as of writing this review, and I love every
            second of it.
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <LikeOutlined /> <span>{props.comment.totalLike}</span>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <MessageOutlined /> <span>{props.comment.totalComment}</span>
              </div>
              <div style={{ marginLeft: '10px' }} className="text--medium">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
