import React from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import 'moment'
import {
    ButtonArea,
    Button,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Input,
    Label,
    Radio,
} from 'react-weui';


export default class QingYangKouZhaoYuYue extends React.Component {
    constructor(props) {
        super(props);
        var moment = require('moment');
        this.state = {
            姓名: '',
            手机号: '',
            身份证号码: '',
            短信提示: '',
            access_token: '',
            refresh_token: '',
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
        console.log(access_token, refresh_token)
        this.setState({
            access_token: access_token,
            refresh_token: refresh_token,
            手机号: 手机号,
            姓名: 姓名,
            身份证号码: 身份证号码,
        });
    }
    render() {
        return (
            <div>
                <Page className="input" title={this.state.姓名} subTitle={this.state.手机号} >
                    <CellsTitle>收货地址</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>地址</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 地址: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>
                   
                    <CellsTitle>口罩类型</CellsTitle>
                    <Form radio >
                        <FormCell radio>
                            <CellBody>N95口罩1个</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="N95口罩1个"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            口罩类型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>普通口罩1个</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="普通口罩1个"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            口罩类型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                   
                    <FormCell warn>
                        <p>{this.state.短信提示}</p>
                    </FormCell>
                    <ButtonArea>
                        <Button
                            onClick={e => {
                                let self = this;
                                console.log(self.state);
                                axios.get('https://wx.wuminmin.top/tieta/submit_ban_shi', {
                                    params: {
                                        "myState": self.state,
                                    }
                                })
                                    .then(function (response) {
                                        console.log(response)
                                        self.setState({
                                            短信提示: response.data
                                        });
                                        window.setTimeout(e => self.setState({ 短信提示: '' }), 3000)
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }
                            }>
                            预约
                        </Button>
                    </ButtonArea>


                    <FormCell >
                        <p>我的预约</p>
                    </FormCell>
                    <ButtonArea>
                        <Button
                            onClick={e => {
                                let self = this;
                                console.log(self.state);
                                axios.get('https://wx.wuminmin.top/tieta/querey_result', {
                                    params: {
                                        "myState": self.state,
                                    }
                                })
                                    .then(function (response) {
                                        console.log(response)
                                        self.setState({
                                            短信提示: response.data
                                        });
                                        window.setTimeout(e => self.setState({ 短信提示: '' }), 3000)
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                            }
                            }>
                            查询我的预约
                        </Button>
                    </ButtonArea>

                </Page>
            </div>
        )
    }
}
