import Vue from 'vue'
import {
  DatePicker,
  Row,
  Col,
  Container,
  Header,
  Main,
  Loading,
  Icon,
  Table,
  TableColumn,
  MessageBox,
  Notification,
  Message
} from 'element-ui'

Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
