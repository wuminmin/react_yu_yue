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
class Zhuce extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            姓名:'',
            手机号:'',
            验证码:'',
            身份证号码:'',
        };
    }
  componentDidMount() {
  }

  sendSms= (e) =>  {
    console.log(this.state.手机号);
    let self = this;
    axios.get('https://wx.wuminmin.top/dzzwzx/sendSms', {
      params: {
        "手机号": self.state.手机号,
      }
    })
      .then(function (response) {
        console.log(response);
        // var openid = response.openid;
        // self.setState({
        //   s: openid
        // });
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
    console.log(e);
    console.log(this.state.姓名);
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
            </Form>
            <CellsTips>东至政务中心</CellsTips>
            <Button  onClick={this.zhuCe}>注册</Button>
      </div>
    )
  }
}
export default Zhuce