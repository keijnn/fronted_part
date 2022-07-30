//import components
import { useStore } from 'effector-react'
import { $status } from 'features/meet'

export const SideBar = () => {
  const status = useStore($status)

  return <div className={status ? 'w-56 bg-white' : 'hidden'}></div>
}
