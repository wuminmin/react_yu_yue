import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
// import { Button } from 'react-weui';
//import styles
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


class App extends React.Component {
  state = {
    c: 'c',
    s: 's'
  }
  componentDidMount() {

    console.log(this.props)
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const c = params.get('code'); // bar
    const s = params.get('state'); // bar
    // const c = this.props.location.query.code
    // const s = this.props.location.query.state
    console.log(c, s)
    this.setState(
      {
        c: c,
        s: s
      }
    )
    let self = this;
    axios.get('http://localhost:8000/wow/', {
      params: {
        "code": params.get('code'),
        "state": params.get('state')
      }
    })
      .then(function (response) {
        console.log(response);
        var openid = response.openid;
        self.setState({
          s: openid
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    // fetch(`http://127.0.0.1:8000/wow_login`)
    //   .then((user) => {
    //     this.setState(() => ({ user }))
    //   })
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
                        <Input type="txt" placeholder="输入姓名"/>
                    </CellBody>
                </FormCell>
                <FormCell vcode>
                    <CellHeader>
                        <Label>手机号</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="tel" placeholder="输入手机号"/>
                    </CellBody>
                    <CellFooter>
                        <Button type="vcode">发送</Button>
                    </CellFooter>
                </FormCell>
                <FormCell vcode>
                    <CellHeader>
                        <Label>验证码</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" placeholder="验证码"/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>身份证</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="txt" placeholder="输入身份证"/>
                    </CellBody>
                </FormCell>
            </Form>
            <CellsTips>东至政务中心</CellsTips>
            <Button>注册</Button>
      </div>
    )
  }
}
export default App