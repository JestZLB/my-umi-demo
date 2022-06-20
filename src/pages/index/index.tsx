import system from '@/models/system';
import { connect, history, useSelector } from 'umi';
import styles from './index.less';
import { useState, FC } from 'react';
import { Layout, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import type { MenuProps } from 'antd';
import './index.less'
import { HomeOutlined, SearchOutlined, ShareAltOutlined } from '@ant-design/icons';

const Index:React.FC<{}> = (props)=> {
  const data = useSelector((store: any) => store.system.myname);
  const menuProps: MenuProps['items'] = [{
    label: "主页",
    key: "home",
    itemIcon: <HomeOutlined />
  },
  {
    label: "发现",
    key: "search",
    itemIcon: <SearchOutlined />
  },
  {
    label: "分享",
    key: "share",
    itemIcon: <ShareAltOutlined />
  }

  ]
  const [current, setCurrent] = useState('home');

  const activeBtn:MenuProps['onClick'] = (e) =>{
    setCurrent(e.key);
    history.push(`/${e.key}`)
  }
  return (
    <div className='home'>
      <Layout>
        <Header className='header'>
          <Menu items={menuProps} className="header-ul" selectedKeys={[current]} onClick={(e)=>{activeBtn(e)}}></Menu>
        </Header>
      </Layout>
      <div>{props.children}</div>
    </div>
  );
}

export default Index