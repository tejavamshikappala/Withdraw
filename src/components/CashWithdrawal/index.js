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
      <div className="forOuterDiv">
        <div className="forInner">
          <div className="forInnerInner1">
            <p className="forPara">s</p>
            <h1 className="forHeader">Sarah Williams</h1>
          </div>
          <div className="forInnerInner">
            <p className="Balance">Your Balance</p>

            <div className="forIn">
              <p className="forHeaderRupees">{intValue}</p>
              <p className="InRupees">In Rupees</p>
            </div>
          </div>
          <p className="Withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES) </p>
          <ul className="forButton">
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
