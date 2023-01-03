import { Settings as LayoutSettings } from '@ant-design/pro-components';
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '智码亿联办公系统',
  pwa: false,
  logo: 'http://wdm.wiki:5252/atc17-8ejsc.svg',
  iconfontUrl: '',
  headerHeight: 48,
  splitMenus: true
};

export default Settings;
