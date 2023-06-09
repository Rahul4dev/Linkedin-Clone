/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import LeftSide from './LeftSide';
import MainSide from './MainSide';
import RightSide from './RightSide';

import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      <Header />
      <Container>
        {!props.user && <Navigate to="/" />}
        <Section>
          <h5>
            <a>Hiring in a hurry? -</a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
        <Layout>
          <LeftSide />
          <MainSide />
          <RightSide />
        </Layout>
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 30px;
  max-width: 100%;
`;

// const Content = styled.div`
//   max-width: 1128px;
//   margin-left: auto;
//   margin-right: auto;
// `;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;

  h5 {
    color: #0a66c2;
    font-size: 18px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 18px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'left-side main right-side';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
