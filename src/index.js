import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import SimpleList from './List';
// import Contact from './contact'
import MyCamare from './MyCamare';
import MyYunZhuJi from './MyYunZhuJi';
import Zhuce from './Zhuce';
import UserInfo from './UserInfo';
import YuYue from './YuYue';
import YuYueBuMen from './YuYueBuMen';
import ZhiNan from './ZhiNan';
import ZhiNanBanShi from './ZhiNanBanShi';
import YuYueQuXiao from './YuYueQuXiao';
import TouPiao from './TouPiao';
import YuYueXuZhi from './YuYueXuZhi';
import YuYueLieBiao from './YuYueLieBiao';
import HuDongJiaoLiu from './HuDongJiaoLiu';
import HudongJiaoLiuNeiRong from './HudongJiaoLiuNeiRong';
import TieTa from './TieTa';
import TieTaZhuChe from './TieTaZhuChe';
import DingCanManage from  './DingCanManage';
import QingYangKouZhaoYuYue from './QingYangKouZhaoYuYue';
import ShiShengTiSu from './ShiShengTiSu';
import ShiShengXinZhuang from './ShiShengXinZhuang';
var myOtherUrl =  encodeURIComponent("https://oa.wuminmin.top/a/");

const routing = (
  <Router>
    <div>
      <Route path="/a" component={App} />
      <Route path='/zc.html' component={() => { window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7cafde0331f7a72b&redirect_uri='+myOtherUrl+'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'; return null;} }/>
      {/* <Route path="/zc.html" component={Users} /> */}
      <Route path="/contact" component={SimpleList} />
      <Route path="/myCamare" component={MyCamare} />
      <Route path="/gly.html" component={MyYunZhuJi} />
      <Route path="/zhuce" component={Zhuce} />
      <Route path="/userInfo" component={UserInfo} />
      <Route path="/yuyue" component={YuYue} />
      <Route path="/yuyue_bu_men" component={YuYueBuMen} />
      <Route path="/zhinan" component={ZhiNan} />
      <Route path="/zhinan_ban_shi" component={ZhiNanBanShi} />
      <Route path="/yuyue_qu_xiao" component={YuYueQuXiao} />
      <Route path="/tou_piao" component={TouPiao} />
      <Route path="/yuyuexuzhi" component={YuYueXuZhi} />
      <Route path="/yuyueliebiao" component={YuYueLieBiao} />
      <Route path="/hudongjiaoliu" component={HuDongJiaoLiu} />
      <Route path="/hudongjiaoliuneirong" component={HudongJiaoLiuNeiRong} />
      <Route path="/tieta" component={TieTa} />
      <Route path="/tietazhuche" component={TieTaZhuChe} />
      <Route path="/dingCanManage" component={DingCanManage}/>
      <Route path="/qingYangKouZhaoYuYue" component={QingYangKouZhaoYuYue}/>
      <Route path="/shi_sheng_ti_su" component={ShiShengTiSu}/>
      <Route path="/shi_sheng_xin_zhuang" component={ShiShengXinZhuang}/>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))