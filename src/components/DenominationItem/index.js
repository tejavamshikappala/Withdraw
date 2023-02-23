import './index.css'

const DenominationItem = props => {
  const {listDenominations, onDelete} = props
  const {value, id} = listDenominations

  const buttonClicked = () => {
    onDelete(value)
  }

  return (
    <li className="forButton" key={id}>
      <button className="forButtonInner" type="button" onClick={buttonClicked}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
