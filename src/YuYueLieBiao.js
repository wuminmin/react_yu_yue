import React, { Component } from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import { Button, Grids, Cell, CellHeader, Badge, CellBody, CellsTitle, Icon, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from 'react-weui';

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
                        <p style={{ fontSize: '13px', color: '#888888' }}>{this.props.item.办事日期} {this.props.item.办事区间} {this.props.item.办事内容}    </p>
                        <Button type="warn" size="small" href={'/yuyue_qu_xiao?access_token='
                            + this.props.item.access_token
                            + '&refresh_token=' + this.props.item.refresh_token
                            + '&oid=' + this.props.item.oid
                            + '&access_token=' + this.props.item.access_token
                            + '&手机号=' + this.props.item.手机号
                            + '&姓名=' + this.props.item.姓名
                            + '&身份证号码=' + this.props.item.身份证号码
                            + '&部门编号=' + this.props.item.部门编号
                            + '&部门名称=' + this.props.item.部门名称
                            + '&办事日期=' + this.props.item.办事日期
                            + '&办事日期=' + this.props.item.办事日期
                            + '&办事区间=' + this.props.item.办事区间
                            + '&办事内容=' + this.props.item.办事内容
                        }>取消预约</Button>
                    </CellBody>
                </Cell>
            </div>
        )
    }
}

class IconBox2 extends Component {

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
                        <p style={{ fontSize: '13px', color: '#888888' }}>{this.props.item.办事日期} {this.props.item.办事区间} {this.props.item.办事内容}    </p>
                    </CellBody>
                </Cell>
            </div>
        )
    }
}

class IconBoxList extends Component {
    clickFun(text) {
        this.props.phandleButton(text)//这个地方把值传递给了props的事件当中
    }
    render() {
        return (
            <div>
                <CellsTitle onClick={this.clickFun.bind(this, '123123123')} >我的预约</CellsTitle>
                {
                    this.props.user.map((item, index) => {
                        return (
                            <IconBox item={item} key={index}  ></IconBox>
                        )
                    })
                }
            </div>
        )
    }
}

class IconBoxList2 extends Component {
    clickFun(text) {
        this.props.phandleButton(text)//这个地方把值传递给了props的事件当中
    }
    render() {
        return (
            <div>
                <CellsTitle onClick={this.clickFun.bind(this, '123123123')} >历史预约</CellsTitle>
                {
                    this.props.user.map((item, index) => {
                        return (
                            <IconBox2 item={item} key={index}  ></IconBox2>
                        )
                    })
                }
            </div>
        )
    }
}

class YuYueLieBiao extends React.Component {
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
            部门列表: [],
            我的预约列表: [],
            历史预约列表: [],
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
        console.log(access_token, refresh_token, myState)
        this.setState({
            access_token: access_token,
            refresh_token: refresh_token,
            手机号: 手机号,
            姓名: 姓名,
            身份证号码: 身份证号码,
        });
        let self = this;
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_bu_men', {
            params: { myState: myState }
        })
            .then(function (response) {
                self.setState({
                    部门列表: response.data
                });
                console.log('部门列表', self.state.部门列表);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_yu_yue_list', {
            params: { myState: myState }
        })
            .then(function (response) {

                self.setState({
                    我的预约列表: response.data
                });
                console.log('我的预约列表', self.state.我的预约列表);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_li_shi_yu_yue_list', {
            params: { myState: myState }
        })
            .then(function (response) {

                self.setState({
                    历史预约列表: response.data
                });
                console.log('历史预约列表', self.state.历史预约列表);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleButton = (txt) => {
        console.log('dd', txt)
    }

    render() {
        const data = this.state.部门列表.map((item) => {
            console.log('跳转预约申请access_token------------', this.state.access_token)
            console.log('跳转预约申请refresh_token------------', this.state.refresh_token)
            return {
                icon: <img src={'https://wx.wuminmin.top/dzzwzx/icon?id=' + item.部门编号} />,
                label: item.部门名称,
                href: 'yuyue_bu_men?refresh_token=' + this.state.refresh_token + '&access_token=' + this.state.access_token + '&手机号=' + this.state.手机号 + '&姓名=' + this.state.姓名 + '&身份证号码=' + this.state.身份证号码 + '&部门编号=' + item.部门编号 + '&部门名称=' + item.部门名称
            }
        })
        return (
            <div>
                <Page>
                    <Button type="default">当前用户：{this.state.姓名}</Button>
                    <p>用户手机号：{this.state.手机号}</p>
                    <p>用户身份证号码：{this.state.身份证号码}</p>
                    <IconBoxList2 user={this.state.历史预约列表} phandleButton={this.handleButton.bind(this)} ></IconBoxList2>
                    <IconBoxList user={this.state.我的预约列表} phandleButton={this.handleButton.bind(this)} ></IconBoxList>
                    <Button href={'https://oa.wuminmin.top/yuyue?refresh_token=' + this.state.refresh_token + '&access_token=' + this.state.access_token + '&手机号=' + this.state.手机号 + '&姓名=' + this.state.姓名 + '&身份证号码=' + this.state.身份证号码}
                    >我要预约</Button>
                </Page>
            </div>
        )
    }
}
export default YuYueLieBiao