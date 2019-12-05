import React, { Component } from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import {
    Button,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    ButtonArea,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    TextArea
} from 'react-weui';

const CellMore = () => (
    <Cell access link>
        <CellBody>更多互动</CellBody>
        <CellFooter />
    </Cell>
)

export default class HuDongJiaoLiu extends React.Component {
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
                    <Panel>
                        <PanelHeader>
                            互动交流
                    </PanelHeader>
                        <PanelBody>
                            <MediaBox type="text">
                                <MediaBoxTitle>张三</MediaBoxTitle>
                                <MediaBoxDescription>
                                    交通罚款在哪里交？
                            </MediaBoxDescription>
                            </MediaBox>
                            <MediaBox type="text">
                                <MediaBoxTitle>东至政务</MediaBoxTitle>
                                <MediaBoxDescription>
                                可以在各大银行办理
                            </MediaBoxDescription>
                            </MediaBox>
                        </PanelBody>
                        <PanelFooter href="javascript:void(0);">
                            <CellMore />
                        </PanelFooter>
                    </Panel>

                    <CellsTitle>输入框：</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="输入评论" rows="3" maxlength="200"></TextArea>
                            </CellBody>
                        </FormCell>
                    </Form>
                    <Button 
                    >提交 </Button>
                </Page>
            </div>
        )
    }
}