import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import SimpleList from './List'
// import Contact from './contact'
import MyCamare from './MyCamare'
import MyYunZhuJi from './MyYunZhuJi'
import Zhuce from './Zhuce'
import UserInfo from './UserInfo'
import YuYue from './YuYue'
import YuYueBuMen from './YuYueBuMen'
import ZhiNan from './ZhiNan'
import ZhiNanBanShi from './ZhiNanBanShi'
import YuYueQuXiao from './YuYueQuXiao'
import TouPiao from './TouPiao'
import YuYueXuZhi from './YuYueXuZhi'
import YuYueLieBiao from './YuYueLieBiao'
import HuDongJiaoLiu from './HuDongJiaoLiu'
import TieTa from './TieTa'
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
      <Route path="/tieta" component={TieTa} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))