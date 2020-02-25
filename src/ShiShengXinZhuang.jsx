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


export default class ShiShengXinZhuang extends React.Component {
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
        const mystate = params.get('state');
        const 手机号 = params.get('手机号');
        const 姓名 = params.get('姓名');
        const 身份证号码 = params.get('身份证号码');
        console.log(access_token, refresh_token,mystate)
        this.setState({
            access_token: access_token,
            refresh_token: refresh_token,
            mystate:mystate,
            手机号: 手机号,
            姓名: 姓名,
            身份证号码: 身份证号码,
        });
    }
    render() {
        return (
            <div>
                <Page className="input" title={'新装信息登记表'} subTitle={''} >

                <CellsTitle>区域</CellsTitle>
                    <Form radio >
                        <FormCell radio>
                            <CellBody>贵池区</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="贵池区"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            区域: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>青阳县</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="青阳县"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            区域: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>东至县</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="东至县"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            区域: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>石台县</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="石台县"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            区域: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>九华山</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="九华山"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            区域: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>姓名</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>姓名</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 姓名: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>装机详细地址</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>装机详细地址</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 装机详细地址: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>宽带速率</CellsTitle>
                    <Form radio >
                        <FormCell radio>
                            <CellBody>100M</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="100M"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            宽带速率: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>200M</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="200M"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            宽带速率: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>300M</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="300M"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            宽带速率: e.currentTarget.value
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
                            预约提速
                        </Button>
                    </ButtonArea>
                </Page>
            </div>
        )
    }
}
