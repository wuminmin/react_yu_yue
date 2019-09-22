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
            // <div className="icon-box">
            //     <Icon size="large" value={'https://wx.wuminmin.top/dzzwzx/icon?id='+this.props.item.部门编号} />
            //     <div className="icon-box__ctn">
            //         <h3 className="icon-box__title">{this.props.item.部门名称}</h3>
            //         <p className="icon-box__desc">{this.props.item.办事内容}</p>
            //         <p className="icon-box__desc">{this.props.item.办事日期}</p>
            //         <p className="icon-box__desc">{this.props.item.办事区间}</p>
            //     </div>
            // </div>
            <div>
                <Cell>
                    <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                        <img src={'https://wx.wuminmin.top/dzzwzx/icon?id=' + this.props.item.部门编号} style={{ width: '50px', display: 'block' }} />
                        {/* <Badge preset="header">1</Badge> */}
                    </CellHeader>
                    <CellBody>
                        <p>{this.props.item.部门名称}</p>
                        <p style={{ fontSize: '13px', color: '#888888' }}>{this.props.item.办事日期} {this.props.item.办事区间} {this.props.item.办事内容}    </p>
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
                <CellsTitle>我的预约</CellsTitle>

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

class YuYue extends React.Component {
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
            预约申请列表: [],
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
                    预约申请列表: response.data
                });
                console.log('预约申请列表', self.state.预约申请列表);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    <Grids data={data} />
                    <IconBoxList user={this.state.预约申请列表}></IconBoxList>
                </Page>
            </div>
        )
    }
}
export default YuYue