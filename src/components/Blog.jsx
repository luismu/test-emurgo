import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';

import { Container,  SectionTitle, SectionSubTitleDark } from '../css';

const feeds = [
  {
    title: 'Metaps Plus and EMURGO Collaborate on Joint Launch of World’s First ADA CRYPTO CARD in South Korea',
    date: '11 Nov 2019',
    img: './assets/desk1.jpg',
  },
  {
    title: 'Regarding our relationship with EMURGO HK Limited',
    date: '6 Nov 2019',
    img: './assets/desk2.jpg',
  },
  {
    title: 'EMURGO to Hold Blockchain Hackathon in Partnership with Tokyo University of Science',
    date: '16 Oct 2019',
    img: './assets/desk3.jpg',
  },
];

const Date = styled.p `
  font-size: 14px;
  text-align: left;
  color: #8C8C8C;
  font-weight: 400;
  margin: 30 0 15 0;
`;

const BlogTitle = styled.p`
  font-size: 18px;
  text-align: left;
  color: #1D1E21;
  font-weight: 500;
`;

const FeedItem = styled.div`
  margin: 29 15;
`;

class Blog extends Component {
  render() {
    const _Blog = ({ intl: { formatMessage } }) => (
        <Container>
          <SectionTitle>{formatMessage({ id: 'home.blog.our-blog' })}</SectionTitle>
          <SectionSubTitleDark>{formatMessage({ id: 'home.blog.our-description' })}</SectionSubTitleDark>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingBottom: '23px',
            }}
          >
            {feeds.map((feed) => (
              <FeedItem key={feed.title}>
                <a target="_blank" href="https://emurgo.io/" style={{textDecoration: 'none'}}>
                  
                  <img src={feed.img} alt="Blog img" style={{maxWidth: '100%'}}/>
                  <Date>{feed.date}</Date>
                  <BlogTitle>{feed.title}</BlogTitle>
                </a>
              </FeedItem>
            ))}
          </div>
        </Container>
    );

    const Blog = inject('locale')(injectIntl(observer(_Blog)));

    return <Blog />;
  }
}

export default Blog;
