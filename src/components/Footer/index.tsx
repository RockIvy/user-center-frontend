import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'ivy出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        // {
        //   key: 'planet',
        //   title: '知识星球',
        //   href: PLANTE_LINK,
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 我的 Github{' '}
            </>
          ),
          href: 'https://github.com/RockIvy',
          blankTarget: true,
        },
        {
          key: 'beian',
          title: '鲁ICP备2024089366号',
          href: 'https://beian.miit.gov.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
