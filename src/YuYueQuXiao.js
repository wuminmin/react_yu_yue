import React from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import vcodeSrc from './favicon.ico';
import avatarSrc from './favicon.ico';
import 'moment'
import {
    ButtonArea,
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

class YuYueQuXiao extends React.Component {
    constructor(props) {
        super(props);
        var moment = require('moment');
        this.state = {
            姓名: '',
            手机号: '',
            验证码: '',
            身份证号码: '',
            短信提示: '',
            access_token: '',
            refresh_token: '',
            部门列表: [],
            部门编号: '',
            部门名称: '',
            办事内容: '',
            办事内容列表: [],
            办事日期: '',
            办事区间: '',
            oid:'',
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
        const 部门编号 = params.get('部门编号');
        const 部门名称 = params.get('部门名称');
        const 办事日期 = params.get('办事日期');
        const 办事区间 = params.get('办事区间');
        const 办事内容 = params.get('办事内容');
        const oid = params.get('oid');
        this.setState({
            access_token: access_token,
            refresh_token: refresh_token,
            手机号: 手机号,
            姓名: 姓名,
            身份证号码: 身份证号码,
            部门编号: 部门编号,
            部门名称: 部门名称,
            办事日期:办事日期,
            办事区间:办事区间,
            办事内容:办事内容,
            oid:oid,
        });
    }

    render() {
        return (
            <div>
                <Page className="input" title={this.state.部门名称} subTitle={this.state.姓名} >
                    <CellsTitle>取消预约</CellsTitle>
                    <Form>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>办事内容：</Label>
                            </CellHeader>
                            <CellBody>
                                <Label>{this.state.办事内容}</Label>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>办事日期：</Label>
                            </CellHeader>
                            <CellBody>
                                <Label>{this.state.办事日期}</Label>
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>办事区间：</Label>
                            </CellHeader>
                            <CellBody>
                                <Label>{this.state.办事区间}</Label>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <CellsTips>微信预约系统</CellsTips>
                    <FormCell warn>
                        <p>{this.state.短信提示}</p>
                    </FormCell>
                    <ButtonArea>
                        <Button type="warn"
                            onClick={e => {
                                let self = this
                                var myState = {
                                    oid:self.state.oid,
                                    姓名: self.state.姓名,
                                    手机号: self.state.手机号,
                                    验证码: self.state.验证码,
                                    身份证号码: self.state.身份证号码,
                                    短信提示: self.state.短信提示,
                                    access_token: self.state.access_token,
                                    refresh_token: self.state.refresh_token,
                                    部门编号: self.state.部门编号,
                                    部门名称: self.state.部门名称,
                                    办事内容: self.state.办事内容,
                                    办事日期: self.state.办事日期,
                                    办事区间: self.state.办事区间,
                                }
                                axios.get('https://wx.wuminmin.top/dzzwzx/submit_qu_xiao_ban_shi', {
                                    params: {
                                        "myState": myState,
                                    }
                                })
                                    .then(function (response) {
                                        self.setState({
                                            短信提示: response.data
                                        });
                                        console.log(response)
                                        if(response.data === '取消预约成功'){
                                            window.location = 'https://wx.wuminmin.top/dzzwzx/yy'
                                        }else{
                                            window.setTimeout(e => self.setState({ 短信提示: '' }), 3000)
                                        }

                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }
                            }>
                            取消办事
                        </Button>
                    </ButtonArea>
                </Page>
            </div>
        )
    }
}
export default YuYueQuXiao