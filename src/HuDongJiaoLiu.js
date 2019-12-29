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
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');
        const 手机号 = params.get('手机号');
        const 姓名 = params.get('姓名');
        const 身份证号码 = params.get('身份证号码');
        this.state = {
            姓名: new URLSearchParams(search),
            手机号: '',
            验证码: '',
            身份证号码: '',
            短信提示: '',
            access_token: '',
            refresh_token: '',
            部门列表: [],
            预约申请列表: [],
            信件列表: [{
                部门: '城管局',
                主题: '回乡创业，想申请一个摊位',
                状态: '已答复',
                时间:'2019-12-29',
                链接: '/hudongjiaoliuneirong/?姓名=' + 姓名+
                '&时间='+'2019-12-29'+
                '&部门='+'城管局'+
                '&主题='+'回乡创业，想申请一个摊位'+
                '&状态='+'已答复' + 
                '&手机号=' + 手机号 + 
                '&身份证号码=' + 身份证号码 + 
                '&access_token=' +access_token + 
                '&refresh_token=' + refresh_token + 
                '&信件内容=' + '想在东至三中学校外面申请一个摊位，回乡创业和培养下一代，没有太多资金，先摆个摊，请各位领导给予支持与帮助，谢谢您，等待您们的回复，感恩'+
                '&答复内容='+'网友：您好，您在县长信箱反映“回乡创业，想申请一个摊位”问题，县政府已交由县城管局办理。现答复如下：根据城市管理法律法规的规定，建德路三中段禁止摆摊设点。如果您想回乡创业，建议您租用门店经营或通过其他合法合规方式实施，我局将在法律法规允许的前提下，提供扶持和帮助。',
            },
            {
                部门: '昭潭镇政府',
                主题: '农村一户多个房子合法吗',
                状态: '已答复',
                时间:'2019-12-29',
                链接:  '/hudongjiaoliuneirong/?姓名='+姓名+
                '&时间='+'2019-12-29'+ 
                '&部门='+'昭潭镇政府'+
                '&主题='+'农村一户多个房子合法吗'+
                '&状态='+'已答复'+ 
                '&手机号=' + 手机号 + 
                '&身份证号码=' + 身份证号码 + 
                '&access_token=' +access_token + 
                '&refresh_token=' + refresh_token + 
                '&信件内容=' + '尊敬的县长！尊敬的各位领导你们好！我是东至县昭潭镇营桥村柏屋组人，由于组上许多人都在村路口盖了许多新房子，组上老房子大多空闲在那里，让我这些山里人没想在路边方便地方盖房子没有位置。我想问问他们这些有多处老宅基地的合法吗？我们山里房子都快塌了，想盖新房子，又没合适位置。在老宅基地盖又没路，确实不太方便！希望政府能过问一下。我听新闻上说一户只能一个房子，为什么我们村那么多人可以盖了新房后老房子还留在那里站个位置。我没上过多少学可能说的不太清楚。希望政府能过问一下，国家土地有限，田里不能盖房子，可很多人在田里盖了新房，老房子还不拆，！一户套房子合法吗？不合法的话希望政府能过问一下！让我们没地方建房的农民也有合适的位置建新房。确实老房子不能住了。路也不通。谢谢了'+
                '&答复内容='+'昭潭镇政府与来信人沟通,了解到该网友现有住宅位于营桥村柏屋组，因地势偏僻交通不便，且因年代久远房屋老化严重，现希望能重新申请新建住房。根据“一户一宅”政策规定，该网友需要对原住宅进行拆除，然后到县自然资源规划局昭潭所进行申报。相关政策已与来信人沟通。',
            }],
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
                            信件选登
                        </PanelHeader>
                        <PanelBody>
                            {this.state.信件列表.map((item) => {
                                return(
                                        <MediaBox type="text" href={item.链接}>
                                            <MediaBoxTitle>{item.部门} {item.状态} {item.时间}</MediaBoxTitle>
                                            <MediaBoxDescription>
                                                {item.主题}
                                            </MediaBoxDescription>
                                        </MediaBox>
                                )
                            })}
                        </PanelBody>
                        {/* <PanelFooter href="javascript:void(0);">
                            <CellMore />
                        </PanelFooter> */}
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