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


export default class TieTa extends React.Component {
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
                    <CellsTitle>铁塔信息采集</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>铁塔站址编码</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt" onChange={(e) => {
                                    console.log(e.target.value);
                                    this.setState({ 铁塔站址编码: e.target.value });
                                }
                                } />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>站名</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ 站名: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>经度</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ 经度: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell vcode>
                            <CellHeader>
                                <Label>纬度</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ 纬度: e.target.value });
                                    }
                                    }
                                />
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
                                <Label>L1_8G挂高</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L1_8G挂高: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L1_8G天线数</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L1_8G天线数: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L1_8G机械下倾角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L1_8G机械下倾角: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L1_8G方位角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L1_8G方位角: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M挂高</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L800M挂高: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M天线数</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L800M天线数: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M机械下倾角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L800M机械下倾角: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>L800M方位角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ L800M方位角: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网挂高</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ C网挂高: e.target.value });
                                    }
                                    }
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网天线数</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ C网天线数: e.target.value });
                                    }}
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网方位角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ C网方位角: e.target.value });
                                    }}
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>C网机械下倾角</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ C网机械下倾角: e.target.value });
                                    }}
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>电流分割比</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ 电流分割比: e.target.value });
                                    }}
                                />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>备注</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="txt"
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        this.setState({ 备注: e.target.value });
                                    }}
                                />
                            </CellBody>
                        </FormCell>
                    </Form>

                    <CellsTitle>塔型</CellsTitle>
                    <Form radio >
                        <FormCell radio>
                            <CellBody>普通地面塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="普通地面塔"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            塔型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>景观塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="景观塔"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            塔型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>普通楼面塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="普通楼面塔"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            塔型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>楼面抱杆</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="楼面抱杆"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            塔型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell><FormCell radio>
                            <CellBody>简易塔</CellBody>
                            <CellFooter>
                                <Radio name="radio1" value="简易塔"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            塔型: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>L1_8G天线平台</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>1平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="1平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L1_8G天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>2平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="2平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L1_8G天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>3平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="3平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L1_8G天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>4平台</CellBody>
                            <CellFooter>
                                <Radio name="radio2" value="4平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L1_8G天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>L800M天线平台</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>1平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="1平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L800M天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>2平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="2平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L800M天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>3平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="3平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L800M天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>4平台</CellBody>
                            <CellFooter>
                                <Radio name="radio3" value="4平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            L800M天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>C网天线平台</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>1平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="1平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            C网天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>2平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="2平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            C网天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>3平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="3平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            C网天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>4平台</CellBody>
                            <CellFooter>
                                <Radio name="radio4" value="4平台"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            C网天线平台: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>合路天线情况(如果有合路则填写)</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>无合路</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="无合路"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            合路天线情况: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>C网_L800M</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="C网_L800M"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            合路天线情况: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>C网_L800M_L1_8G</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="C网_L800M_L1_8G"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            合路天线情况: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>L800M和L1_8G</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="L800M和L1_8G"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            合路天线情况: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>C网和1_8G</CellBody>
                            <CellFooter>
                                <Radio name="radio5" value="C网和1_8G"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            合路天线情况: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>铁塔共享运营商</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>电信</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="电信"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            铁塔共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信和移动</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="电信和移动"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            铁塔共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信和联通</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="电信和联通"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            铁塔共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信和移动和联通</CellBody>
                            <CellFooter>
                                <Radio name="radio6" value="电信和移动和联通"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            铁塔共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>配套共享运营商</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>电信</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="电信"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            配套共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信移动</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="电信移动"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            配套共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信联通</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="电信联通"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            配套共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>电信移动联通</CellBody>
                            <CellFooter>
                                <Radio name="radio7" value="电信移动联通"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            配套共享运营商: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                    </Form>

                    <CellsTitle>机房或机柜是否有BBU</CellsTitle>
                    <Form radio>
                        <FormCell radio>
                            <CellBody>是</CellBody>
                            <CellFooter>
                                <Radio name="radio8" value="是"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            机房或机柜是否有BBU: e.currentTarget.value
                                        })
                                    }}
                                />
                            </CellFooter>
                        </FormCell>
                        <FormCell radio>
                            <CellBody>否</CellBody>
                            <CellFooter>
                                <Radio name="radio8" value="否"
                                    onChange={(e) => {
                                        console.log(e.currentTarget.value);
                                        this.setState({
                                            机房或机柜是否有BBU: e.currentTarget.value
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
                            OK
                        </Button>
                    </ButtonArea>
                </Page>
            </div>
        )
    }
}
