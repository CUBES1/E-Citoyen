import React, { Component } from 'react';
import './style.css'

export class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.clock = { };
        this.timer = 0;
        this.state = { remaining: { d: 0, h: 0, m: 0, s: 0 } };
    }
    
    countDown() {
        this.clock.decrementSecs();
        this.setState({ remaining: { d: this.clock.d, h: this.clock.h, m: this.clock.m, s: this.clock.s } });
        
        if (this.clock.isDone())
            clearInterval(this.timer);
    }
    
    componentDidMount() {
        this.clock = Clock.fromSeconds(Math.floor((new Date(this.props.endDate) - Date.now()) / 1000));
        this.setState({ remaining: {
            d: this.clock.d, h: this.clock.h, m: this.clock.m, s: this.clock.s
        }});

        if (this.timer === 0 && !this.clock.isDone())
            this.timer = setInterval(this.countDown.bind(this), 1000);
    }
    
    render() {
        return <span>{this.state.remaining.d}d {this.state.remaining.h}h {this.state.remaining.m}m {this.state.remaining.s}s</span>
    }
}

class Clock {
    static fromSeconds(secs) {
        if (secs <= 0)
            return new Clock(0, 0, 0, 0);
        
        let s = secs % 60;
        let m = Math.floor(secs / 60);

        let h = Math.floor(m / 60);
        m %= 60;

        let d = Math.floor(h / 24);
        h %= 24;

        return new Clock(d, h, m, s);
    }

    constructor(d, h, m, s) {
        this.d = d;
        this.h = h;
        this.m = m;
        this.s = s;
    }
    
    isDone = () => (this.s <= 0 && this.m <= 0 && this.h <= 0 && this.d <= 0)

    decrementSecs() {
        if (this.s === 0) {
            let res;
            if ((res = this.decrementMins()))
                this.s = 59;
            return res;
        }

        this.s--;
        return true;
    }

    decrementMins() {
        if (this.m === 0) {
            let res;
            if ((res = this.decrementHrs()))
                this.m = 59;
            return res;
        }

        this.m--;
        return true;
    }

    decrementHrs() {
        if (this.h === 0) {
            let res;
            if ((res = this.decrementDays()))
                this.h = 23;
            return res;
        }

        this.h--;
        return true;
    }

    decrementDays() {
        if (this.d === 0)
            return false;

        this.d--;
        return true;
    }
}
