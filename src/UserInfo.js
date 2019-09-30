import React, { Component }  from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import { Preview, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from 'react-weui';
import Page from './page';
import { Button, Grids, Cell, CellHeader, Badge, CellBody, CellsTitle} from 'react-weui';

class IconBox extends Component {
    //接收父组件传递过来的item
    render() {
        return (
            <div>
                <Cell>
                    <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                        <img src={'https://wx.wuminmin.top/dzzwzx/icon?id=' + this.props.item.部门编号} style={{ width: '50px', display: 'block' }} />
                        {/* <Badge preset="header">1</Badge> */}
                    </CellHeader>
                    <CellBody>
                        <p>{this.props.item.部门名称}</p>
                        <p style={{ fontSize: '13px', color: '#888888' }}>
                        {this.props.item.办事日期} {this.props.item.办事区间} {this.props.item.办事内容} {this.props.item.姓名} 
                        {this.props.item.身份证号码} {this.props.item.手机号}    </p>
                        {/* <Button type="warn" size="small">Mini</Button>  */}
                    </CellBody>
                </Cell>
            </div>
        )
    }
}

class IconBoxList extends Component {
    render() {
        return (
            <div>
                <CellsTitle>办事汇总列表：</CellsTitle>
                {
                    this.props.user.map((item, index) => {
                        return (
                            <IconBox item={item} key={index}></IconBox>
                        )
                    })
                }
            </div>
        )
    }
}



class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            姓名: '',
            手机号: '',
            验证码: '',
            身份证号码: '',
            短信提示: '',
            access_token: '',
            refresh_token: '',
            办事汇总列表:[],
        };
    }
    componentDidMount() {
        console.log(this.props)
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');
        const 手机号 = params.get('手机号');
        const 姓名 = params.get('姓名');
        const 身份证号码 = params.get('身份证号码');
        var myState = {
            姓名: 姓名,
            手机号: 手机号,
            身份证号码: 身份证号码,
            access_token: access_token,
            refresh_token: refresh_token,
        }
        console.log( myState)
        this.setState({
            access_token: access_token,
            refresh_token: refresh_token,
            手机号: 手机号,
            姓名: 姓名,
            身份证号码: 身份证号码,
        })
        let self = this;
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_ban_shi_hui_zong', {
            params: { myState: myState }
        })
            .then(function (response) {
                self.setState({
                    办事汇总列表: response.data
                });
                console.log('办事汇总列表', self.state.办事汇总列表);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    sendSms = (e) => {
        console.log(this.state.手机号);
        let self = this;
        axios.get('https://wx.wuminmin.top/dzzwzx/sendSms', {
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

    handleChangeName = (e) => {
        this.setState({ 姓名: e.target.value });
    }

    handleChangePhone = (e) => {
        this.setState({ 手机号: e.target.value });
    }

    handleChangeSmsCode = (e) => {
        this.setState({ 验证码: e.target.value });
    }

    handleChangeIdCard = (e) => {
        this.setState({ 身份证号码: e.target.value });
    }
    zhuCe = (e) => {
        let self = this
        var myState = {
            姓名: self.state.姓名,
            手机号: self.state.手机号,
            验证码: self.state.验证码,
            身份证号码: self.state.身份证号码,
            短信提示: self.state.短信提示,
            access_token: self.state.access_token,
            refresh_token: self.state.refresh_token,
        }
        axios.get('https://wx.wuminmin.top/dzzwzx/zhuce', {
            params: {
                "myState": myState,
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

    render() {
        return (
            <div>
                <Page>
                    <Preview>
                        <PreviewHeader>
                            <PreviewItem label="姓名" value={this.state.姓名} />
                        </PreviewHeader>
                        <PreviewBody>
                            <PreviewItem label="手机号" value={this.state.手机号} />
                            <PreviewItem label="身份证号码" value={this.state.身份证号码} />
                            {/* <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " /> */}
                        </PreviewBody>
                        <PreviewFooter>
                            <PreviewButton primary>修改信息</PreviewButton>
                        </PreviewFooter>
                    <IconBoxList user={this.state.办事汇总列表}></IconBoxList>
                    </Preview>
                </Page>
            </div>
        )
    }
}
export default UserInfo