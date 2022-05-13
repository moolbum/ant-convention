import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Layout, Form, Table, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import * as Styled from './styles';
import estimateOptionList from './EstimateOptionList';
import { columns, LOGOUT_MESSAGE, DATE_FORMAT } from './constants';
import { LOCAL_STORAGE_KEY } from '../Login/constants';
import {
  EstimationOption,
  EstimationVO,
  EstimationFilterForm,
} from '../../models/estimation';
import moment from 'moment';

const data1: Array<EstimationVO> = Array.from({ length: 10 }).map(
  (_, index) => ({
    key: index,
    index,
    estimateDate: '22/05/12 10:50',
    expirationDate: '22/05/20',
    name: '데일',
    gender: '남',
    birthday: '94/06/10',
    phoneNumber: '01080293907',
    salesType: '당일배송',
    detail: '상세보기',
  }),
);

const data2: Array<EstimationVO> = Array.from({ length: 10 }).map(
  (_, index) => ({
    key: index,
    index,
    estimateDate: '22/05/10 15:00',
    expirationDate: '22/05/24',
    name: '다니엘',
    gender: '남',
    birthday: '88/10/2',
    phoneNumber: '01024744286',
    salesType: 'Direct',
    detail: '상세보기',
  }),
);

const data3: Array<EstimationVO> = Array.from({ length: 10 }).map(
  (_, index) => ({
    key: index,
    index,
    estimateDate: '22/05/10 15:00',
    expirationDate: '22/05/24',
    name: '법사',
    gender: '여',
    birthday: '89/10/2',
    phoneNumber: '01062424286',
    salesType: '빠른배송',
    detail: '상세보기',
  }),
);

const data: Array<EstimationVO> = [...data1, ...data2, ...data3];

const fetchEstimations = async (params?: EstimationFilterForm) => {
  await setTimeout(() => {}, 1000);
  let d: Array<EstimationVO> = [];
  d = data;

  console.log(params?.salesType);

  if (params?.estimatedateStDt && params.estimatedateEndDt) {
    d = d.filter(({ estimateDate }) => {
      const stDt = moment(params.estimatedateStDt, DATE_FORMAT);
      const endDt = moment(params.estimatedateEndDt, DATE_FORMAT);
      return moment(estimateDate, DATE_FORMAT).isBetween(stDt, endDt);
    });
  }
  if (params?.name) {
    d = d.filter(({ name }) => name === params.name);
  }
  if (params?.phoneNumber) {
    d = d?.filter(({ phoneNumber }) =>
      phoneNumber?.includes(params.phoneNumber),
    );
  }
  if (params?.salesType) {
    if (params?.salesType === '') {
      d = d.filter(({ salesType }) => salesType !== params.salesType);
    }
    d = d.filter(({ salesType }) => salesType === params.salesType);
  }
  return d;
};

const EstimationManager: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [listData, setListData] = useState<Array<EstimationVO>>([]);
  const [form] = useForm<EstimationFilterForm>();

  useEffect(() => {
    try {
      setTimeout(() => {
        fetchEstimations().then(res => setListData(res));
      }, 1000);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = ({
    estimateDate,
    name,
    phoneNumber,
    salesType,
  }: EstimationFilterForm) => {
    fetchEstimations({
      estimatedateStDt: estimateDate && estimateDate[0].format(DATE_FORMAT),
      estimatedateEndDt: estimateDate && estimateDate[1].format(DATE_FORMAT),
      name,
      phoneNumber,
      salesType,
    }).then(res => {
      setListData(res);
    });
  };

  const handleLogout: () => void = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
    alert(LOGOUT_MESSAGE);
    navigate('/');
  }

  return (
    <Layout>
      <Styled.NavContainer>
        <Button onClick={handleLogout}>logout</Button>
      </Styled.NavContainer>
      <Styled.ContentWrap>
        <Styled.HeaderStyle>견적관리</Styled.HeaderStyle>
        <Layout>
          <Form
            form={form}
            onFinish={handleSubmit}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 10 }}
          >
            {estimateOptionList.map((data: EstimationOption) => {
              return (
                <Form.Item key={data.id} name={data.name} label={data.label}>
                  {data.formItem}
                </Form.Item>
              );
            })}
            <Button htmlType="submit">검색하기</Button>
          </Form>
        </Layout>
        <Styled.MainContent>
          <Styled.HeaderStyle>견적리스트</Styled.HeaderStyle>
          <Table loading={loading} columns={columns} dataSource={listData} />
        </Styled.MainContent>
      </Styled.ContentWrap>
    </Layout>
  );
};

export default EstimationManager;
