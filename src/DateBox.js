import React, { Component } from 'react';
class DateBox extends Component {

  state = {
    selected: false
  }


  onClick = () => {
    this.setState({
      selected: !this.state.selected
    })

    this.props.selectDate(this.props.element)
  }



// (e) => this.props.selectDate(index, e)

  render () {
    let currMonth = this.props.currMonth
    let elem = this.props.element
    let index = this.props.index
    let selected = this.state.selected
    console.log(elem)
    console.log(currMonth)
    return (

        <div id={currMonth !== elem.substring(0,7) ? "grey" : ""} className={selected ? "dateBox green" : "dateBox"} onClick={this.onClick}>{elem.substring(5, 10)}</div>

    )
  }
}
export default DateBox;
