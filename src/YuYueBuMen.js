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

class YuYueBuMen extends React.Component {
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
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_ban_shi', {
            params: {
                部门编号: 部门编号,
                部门名称: 部门名称
            }
        })
            .then(function (response) {
                self.setState({
                    办事内容:response.data[0]['label'],
                    办事内容列表: response.data
                });
                console.log('self.state.办事内容列表',self.state.办事内容列表,'self.state.办事内容',self.state.办事内容);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangeBanShiNeiRong = (e) => {
        console.log('e.target.value',e.target.value)
        let self = this;
        self.state.办事内容列表.map((numbers) => {
            console.log('numbers.value',numbers.value)
                if (numbers.value === e.target.value) {
                    console.log('numbers.value',numbers.value)
                    console.log('numbers.label',numbers.label)
                    self.setState({ 办事内容: numbers.label })
                }
            } );
    }

    handleChangeBanShiRiQi = (e) => {
        this.setState({ 办事日期: e.target.value });
    }

    handleChangeBanShiQuJian = (e) => {
        this.setState({ 办事区间: e.target.value });
    }

    render() {
        return (
            <div>
                <Page className="input" title={this.state.部门名称} subTitle={this.state.姓名} >
                    <CellsTitle>预约办事</CellsTitle>
                    <Form>
                        <FormCell select selectPos="after">
                            <CellHeader>
                                <Label>办事内容：</Label>
                            </CellHeader>
                            <CellBody>
                                <Select data={this.state.办事内容列表} onChange={this.handleChangeBanShiNeiRong} />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>预约日期：</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="date" defaultValue="" onChange={this.handleChangeBanShiRiQi} />
                            </CellBody>
                        </FormCell>
                        <Form radio>
                            <FormCell radio>
                                <CellBody>9:00-10:00</CellBody>
                                <CellFooter>
                                    <Radio name="radio1" value="9:00-10:00" onClick={this.handleChangeBanShiQuJian} />
                                </CellFooter>
                            </FormCell>
                            <FormCell radio>
                                <CellBody>10:00-11:00</CellBody>
                                <CellFooter>
                                    <Radio name="radio1" value="10:00-11:00" onClick={this.handleChangeBanShiQuJian} />
                                </CellFooter>
                            </FormCell>
                            <FormCell radio>
                                <CellBody>11:00-12:00</CellBody>
                                <CellFooter>
                                    <Radio name="radio1" value="11:00-12:00" onClick={this.handleChangeBanShiQuJian} />
                                </CellFooter>
                            </FormCell>
                            <FormCell radio>
                                <CellBody>14:00-15:00</CellBody>
                                <CellFooter>
                                    <Radio name="radio1" value="14:00-15:00" onClick={this.handleChangeBanShiQuJian} />
                                </CellFooter>
                            </FormCell>
                            <FormCell radio>
                                <CellBody>15:00-16:00</CellBody>
                                <CellFooter>
                                    <Radio name="radio1" value="15:00-16:00" onClick={this.handleChangeBanShiQuJian} />
                                </CellFooter>
                            </FormCell>
                            <FormCell radio>
                                <CellBody>16:00-17:30</CellBody>
                                <CellFooter>
                                    <Radio name="radio1" value="16:00-17:30" onClick={this.handleChangeBanShiQuJian} />
                                </CellFooter>
                            </FormCell>
                        </Form>
                    </Form>
                    <CellsTips>微信预约系统</CellsTips>
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
                                axios.get('https://wx.wuminmin.top/dzzwzx/submit_ban_shi', {
                                    params: {
                                        "myState": myState,
                                    }
                                })
                                    .then(function (response) {
                                        self.setState({
                                            短信提示: response.data
                                        });
                                        console.log(response)
                                        if(response.data === '更新预约成功' || response.data === '预约成功'){
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
                            OK
                        </Button>
                    </ButtonArea>
                </Page>
            </div>
        )
    }
}
export default YuYueBuMen