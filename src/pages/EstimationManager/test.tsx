import React, { useState, useEffect } from 'react';
import { Layout, Form, Table, Button } from 'antd';
import moment from 'moment';

import * as Styled from './styles';

import estimateOptionList from './EstimateOptionList';
import { FormItem } from '../../models/estimation';
import { columns } from './constants';
import {
  EstimationFilterForm,
  EstimationVO,
  GetEstimationsRequestParams,
} from '../../models/test';
import { useForm } from 'antd/lib/form/Form';

const data1 = Array.from({ length: 10 }).map((_, index) => ({
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

const data2 = Array.from({ length: 10 }).map((_, index) => ({
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

const data = [...data1, ...data2];

const EstimationManager: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [listData, setListData] = useState<Array<EstimationVO>>([]);

  const [form] = useForm<EstimationFilterForm>();

  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        fetchEstimations().then(res => setListData(res));
      }, 1000);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = ({
    discount,
    estimateDate,
    estimateStatus,
    estimateType,
    modelName,
    name,
    phoneNumber,
    salesType,
  }: EstimationFilterForm) => {
    fetchEstimations({
      name,
      estimatedateStDt:
        estimateDate && estimateDate[0].format('YY/MM/DD HH:mm'),
      estimatedateEndDt:
        estimateDate && estimateDate[1].format('YY/MM/DD HH:mm'),
      phoneNumber,
      salesType,
    }).then(res => {
      setListData(res);
    });
  };

  return (
    <Layout>
      <Styled.NavContainer>
        <Styled.NavList mode="inline" />
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

const dateFormat = 'YY/MM/DD HH:mm';

const fetchEstimations = async (params?: GetEstimationsRequestParams) => {
  await setTimeout(() => {}, 1000);
  let d: Array<EstimationVO> = [];
  d = data;
  if (params?.name) {
    d = d.filter(({ name }) => name === params.name);
  }
  if (params?.estimatedateStDt && params.estimatedateEndDt) {
    d = d.filter(({ estimateDate }) => {
      const stDt = moment(params.estimatedateStDt, dateFormat);
      const endDt = moment(params.estimatedateEndDt, dateFormat);
      console.log(stDt, endDt);
      return moment(estimateDate, dateFormat).isBetween(stDt, endDt);
    });
  }
  if (params?.phoneNumber) {
    d = d.filter(({ phoneNumber }) =>
      phoneNumber.includes(params.phoneNumber!),
    );
  }
  if (params?.salesType) {
    d = d.filter(({ salesType }) => salesType === params.salesType);
  }

  return d;
};
