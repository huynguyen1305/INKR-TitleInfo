import { SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import ButtonPrimary from '../Common/ButtonPrimary/ButtonPrimary';
import CardComment from '../Common/CardComment/CardComment';

import './TitleComment.css';

type Comment = {
  totalComment: number;
  lastedComment: {
    by: string;
    avatar: string;
    commentOn: string;
    commentAt: string;
    commentText: string;
    totalLike: number;
    totalComment: number;
  };
};

type Props = {
  data: {
    comments: Comment;
  };
};

const TitleComment = (props: Props) => {
  const { data } = props;
  return (
    <div className="commentWrapper">
      <div className="h5--medium">{data.comments.totalComment} comments</div>
      <div style={{ margin: '16px 0' }}>
        <CardComment comment={data.comments.lastedComment} />
      </div>

      <div
        style={{ display: 'flex', alignItems: 'flex-start', marginTop: '28px' }}
      >
        <img
          src="/assets/comment-avatar.png"
          alt="Default Avatar"
          style={{ width: '32px', height: '32px', borderRadius: '50%' }}
        />
        <div style={{ marginLeft: '12px', flex: '1' }}>
          <Input placeholder="Add your comment" className="comment__input" />
          <div style={{ marginTop: '24px' }}>
            <ButtonPrimary
              text="Add Comment"
              icon={<SendOutlined style={{ marginRight: '8px' }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleComment;
