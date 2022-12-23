/*
 * @Descripttion: 代码书写✍️
 * @version:
 * @Author: 陈
 * @Date: 2022-08-10 16:52:29
 * @LastEditors: Andy
 * @LastEditTime: 2022-09-16 09:29:54
 */
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  InputNumber,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Icon,
  Menu,
  Submenu,
  MenuItem,
  Badge,
  Tooltip,
  ColorPicker,
  Popover,
  Table,
  TableColumn,
  Row,
  Col,
} from "element-ui";
const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Dropdown);
    Vue.use(DropdownMenu);
    Vue.use(DropdownItem);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Select);
    Vue.use(Option);
    Vue.use(InputNumber);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Aside);
    Vue.use(Main);
    Vue.use(Footer);
    Vue.use(Icon);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItem);
    Vue.use(Badge);
    Vue.use(Tooltip);
    Vue.use(ColorPicker);
    Vue.use(Popover);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Row);
    Vue.use(Col);
    Vue.prototype.$message = Message;
  },
};
export default element;
