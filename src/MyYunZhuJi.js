import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
// import { Button } from 'react-weui';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import { ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Form,
  FormCell,
  Icon,
  Input,
  Label,
  TextArea,
  Switch,
  Radio,
  Checkbox,
  Select,
  VCode,
  Agreement,
  Toptips
} from 'react-weui';


class MyYunZhuJi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CPU:'',
            内存:'',
            SATA:'',
            SSD:'',
            SAS:'',
            弹性IP0至5M:'',
            弹性IP大于5M:''};
    
        // this.handleChangeCPU = this.handleChangeCPU.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
  componentDidMount() {
  }
  handleChangeCPU= (e) =>  {
    this.setState({CPU: e.target.value});
  }
  handleChange内存= (e) =>  {
    this.setState({内存: e.target.value});
  }
  handleChangeSATA= (e) =>  {
    this.setState({SATA: e.target.value});
  }
  handleChangeSSD= (e) =>  {
    this.setState({SSD: e.target.value});
  }
  handleChangeSAS= (e) =>  {
    this.setState({SAS: e.target.value});
  }
  handleChange弹性IP0至5M= (e) =>  {
    this.setState({弹性IP0至5M: e.target.value});
  }
  handleChange弹性IP大于5M= (e) =>  {
    this.setState({弹性IP大于5M: e.target.value});
  }
  handleSubmit= (e) =>  {
    var price = this.state.CPU*58+this.state.内存*30+this.state.SATA*0.3+this.state.SSD*1.2+this.state.SAS*0.6+this.state.弹性IP0至5M*20+this.state.弹性IP大于5M*36;
    alert('价格: ' + price);
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <CellsTitle>云主机计算器</CellsTitle>
            <Form >
                <FormCell>
                    <CellHeader>
                        <Label>CPU核数</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.CPU} onChange={this.handleChangeCPU} />
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>内存</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.内存} onChange={this.handleChange内存}/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>SATA</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.SATA} onChange={this.handleChangeSATA}/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>SSD</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.SSD} onChange={this.handleChangeSSD}/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>SAS</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.SAS} onChange={this.handleChangeSAS}/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>弹性IP0至5M</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.弹性IP0至5M} onChange={this.handleChange弹性IP0至5M} />
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>弹性IP大于5M</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="number" value={this.state.弹性IP大于5M} onChange={this.handleChange弹性IP大于5M} />
                    </CellBody>
                </FormCell>
               
            </Form>
            <CellsTips>计算规则：vCPU:58 /核
内存:30 /G
SATA:0.3元/G
SSD：1.2元/G
SAS: 0.6元/G
0-5M     每M20元
5M以上   每M36元</CellsTips>
            <Button onClick={this.handleSubmit}>计算</Button>
      </div>
    )
  }
}
export default MyYunZhuJi