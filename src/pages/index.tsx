import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Table from '../components/table';
import data from '../data/data.json';

const MainPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <p>
      2021年7月23日に行われる 第6回 Crazy Raccoon Cup Apex Legends
      の事前練習カスタム (スクリム) の試合結果一覧です。
    </p>
    <p className="note">
      「CRキル数」はCR選手 (Ras, Selly, Zeder, Mondo, Cpt)
      に確定キルを入れた数です。確定キル1つにつきキルポイントとは別に2ポイント加算されます。
    </p>
    {data.reverse().map((day) => {
      return (
        <>
          <h2>{day.day}</h2>
          <Table result={day.matches}></Table>
        </>
      );
    })}
  </Layout>
);

export default MainPage;
