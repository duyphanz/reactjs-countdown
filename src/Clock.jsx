import React, { Component } from 'react'


class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            mins: 0,
            secs: 0,
        }
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount() {
        setInterval(() => {
            this.getTimeUntil(this.props.deadline)
        },1000)
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) return
        const secs = Math.floor((time / 1000) % 60);
        const mins = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({ secs, mins, hours, days })
    }

    leading0(num) {
        return num = num > 10 ? num : '0' + num
    }
    render() {
        return (
            <div className='time'>
                <div className='div-days'>{this.leading0(this.state.days)} ngày</div>
                <div className='div-hours'>{this.leading0(this.state.hours)} giờ</div>
                <div className='div-mins'>{this.leading0(this.state.mins)} phút</div>
                <div className='div-secs'>{this.leading0(this.state.secs)} giây</div>
            </div>
        )
    }
}
export default Clock;