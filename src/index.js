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
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))