import React from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import vcodeSrc from './favicon.ico';
import avatarSrc from './favicon.ico';
import 'moment'
import Zmage from 'react-zmage'
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


export default class TieTa extends React.Component {
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
        console.log(access_token, refresh_token)
        this.setState({
            access_token: access_token,
            refresh_token: refresh_token,
            手机号: 手机号,
            姓名: 姓名,
            身份证号码: 身份证号码,
            部门编号: 部门编号,
            部门名称: 部门名称,
        });
        let self = this;
        var myState = {
            姓名: self.state.姓名,
            手机号: self.state.手机号,
            验证码: self.state.验证码,
            身份证号码: self.state.身份证号码,
            短信提示: self.state.短信提示,
            access_token: access_token,
            refresh_token: refresh_token,
            部门编号: self.state.部门编号,
            部门名称: self.state.部门名称,
            办事内容: self.state.办事内容,
            办事日期: self.state.办事日期,
            办事区间: self.state.办事区间,
        }
        axios.get('https://wx.wuminmin.top/tou_piao/submit_ban_shi', {
            params: {
                "myState": myState,
            }
        })
            .then(function (response) {
                self.setState({
                    短信提示: response.data
                });
                console.log(response)
                if (response.data === '用户未注册' || response.data === '用户未注册') {
                    window.location = 'https://wx.wuminmin.top/tou_piao/dl'
                } else {
                    // window.setTimeout(e => self.setState({ 短信提示: '' }), 3000)
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChangeBanShiNeiRong = (e) => {
        console.log('e.target.value', e.target.value)
        let self = this;
        self.state.办事内容列表.map((numbers) => {
            console.log('numbers.value', numbers.value)
            if (numbers.value === e.target.value) {
                console.log('numbers.value', numbers.value)
                console.log('numbers.label', numbers.label)
                self.setState({ 办事内容: numbers.label })
            }
        });
    }
    handleChangeBanShiQuJian = (e) => {
        this.setState({ 办事区间: e.target.value });
    }
    render() {
        return (
            <div>
                <Page className="input" title={this.state.部门名称} subTitle={this.state.姓名} >
                    <CellsTitle>铁塔信息采集</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>铁塔站址编码</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>站名</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>经度</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell vcode>
                            <CellHeader>
                                <Label>纬度</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                            <CellFooter>
                                <Button type="vcode">定位</Button>
                            </CellFooter>
                        </FormCell>
                    </Form>
                   
                   

                    <CellsTitle>工参</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>L1.8G挂高</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L1.8G天线数</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L1.8G机械下倾角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L1.8G方位角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M挂高</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M天线数</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M机械下倾角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M方位角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网挂高</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网天线数</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网方位角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网机械下倾角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>电流分割比</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>备注</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" />
                            </CellBody>
                        </FormCell>
                    </Form>
                   
                    <CellsTitle>塔型</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>普通地面塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="1" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>景观塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="2" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>普通楼面塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="3" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>楼面抱杆</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="4" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>L1.8G天线平台</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>1平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="11" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>2平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="12" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>3平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="13" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>4平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="14" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>L800M天线平台</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>1平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="11" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>2平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="12" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>3平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="13" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>4平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="14" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>C网天线平台</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>1平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="11" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>2平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="12" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>3平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="13" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>4平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="14" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>合路天线情况(如果有合路则填写)</CellsTitle>
                    <Form radio>
                    <FormCell radio>
                            <CellBody>无合路</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="10" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>C网+L800M</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="11"  />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>C网+L800M+L1.8G</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="12" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>L800M+L1.8G</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="13" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>C网+1.8G</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="14" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>铁塔共享运营商</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>电信</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="11" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信+移动</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="12" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信+联通</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="13" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信+移动+联通</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="14" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>配套共享运营商</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>电信</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="11" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信+移动</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="12" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信+联通</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="13" />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信+移动+联通</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="14" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>机房或机柜是否有BBU</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>是</CellBody>
                            <CellFooter>
                                <Radio name="radio8" value="11" defaultChecked />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>否</CellBody>
                            <CellFooter>
                                <Radio name="radio8" value="12" />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <FormCell warn>
                        <p>{this.state.短信提示}</p>
                    </FormCell>
                    <ButtonArea>
                        <Button
                            onClick={e => {
                                let self = this
                                var myState = {
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
                                axios.get('https://wx.wuminmin.top/tou_piao/submit_ban_shi', {
                                    params: {
                                        "myState": myState,
                                    }
                                })
                                    .then(function (response) {
                                        self.setState({
                                            短信提示: response.data
                                        });
                                        console.log(response)
                                        if (response.data === '更新预约成功' || response.data === '预约成功') {
                                            window.location = 'https://wx.wuminmin.top/dzzwzx/yy'
                                        } else {
                                            // window.setTimeout(e => self.setState({ 短信提示: '' }), 3000)
                                        }

                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }
                            }>
                            OK
                        </Button>
                    </ButtonArea>
                </Page>
            </div>
        )
    }
}
