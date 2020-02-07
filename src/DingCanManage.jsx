import React, { Component } from 'react';
import axios from 'axios';
import XLSX from 'xlsx';
import Qs from 'qs';
import moment from 'moment';
import AppGlobal from './AppGlobal';

const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

/* generate an array of column objects */
const make_cols = refstr => {
    let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i }
    return o;
};

class ExcelReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            access_token:this.props.access_token,
            myTips: '',
            myTips2:'',
            flag:'',
            ji_li_ming_cheng: '',
            res: '',
            file: {},
            data: [],
            cols: []
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // 声明一个自定义事件
        // 在组件装载完成以后
        // this.eventEmitter = emitter.addListener("someEvent", (msg) => {
        //     console.log(msg);
        //     this.setState({
        //         ji_li_ming_cheng: msg
        //     })
        // });
    }

    // 组件销毁前移除事件监听
    componentWillUnmount() {
        // emitter.removeListener(this.eventEmitter);
    }

    handleChange(e) {
        const files = e.target.files;
        if (files && files[0]) this.setState({ file: files[0] });
    };

    handleFile() {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;

        reader.onload = (e) => {
            /* Parse data */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws);
            /* Update state */
            this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
                let self = this;
                let flag = moment().format('MMMM Do YYYY, h:mm:ss a');
                self.setState({
                    flag:flag
                })
                var mydata = {
                    "access_token":this.props.access_token,
                    "action": '上传',
                    "flag": flag,
                    "excel": JSON.stringify(self.state.data, null, 2)
                }
                axios({
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'post',
                    url: AppGlobal.url.dingCanUrl,
                    data: Qs.stringify(mydata)
                }).then(function (response) {
                    console.log(response)
                    self.setState({
                        myTips: response.data
                    });
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        };

        if (rABS) {
            reader.readAsBinaryString(this.state.file);
        } else {
            reader.readAsArrayBuffer(this.state.file);
        };
    }

    render() {
        return (
            <div>
                <input type="file" className="form-control" id="file" accept={SheetJSFT} onChange={this.handleChange} />
                <input type='submit'
                    value="上传文件"
                    onClick={this.handleFile} />
                <h1>{this.state.myTips}</h1>
                <button onClick={()=>{
                    let self = this;
                    var mydata = {
                        "access_token":this.props.access_token,
                        "action": '查询结果',
                        "flag": self.state.flag,
                        "excel": []
                    }
                    axios({
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: 'post',
                        url: AppGlobal.url.dingCanUrl,
                        data: Qs.stringify(mydata)
                    }).then(function (response) {
                        console.log(response)
                        self.setState({
                            myTips2: response.data
                        });
                    })
                        .catch(function (error) {
                            console.log(error);
                        });

                }}>查询结果</button>
                <h1>{this.state.myTips2}</h1>
            </div>
        )
    }
}

class DingCanManage extends React.Component {
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
                <ExcelReader access_token={new URLSearchParams(this.props.location.search).get('access_token')}></ExcelReader>
            </div>
        )
    }
}
export default DingCanManage;