import React, { useState, useEffect } from 'react';
import { MenuProps, Layout, Form, Table, Button } from 'antd';
import moment, { Moment } from 'moment';

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import * as Styled from './styles';

import estimateOptionList from './EstimateOptionList';
import { List, FormItem } from '../../models/estimation';
import { columns, LOGOUT_MESSAGE, salesTypeOptionList } from './constants';
import { LOCAL_STORAGE_KEY } from '../Login/constants';
import ButtonGroup from 'antd/lib/button/button-group';
import { useNavigate } from 'react-router';

const data1: List[] = Array.from({ length: 10 }).map((_, index) => ({
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
}));

const data2: List[] = Array.from({ length: 10 }).map((_, index) => ({
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
}));

const data: Array<List> = [...data1, ...data2];

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const getData = async (params?: {
  name?: string;
  estimatedateStDt?: Moment;
  estimatedateEndDt?: Moment;
  gender?: string;
  birthday?: string;
  phoneNumber?: string;
  salesType?: string;
  detail?: string;
}) => {
  await setTimeout(() => {}, 1000);
  let d: Array<List> = [];
  d = data;
  if (params?.name) {
    d = d.filter(({ name }) => name === params.name);
  }
  if (params?.estimatedateStDt && params.estimatedateEndDt) {
    d = d.filter(({ estimateDate }) =>
      moment(estimateDate).isBetween(
        params?.estimatedateStDt,
        params?.estimatedateEndDt,
      ),
    );
  }
  if (params?.gender) {
    d = d.filter(({ gender }) => gender === params.gender);
  }
  if (params?.birthday) {
    d = d.filter(({ birthday }) => birthday === params.birthday);
  }
  if (params?.phoneNumber) {
    d = d.filter(({ phoneNumber }) => phoneNumber === params.phoneNumber);
  }
  if (params?.salesType) {
    d = d.filter(({ salesType }) => salesType === params.salesType);
  }
  if (params?.detail) {
    d = d.filter(({ detail }) => detail === params.detail);
  }

  return d;
};

const EstimationManager: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [listData, setListData] = useState<Array<List>>([]);

  useEffect(() => {
    try {
      setTimeout(() => {
        getData().then(res => setListData(res));
      }, 1000);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (form: List) => {};

  const handleLogout: () => void = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    alert(LOGOUT_MESSAGE);
    navigate('/');
  };

  return (
    <Layout>
      <Styled.NavContainer>
        <Styled.NavList mode="inline" items={items2} />
        <Button onClick={handleLogout}>logout</Button>
      </Styled.NavContainer>
      <Styled.ContentWrap>
        <Styled.HeaderStyle>견적관리</Styled.HeaderStyle>
        <Layout>
          <Form
            onFinish={handleSubmit}
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 10 }}
          >
            {estimateOptionList.map((data: FormItem) => {
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
