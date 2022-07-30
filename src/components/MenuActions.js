//import modules
import Popup from 'reactjs-popup'

//import components
import { Modal } from './Modal'

//import icons
import { BsPen } from 'react-icons/bs'
import { SiGooglelens } from 'react-icons/si'
import { FaRegObjectGroup } from 'react-icons/fa'
import { BiFullscreen } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import { MdOutlineSubtitles } from 'react-icons/md'
import { BsTelephoneForwardFill } from 'react-icons/bs'
import { BiMessageError } from 'react-icons/bi'
import { BiMessageRoundedX } from 'react-icons/bi'
import { MdOutlineSyncProblem } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'

export const MenuAction = (props) => {
  const arr1 = [
    { title: 'Змiнювати макет', icon: <FaRegObjectGroup /> },
    { title: 'Повноекранний режим', icon: <BiFullscreen /> },
    { title: 'Застосувати вiзуальнi ефекти', icon: <BsStars /> },
    { title: 'Увiмкнути субтитри', icon: <MdOutlineSubtitles /> },
    { title: 'Використати телефон для передачi звуку', icon: <BsTelephoneForwardFill /> },
  ]
  const arr2 = [
    { title: 'Повiдомити про проблему', icon: <BiMessageError /> },
    { title: 'Повiдомити про порушення', icon: <BiMessageRoundedX /> },
    { title: 'Вирiшення проблем i довiдка', icon: <MdOutlineSyncProblem /> },
    { title: 'Налаштування', icon: <FiSettings /> },
  ]

  const firstList = arr1.map((item, index) => (
    <Modal
      field={
        <li key={index} className="flex">
          <p className="w-11 h-11 p-3">{item.icon}</p>
          <p className="ml-3 mt-2">{item.title}</p>
        </li>
      }
    />
  ))

  const secondList = arr2.map((item, index) => (
    <Modal
      field={
        <li key={index} className="flex">
          <p className="w-11 h-11 p-3">{item.icon}</p>
          <p className="ml-3 mt-2">{item.title}</p>
        </li>
      }
    />
  ))

  return (
    <Popup
      trigger={() => <p className="text-white rounded-full p-3 bg-[#3C4043] ml-3">{props.icon}</p>}
      position="top left"
      closeOnDocumentClick={false}
    >
      <div className="bg-white divide-y p-3">
        <ul className="mb-3">
          <li className="flex">
            <BsPen className="w-10 h-10 p-3" />
            <div className="ml-3">
              <Modal field={<p>Дошка для конференцiй</p>} />
              <Modal field={<p className="text-sm text-gray-400">Вiдкрити файл Jam</p>} />
            </div>
          </li>

          <Modal
            field={
              <li className="flex">
                <SiGooglelens className="w-10 h-10 p-3" />
                <p className="ml-3 mt-2">Записувати зустрiч</p>
              </li>
            }
          />
        </ul>
        <ul className="mt-3">{firstList}</ul>
        <ul className="mt-3">{secondList}</ul>
      </div>
    </Popup>
  )
}
