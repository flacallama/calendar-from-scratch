import React, { Component } from 'react';
class DayBox extends Component {

  render () {
    let elem = this.props.day

    return (

        <div className="dayBox">
          <p id="dayBoxText">{elem}</p>
        </div>

    )
  }
}
export default DayBox;
