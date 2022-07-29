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


export const Menu = () => {
  return (
    <div className="h-[12%] flex items-center justify-between">
      <p className="text-white">Team meeting</p>
      <div className="flex">
        <BsMicFill className="fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <BsCameraVideo className="fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <MdOutlineSubtitles className="fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <FaRegHandPaper className="fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <MdScreenShare className="fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <GrMoreVertical className="fill-white rounded-full w-10 h-10 bg-[#3C4043] p-2 ml-3" />
        <ImPhoneHangUp className="fill-white bg-[red] rounded-full w-12 h-10 p-2 ml-3" />
      </div>
      <div className="flex">
        <AiOutlineInfoCircle className="fill-white rounded-full w-6 h-9 mr-5" />
        <BsPeople className="fill-white rounded-full w-6 h-9 mr-5" />
        <BiCommentDetail className="fill-white rounded-full w-6 h-9 mr-5" />
        <MdIosShare className="fill-white rounded-full w-6 h-9" />
      </div>
    </div>
  )
}
