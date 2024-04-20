import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { PLANTE_LINK } from '@/constants';
const Footer: React.FC = () => {
  const defaultMessage = 'ivy出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANTE_LINK,
          blankTarget: true,
        },
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
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
