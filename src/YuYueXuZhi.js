import React, { Component } from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import { Button, Grids, Cell, CellHeader, Badge, CellBody, CellsTitle, Icon, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from 'react-weui';

export default class YuYueXuZhi extends React.Component {
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
    handleButton = (txt) => {
        console.log('dd', txt)
    }

    render() {
        return (
            <div>
                <Page>
                    <Button type="default">办事预约须知</Button>
                    <p>为解决群众现场排队取号及等待办理时间过长问题，节省群众的办件时间，我中心已开通网上预约服务，请您认真阅读预约须知。</p>
                    <p>1、本预约须知仅适用于东至县网上办事大厅和“东至政务”公众号。</p>
                    <p>2.网上预约实行实名制注册，务必根据注册提示提供个人或法人真实有效的实名认证信息。</p>
                    <p>3.预约成功后请务必在预约时间段内，携带有效身份证件到东至县政务大厅自助取号。</p>
                    <p>4.<span class="special red">预约取消、预约未取号均视为爽约。</span>一个月内同一个身份证号码累计出现<span class="special red">2次爽约</span>，一年内<span class="special red">累计爽约3次</span>，将被纳入黑名单，无法再进行网上预约。</p>
                    <p>5.<span class="special red">网上预约24小时开放，</span>实行“预约优先”的原则。</p>
                    <p>欢迎广大群众多提宝贵意见和建议。&nbsp;</p>
                    <p class="consult-tel"><span>咨询电话：</span>0566-3320812</p>
                    <Button href={'https://oa.wuminmin.top/yuyueliebiao?refresh_token=' + this.state.refresh_token + '&access_token=' + this.state.access_token + '&手机号=' + this.state.手机号 + '&姓名=' + this.state.姓名 + '&身份证号码=' + this.state.身份证号码 }
                    >下一步 </Button>
                </Page>
            </div>
        )
    }
}