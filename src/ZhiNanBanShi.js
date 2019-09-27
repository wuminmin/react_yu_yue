import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import Page from './page';
import iconSrc from './favicon.ico';
import { Button, Grids, Cell, CellHeader, Toast, CellBody, CellsTitle, Icon, Msg, Footer, FooterLinks, FooterLink, FooterText, PreviewFooter, PreviewBody, PreviewItem, PreviewButton } from 'react-weui';

class IconBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
        };
    }
    
    handleOnClik = (e) =>{
        console.log(e)
        console.log(this.props.item.部门编号)
        console.log(this.props.item.部门名称)
        console.log(this.props.item.value)
        console.log(this.props.item.label)
        console.log(this.props.item.info['txt'])
        window.alert(this.props.item.info['txt'])
    }

    //接收父组件传递过来的item
    render() {
        return (
            <div>
                <Cell>
                    <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                        <img src={'https://wx.wuminmin.top/dzzwzx/icon?id=' + this.props.item.部门编号} style={{ width: '50px', display: 'block' }} />
                    </CellHeader>
                    <CellBody >
                        <p onClick={this.handleOnClik} style={{ fontSize: '13px', color: '#888888' }}>{this.props.item.value} {this.props.item.label}     </p>
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
                <CellsTitle>可办事项：</CellsTitle>
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

class ZhiNanBanShi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            部门编号:'',
            部门名称:'',
            部门办事列表:[],
        };
    }
    componentDidMount() {
        console.log(this.props)
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const 部门编号 = params.get('部门编号');
        const 部门名称 = params.get('部门名称');
        this.setState({
            部门编号: 部门编号,
            部门名称: 部门名称,
        });
        let self = this;
        axios.get('https://wx.wuminmin.top/dzzwzx/xia_zai_ban_shi', {
            params: { 部门编号: 部门编号,部门名称:部门名称 }
        })
            .then(function (response) {
                const banShiList = []
                response.data.map((numbers) => {
                    console.log('numbers.value',numbers.value)
                        if (numbers.label === '') {
                            console.log('numbers.value',numbers.value)
                            console.log('numbers.label',numbers.label)
                        }else{
                            banShiList.push(numbers)
                        }
                    } );
                self.setState({
                    部门办事列表: banShiList
                });
                console.log('部门办事列表', self.state.部门办事列表);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <Page>
                    <Button type="default">当前部门：{this.state.部门名称}</Button>
                    <IconBoxList user={this.state.部门办事列表}></IconBoxList>
                </Page>
            </div>
        )
    }
}
export default ZhiNanBanShi