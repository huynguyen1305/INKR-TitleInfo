import React from 'react';
import { Col, Layout, Row, Space } from 'antd';

import { withRouter, NextRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import TitleInfo from '../TitleInfo/TitleInfo';
import TitlePricing from '../TitlePricing/TitlePricing';
import TitleListChapter from '../TitleListChapter/TitleListChapter';
import TitleAbout from '../TitleAbout/TitleAbout';
import TitleRelate from '../TitleRelate/TitleRelate';
import TitleComment from '../TitleComment/TitleComment';
import TitleGetApp from '../TitleGetApp/TitleGetApp';

import './Layout.css';

interface Router extends NextRouter {
  path: string;
  breadcrumbName: string;
}

interface Props extends WithRouterProps {
  router: Router;
}

const AppLayout = (props: React.PropsWithChildren<Props>) => {
  const dataTitle = {
    name: 'Kasane',
    author: 'Kodansha',
    type: 'Drama',
    totalView: 74483,
    totalLike: 15863,
    tags: ['18+', 'NEW', 'TRENDING', 'BESTSELLER', 'MANGA'],
    genres: ['Horror', 'Psychological', 'Seinen'],
    coverImage: '/assets/coverImage.png',
    freeChapter: 3,
    costEachChap: 5,
    discount: 50,
    summary: `Kasane is an ugly girl who is severely bullied by her classmates because of her appearance; making things worse, Kasane's mother was a beautiful actress to whom Kasane is a dark contrast, even though she is as talented as her mother. However, there is nothing to do with this.`,
    chapters: [
      {
        name: 'Chapter 1',
        link: 'chapter-1',
        chapterImage: '/assets/card-image.png',
        isFree: true,
        lastRead: {
          hasRead: true,
          readProcess: 60,
          lastReadAt: 'Last read 2 days ago',
        },
      },
      {
        name: 'Chapter 2',
        link: 'chapter-2',
        chapterImage: '/assets/card-image.png',
        isFree: true,
        lastRead: null,
      },
      {
        name: 'Chapter 3',
        link: 'chapter-3',
        chapterImage: '/assets/card-image.png',
        isFree: true,
        lastRead: null,
      },
      {
        name: 'Chapter 4',
        link: 'chapter-4',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
      {
        name: 'Chapter 5',
        link: 'chapter-5',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
      {
        name: 'Chapter 6',
        link: 'chapter-6',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
      {
        name: 'Chapter 7',
        link: 'chapter-7',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
      {
        name: 'Chapter 8',
        link: 'chapter-8',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
      {
        name: 'Chapter 9',
        link: 'chapter-9',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
      {
        name: 'Chapter 10',
        link: 'chapter-10',
        chapterImage: '/assets/card-image.png',
        isFree: false,
        lastRead: null,
      },
    ],
    credits: [
      { name: 'Kodansha', role: 'Publisher', avatar: '/assets/default.png' },
      {
        name: 'Johnnie Christmas',
        role: 'Story',
        avatar: '/assets/default-1.png',
      },
      { name: 'Jack T. Cole', role: 'Art', avatar: '/assets/default-2.png' },
    ],
    imageListAbout: [
      '/assets/about1.png',
      '/assets/about2.png',
      '/assets/about3.png',
      '/assets/about4.png',
      '/assets/about5.png',
    ],
    lastUpdate: '2 days ago',
    ageRating: 'Mature (18+)',
    color: 'Black & White',
    originMedia: 'Print',
    styleOrigin: 'Japanese Comics (Manga)',
    copyRight: '© Daruma Matsuura / Kodansha Ltd.',
    otherName: 'Kasane -voleuse de visage',
    relateTitles: [
      {
        name: 'title name 1',
        image: '/assets/relateManga.png',
        type: 'EXCLUSIVE',
        totalViews: '45.6k',
        author: 'PREQUEL',
      },
      {
        name: 'title name 2',
        image: '/assets/relateManga.png',
        type: 'EXCLUSIVE',
        totalViews: '45.6k',
        author: 'PREQUEL',
      },
      {
        name: 'title name 3',
        image: '/assets/relateManga.png',
        type: 'EXCLUSIVE',
        totalViews: '45.6k',
        author: 'PREQUEL',
      },
    ],
    comments: {
      totalComment: 12,
      lastedComment: {
        by: 'Han Solo',
        commentOn: 'Chapter 35',
        commentAt: '24 min ago',
        commentText: `I had no idea such a sequel was coming as I thought the show had ended and Kyoto Animation took a hard hit from the tragedy but currently 4 episodes in as of writing this review, and I love every second of it.`,
        totalLike: 61,
        avatar: '/assets/default-avatar.png',
        totalComment: 12,
      },
    },
  };

  const dataInfo = {
    name: dataTitle.name,
    author: dataTitle.author,
    type: dataTitle.type,
    tags: dataTitle.tags,
    totalChapters: dataTitle.chapters.length,
    totalView: dataTitle.totalView,
    totalLike: dataTitle.totalLike,
    coverImage: dataTitle.coverImage,
  };

  const dataPricing = {
    freeChapters: dataTitle.freeChapter,
    costEachChap: dataTitle.costEachChap,
    discount: dataTitle.discount,
    totalChapters: dataTitle.chapters.length,
  };

  const dataListChapter = {
    chapters: dataTitle.chapters,
    freeChapters: dataTitle.freeChapter,
    costEachChap: dataTitle.costEachChap,
  };

  const dataAbout = {
    genres: dataTitle.genres,
    summary: dataTitle.summary,
    imageListAbout: dataTitle.imageListAbout,
    credits: dataTitle.credits,
    lastUpdate: dataTitle.lastUpdate,
    ageRating: dataTitle.ageRating,
    color: dataTitle.color,
    originMedia: dataTitle.originMedia,
    styleOrigin: dataTitle.styleOrigin,
    copyRight: dataTitle.copyRight,
    otherName: dataTitle.otherName,
  };

  const dataRelate = {
    relateTitles: dataTitle.relateTitles,
  };

  const dataComment = {
    comments: dataTitle.comments,
  };

  return (
    <Layout style={{ backgroundColor: 'black' }}>
      <Row
        gutter={{ lg: 32, xl: 32, xxl: 24 }}
        className="container"
        style={{ padding: '27px 0 31px 0' }}
      >
        <Col lg={{ span: 15 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
          <Space direction="vertical" size={24} style={{ width: '100%' }}>
            <TitleInfo data={dataInfo} />
            <TitlePricing data={dataPricing} />
            <TitleListChapter data={dataListChapter} />
          </Space>
        </Col>
        <Col lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
          <Space direction="vertical" size={24} style={{ width: '100%' }}>
            <TitleAbout data={dataAbout} />
            <TitleRelate data={dataRelate} />
            <TitleComment data={dataComment} />
            <TitleGetApp />
          </Space>
        </Col>
      </Row>
    </Layout>
  );
};

export default withRouter(AppLayout);
