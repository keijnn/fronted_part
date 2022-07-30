//import components
import { MenuAction } from './MenuActions'

//import icons
import { BsMicFill } from 'react-icons/bs'
import { MdScreenShare } from 'react-icons/md'
import { BsCameraVideo } from 'react-icons/bs'
import { MdOutlineSubtitles } from 'react-icons/md'
import { FaRegHandPaper } from 'react-icons/fa'
import { GrMoreVertical } from 'react-icons/gr'
import { ImPhoneHangUp } from 'react-icons/im'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import { BiCommentDetail } from 'react-icons/bi'
import { MdIosShare } from 'react-icons/md'
import { popupShowed } from 'features/meet'

export const Menu = () => {

  const date = new Date()

  const time = date.getHours() + ':' + date.getMinutes()

  return (
    <div className="h-[12%] flex items-center justify-between">
      <div className="divide-x flex items-center h-6">
        <p className='mr-3 text-white'>{time}</p>
        <p className="text-white pl-3">Team meeting</p>
      </div>
      <div className="flex">
        <BsMicFill className="cursor-pointer fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <BsCameraVideo className="cursor-pointer fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <MdOutlineSubtitles className="cursor-pointer fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <FaRegHandPaper className="cursor-pointer fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <MdScreenShare className="cursor-pointer fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <MenuAction icon={<GrMoreVertical />} />
        <ImPhoneHangUp className="cursor-pointer fill-white bg-[red] rounded-full w-12 h-10 p-2 ml-3" />
      </div>
      <div className="flex">
        <AiOutlineInfoCircle onClick={() => popupShowed()} className="cursor-pointer fill-white rounded-full w-6 h-9 mr-5" />
        <BsPeople className="cursor-pointer fill-white rounded-full w-6 h-9 mr-5" />
        <BiCommentDetail className="cursor-pointer fill-white rounded-full w-6 h-9 mr-5" />
        <MdIosShare className="cursor-pointer fill-white rounded-full w-6 h-9" />
      </div>
    </div>
  )
}
