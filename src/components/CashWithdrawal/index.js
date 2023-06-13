import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {intValue: 2000}

  onDelete = value => {
    const v = value
    this.setState(previ => ({intValue: previ.intValue - v}))
    console.log(`clicked ${v}`)
  }

  render() {
    const {intValue} = this.state
    const {denominationsList} = this.props

    return (
      <div className="for-outer-div">
        <div className="for-inner">
          <div className="for-inner-inner1">
            <p className="for-para">s</p>
            <h1 className="for-header">Sarah Williams</h1>
          </div>
          <div className="for-inner-inner">
            <p className="Balance">Your Balance</p>

            <div className="for-in">
              <p className="for-header-rupees">{intValue}</p>
              <p className="In-rupees">In Rupees</p>
            </div>
          </div>
          <p className="Withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES) </p>
          <ul className="for-button">
            {denominationsList.map(every => (
              <DenominationItem
                listDenominations={every}
                key={every.id}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
