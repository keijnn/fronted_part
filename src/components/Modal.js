import Popup from 'reactjs-popup'

export const Modal = (props) => (
  <Popup trigger={<p>{props.field}</p>} modal>
    <div className="bg-white">{props.field}</div>
  </Popup>
)
