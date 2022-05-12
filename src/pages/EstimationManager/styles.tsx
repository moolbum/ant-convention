import styled from 'styled-components';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

export const NavContainer = styled(Sider)`
  background-color: #ffffff;
`;

export const NavList = styled(Menu)`
  height: '100%';
  border-right: 0;
`;

export const HeaderStyle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 10px;
`;

export const ContentWrap = styled(Layout)`
  padding: 0 24px 24px 24px;
`;

export const MainContent = styled(Content)`
  padding: 24;
  margin: 20px 10px;
  min-height: 280;
  background-color: #ffffff;
`;
