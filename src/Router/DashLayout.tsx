import React, { PropsWithChildren } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import { HighlightFilled } from "@ant-design/icons";

export default function DashLayout(props: PropsWithChildren<{}>) {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: 'today-music',
      icon: <HighlightFilled />,
      label: `每日音乐`,
      children: [

      ]
    }
  ]
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header
        style={{ padding: 0, width: '100%' }}>
        <Menu
          mode='horizontal'
          defaultSelectedKeys={["home"]}
          onClick={(e) => {
            navigate(`/dash/${e.key}`);
          }}
        >
          <Menu.Item key='home'>首页-计数器</Menu.Item>
          <Menu.Item key='test'>测试页面</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout>
        <Layout.Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
          />
        </Layout.Sider>
        <Layout.Content style={{ padding: "1em" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
