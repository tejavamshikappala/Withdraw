import './index.css'

const DenominationItem = props => {
  const {listDenominations, onDelete} = props
  const {value, id} = listDenominations

  const buttonClicked = () => {
    onDelete(value)
  }

  return (
    <li className="for-button" key={id}>
      <button
        className="for-button-inner"
        type="button"
        onClick={buttonClicked}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
