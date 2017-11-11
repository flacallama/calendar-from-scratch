import React, { Component } from 'react';
var moment = require('moment');
class MonthControl extends Component {

  render () {
    return (
      <div className="monthControl">
        <div className="monthControlChildBut">
          <a onClick={this.props.prevMonth} className="waves-effect waves-light btn">Prev</a>
        </div>
        <div className="monthControlChild">
          <h4 id="monthHeading">{moment(this.props.YrMoArr[this.props.monthChoser]).format("MMMM YYYY")}</h4>
        </div>
        <div className="monthControlChildBut">
          <a onClick={this.props.nextMonth} className="waves-effect waves-light btn">Next</a>
        </div>



      </div>
    )
  }
}
export default MonthControl;
