import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography } from 'antd';
import React from 'react';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);
const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'Hi，最近还好吗？'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a href="" rel="noopener noreferrer" target="__blank">
            欢迎来到MYA Pulse !!!
          </a>
        </Typography.Text>
        <img src={'/beat.svg'} />
      </Card>
    </PageContainer>
  );
};
export default Welcome;
