//import components
import { MeetingGrid } from './MeetingGrid'
import { Menu } from './Menu'
import { SideBar } from './SideBar'

export const Meet = () => {
  return (
    <>
      <div className='flex h-[88%] w-full justify-between'> 
        <MeetingGrid />     
        <SideBar />
      </div>
      <Menu />
    </>
  )
}
