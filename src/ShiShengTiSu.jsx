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


export default class ShiShengTiSu extends React.Component {
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
                <Page className="input" title={'提速信息登记表'} subTitle={''} >

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

                    <CellsTitle>学校名称</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>学校</Label>
                            </CellHeader>
                            <CellBody>
                                <Input style={{boarder:'1px'}} type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 学校: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>
                   
                    <CellsTitle>角色（填老师或者学生）</CellsTitle>
                    <Form radio >
                        <FormCell radio>
                            <CellBody>老师</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="老师"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            角色: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>学生</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="学生"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            角色: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>班级（老师填写任课的某一班级）</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>班级</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 班级: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>姓名（老师或学生的姓名）</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>姓名</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 老师或学生的姓名: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>办理宽带登记的姓名</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>姓名</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 办理宽带登记的姓名: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>办理宽带业务的身份证号码</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>身份证号码</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 身份证号码: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>宽带号或捆绑缴费号码</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>宽带号</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 宽带号: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>家庭联系人</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>家庭联系人</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 家庭联系人: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>联系电话</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>联系电话</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 联系电话: e.target.value });
                                }
                                } />
                            </CellBody>
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
