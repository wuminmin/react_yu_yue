import React, { Component } from 'react';
import axios from 'axios';
import XLSX from 'xlsx';

// import { make_cols } from './MakeColumns';
// import { SheetJSFT } from './types';
import AppGlobal from './AppGlobal';
// import CommonMethod from './commonMethod';
// import emitter from "./ev";

const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

// import XLSX from 'xlsx';
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
                var myState = {

                }
                axios.get(AppGlobal.url.dingCanUrl, {
                    params: {
                        "myState": myState,
                    }
                })
                    .then(function (response) {
                        self.setState({
                            短信提示: response.data
                        });
                        console.log(response)
                        if (response.data === '用户未注册' || response.data === '用户未注册') {
                            window.location = 'https://wx.wuminmin.top/tou_piao/dl'
                        } else {
                            // window.setTimeout(e => self.setState({ 短信提示: '' }), 3000)
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                //     let self = this;
                //     CommonMethod.sendData({
                //       url: AppGlobal.url.java_url,
                //       code: 'chz566JiLiZhuShouService',
                //       method: 'shang_chuang_excel',
                //       isLogin: false,
                //       message: { "ji_li_ming_cheng": self.state.ji_li_ming_cheng, "jlzs_excel": JSON.stringify(self.state.data, null, 2) },
                //       successFunc: function (response) {
                //         self.setState({
                //           res: response.res,
                //         })
                //       },
                //       errorFunc: function (e) {
                //         console.log(e);
                //       },
                //       encode: true
                //     });
                //     // console.log(JSON.stringify(this.state.data, null, 2));
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

                {/* <Row>
                    <Col span={6}>
                        <label htmlFor="file">上传excel表格</label>
                    </Col>
                    <Col span={6}>
                        </Col>
                    <Col span={6}>
                   
                    </Col>
                    <Col span={6}>
                        <label htmlFor="file">{this.state.res}</label>
                    </Col>
                </Row> */}
                {/* <Row>
          <Col span={24}>
           <Button>确认</Button>
          </Col>
 
        </Row> */}
            </div>
        )
    }
}

class DingCanManage extends React.Component {

    render() {
        return (
            <div>

                <ExcelReader></ExcelReader>
            </div>
        )
    }
}

export default DingCanManage;