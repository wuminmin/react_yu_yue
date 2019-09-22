import React from 'react';
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import { Grids, PreviewHeader, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from 'react-weui';

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
        let self = this;
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_bu_men', {
            params: {
            }
        })
            .then(function (response) {
                self.setState({
                    部门列表: response.data
                });
                console.log(self.state.部门列表);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const data = this.state.部门列表.map((item) => {
            console.log('跳转预约申请access_token------------',this.state.access_token)
            console.log('跳转预约申请refresh_token------------',this.state.refresh_token)
            return {
                icon: <img src={'https://wx.wuminmin.top/dzzwzx/icon?id='+item.部门编号}  />,
                label: item.部门名称,
                href: 'yuyue_bu_men?refresh_token='+this.state.refresh_token+'&access_token='+this.state.access_token+'&手机号='+this.state.手机号+'&姓名='+this.state.姓名+'&身份证号码='+this.state.身份证号码+'&部门编号='+item.部门编号+'&部门名称='+item.部门名称
            }
        })

        return (
            <div>
                <Page className="grid" title={this.state.姓名} subTitle={this.state.身份证号码}>
                    <Grids data={data} />
                </Page>

            </div>
        )
    }
}
export default YuYue