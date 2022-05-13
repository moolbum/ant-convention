import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { fetchEstimations } from '../EstimationManager';
import * as Styled from './styles';
import { EstimationVO } from '../../models/estimation';
import { details } from './constants';

const Detail: React.FC = () => {
  const params = useParams<string>();
  const [detailData, setDetailData] = useState<EstimationVO>();

  useEffect(() => {
    fetchEstimations().then(res => {
      params.user_id && setDetailData(res[Number(params.user_id)]);
    });
  }, [params.user_id]);

  return (
    <Layout>
      <Header style={{ background: '#ffffff' }}>
        <Styled.Title>상세페이지</Styled.Title>
      </Header>
      <Content style={{ background: '#ffffff' }}>
        {detailData && (
          <ul>
            <Styled.List>순서: {detailData.key}</Styled.List>
            <Styled.List>견적일시: {detailData.estimateDate}</Styled.List>
            <Styled.List>만료일: {detailData.expirationDate}</Styled.List>
            <Styled.List>회원명: {detailData.name}</Styled.List>
            <Styled.List>성별: {detailData.gender}</Styled.List>
            <Styled.List>생년월일: {detailData.birthday}</Styled.List>
            <Styled.List>휴대폰번호: {detailData.phoneNumber} </Styled.List>
            <Styled.List>판매유형: {detailData.salesType}</Styled.List>
          </ul>
        )}
        {/* {details.map(data => {
          return (
            <Styled.List key={data.id}>
              {data.title}: {data.value}
            </Styled.List>
          );
        })} */}
      </Content>
    </Layout>
  );
};

export default Detail;
