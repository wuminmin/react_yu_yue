import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import { ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Form,
  FormCell,
  Icon,
  Input,
  Label,
  TextArea,
  Switch,
  Radio,
  Checkbox,
  Select,
  VCode,
  Agreement,
  Toptips
} from 'react-weui';
import global from'./myconfig'
export default class TieTaZhuChe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            姓名:'',
            手机号:'',
            验证码:'',
            身份证号码:'',
            短信提示:'',
            access_token:'',
            refresh_token:'',
        };
    }
  componentDidMount() {
    console.log(this.props)
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const access_token = params.get('access_token'); // bar
    const refresh_token = params.get('refresh_token'); // bar
    console.log(access_token,refresh_token)
    this.setState({
        access_token:access_token,
        refresh_token:refresh_token,
    })
  }

  sendSms= (e) =>  {
    console.log(this.state.手机号);
    let self = this;
    axios.get('https://wx.wuminmin.top/tieta/sendSms', {
      params: {
        "手机号": self.state.手机号,
      }
    })
      .then(function (response) {
        self.setState({
            短信提示: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChangeName= (e) =>  {
    this.setState({姓名: e.target.value});
  }

  handleChangePhone= (e) =>  {
    this.setState({手机号: e.target.value});
  }

  handleChangeSmsCode= (e) =>  {
    this.setState({验证码: e.target.value});
  }

  handleChangeIdCard= (e) =>  {
    this.setState({身份证号码: e.target.value});
  }
  zhuCe= (e) =>  {
    let self = this
    var myOtherUrl =  encodeURIComponent("https://wx.wuminmin.top/tieta/zhuce")
    var myState = {
        姓名:self.state.姓名,
        手机号:self.state.手机号,
        验证码:self.state.验证码,
        身份证号码:self.state.身份证号码,
        短信提示:self.state.短信提示,
        access_token:self.state.access_token,
        refresh_token:self.state.refresh_token,
    }
    axios.get('https://wx.wuminmin.top/tieta/zhuce', {
      params: {
        "myState": myState,
      }
    })
      .then(function (response) {
        self.setState({
            短信提示: response.data
        });
          window.setTimeout(e => { window.location = 'https://wx.wuminmin.top/tieta/dl'}, 3000)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
  
    return (
      <div>
        <CellsTitle>实名注册</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>姓名</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="txt" value={this.state.姓名} onChange={this.handleChangeName} />
                    </CellBody>
                </FormCell>
                <FormCell vcode>
                    <CellHeader>
                        <Label>手机号</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="tel" value={this.state.手机号} onChange={this.handleChangePhone}/>
                    </CellBody>
                    <CellFooter>
                        <Button type="vcode"  onClick={this.sendSms} >发送</Button>
                    </CellFooter>
                </FormCell>
              
                <FormCell vcode>
                    <CellHeader>
                        <Label>验证码</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.验证码} onChange={this.handleChangeSmsCode}/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>身份证</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="txt" value={this.state.身份证} onChange={this.handleChangeIdCard}/>
                    </CellBody>
                </FormCell>
                <FormCell warn>
                    <CellBody>
                    <Label>{this.state.短信提示}</Label>
                    </CellBody>
                </FormCell>
            </Form>
            <CellsTips>铁塔采集系统</CellsTips>
            <Button  onClick={this.zhuCe}>注册</Button>
      </div>
    )
  }
}
