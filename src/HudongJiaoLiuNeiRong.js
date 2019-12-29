import React, { Component } from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import {
    Article,
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

export default class HudongJiaoLiuNeiRong extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');
        const 手机号 = params.get('手机号');
        const 姓名 = params.get('姓名');
        const 身份证号码 = params.get('身份证号码');
        const 部门 = params.get('部门');
        const 主题 = params.get('主题');
        const 状态 = params.get('状态');
        const 时间 = params.get('时间');
        const 信件内容 = params.get('信件内容');
        const 答复内容 = params.get('答复内容');
        console.log(部门);
        this.state = {
            姓名: 姓名,
            手机号: 手机号,
            身份证号码: 身份证号码,
            access_token: access_token,
            refresh_token: refresh_token,
            部门: 部门,
            主题: 主题,
            状态: 状态,
            时间: 时间,
            信件内容: 信件内容,
            答复内容: 答复内容,

        };
    }
    componentDidMount() {
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
                            答复
                    </PanelHeader>
                        <PanelBody>
                            <Article>
                                <h1>{this.state.部门} {this.state.状态}</h1>
                                <section>
                                    <section>
                                        <h3>来信时间：</h3>
                                        <p> {this.state.时间}</p>
                                        <h3>来信内容：</h3>
                                        <p> {this.state.信件内容}</p>
                                    </section>
                                    <section>
                                        <h3>答复内容：</h3>
                                        <p> {this.state.答复内容}</p>
                                    </section>
                                </section>
                            </Article>
                        </PanelBody>
                    </Panel>

                    <Button onClick={() => { this.props.history.go(-1) }}
                    >返回 </Button>
                </Page>
            </div>
        )
    }
}