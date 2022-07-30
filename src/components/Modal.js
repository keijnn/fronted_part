import Popup from 'reactjs-popup'

export const Modal = (props) => (
  <Popup trigger={<p>{props.field}</p>} modal>
    <div className="bg-white w-48 h-48">{props.field}</div>
  </Popup>
)
