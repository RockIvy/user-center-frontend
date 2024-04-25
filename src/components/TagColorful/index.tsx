import styles from './index.less';
import { Tag } from 'antd';

export default () => (
  <div className={styles.container}>
    <div id="components-tag-demo-colorful">
      <div>
        <div>
          <Tag color="magenta">最新</Tag>
          <Tag color="red">热门</Tag>
          <Tag color="volcano">二手交易</Tag>
          <Tag color="orange">美食</Tag>
          <Tag color="gold">交友</Tag>
          <Tag color="lime">考研</Tag>
          <Tag color="green">游戏</Tag>
          <Tag color="cyan">美景</Tag>
          <Tag color="blue">学习</Tag>
          <Tag color="geekblue">AI</Tag>
          <Tag color="purple">笔记</Tag>
        </div>
      </div>
    </div>
  </div>
);
