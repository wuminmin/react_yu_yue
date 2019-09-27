import React, { Component } from 'react'
import axios from 'axios'

export default class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bool: false,
            year: '',
            month: '',
            days: '0',
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    }

    componentDidMount() {
        this.start()
    }

    async start() {
        let days = new Date().getDate();
        let month = new Date().getMonth();
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        this.setState({
            year: year,
            month: month,
            days: days,
            hours:hours,
            minutes:minutes,
            seconds:seconds,
        });
        window.setTimeout( e => this.start(), 1000)
    }


    render() {
        let { year, month, bool, days, hours, minutes, seconds } = this.state
        return (
            <div>
                {
                    bool ?
                        <div>当前日期</div> :
                        <div>
                           {year}  年  {month} 月  {days} 日 {hours} : {minutes} : {seconds}
                        </div>
                }
            </div>
        )
    }
}