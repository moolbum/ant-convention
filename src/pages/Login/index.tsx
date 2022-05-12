import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { UserOutlined } from '@ant-design/icons';
import * as Styled from './styles';
import { Form } from 'antd';
import {
  LOCAL_STORAGE_KEY,
  ID_PLACEHOLDER,
  PWD_PLACEHOLDER,
  ID_ERROR_MESSAGE,
  PWD_ERROR_MESSAGE,
  ID_SUCCESE_MESSAGE,
} from './constants';

const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [form] = Form.useForm();

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      navigate('/estimation-manager');
    }
  }, []);

  const handleSubmit = async () => {
    const values = await form.validateFields();
    localStorage.setItem(LOCAL_STORAGE_KEY, values.id);
    alert(ID_SUCCESE_MESSAGE);
    navigate('/estimation-manager');
  };

  const handleCheck = (field: string) => {
    form
      .validateFields([field])
      .then(() => {
        setIsValid(true);
      })
      .catch(() => setIsValid(false));
  };

  return (
    <Styled.Container>
      <Styled.Logo>Logo</Styled.Logo>
      <Styled.FormWrap form={form} onFinish={handleSubmit}>
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              type: 'email',
              message: ID_ERROR_MESSAGE,
            },
          ]}
        >
          <Styled.InputId
            onChange={() => handleCheck('id')}
            size="large"
            type="text"
            placeholder={ID_PLACEHOLDER}
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: PWD_ERROR_MESSAGE,
              pattern: passwordRegExp,
            },
          ]}
        >
          <Styled.InputPassword
            onChange={() => handleCheck('password')}
            name="password"
            size="large"
            type="password"
            placeholder={PWD_PLACEHOLDER}
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <div>
          <Styled.SubmitButton
            htmlType="submit"
            onClick={handleSubmit}
            disabled={!isValid}
          >
            로그인
          </Styled.SubmitButton>
          <Link to={'/signup'}>
            <Styled.SubmitButton>회원가입</Styled.SubmitButton>
          </Link>
        </div>
      </Styled.FormWrap>
    </Styled.Container>
  );
};

export default Login;
