import styled from 'styled-components';
import { Form, Input, Layout, Button } from 'antd';

export const Container = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  background-color: #ffffff;
`;

export const Logo = styled.h1`
  font-size: 42px;
  font-weight: 700;
`;

export const FormWrap = styled(Form)`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const InputId = styled(Input)`
  margin: 10px 0;
`;

export const InputPassword = styled(Input)`
  margin: 10px 0;
`;

export const NoticeText = styled.p`
  font-size: 12px;
  color: red;
`;

export const SubmitButton = styled(Button)`
  margin: 10px 4px;
`;
