import { useList } from 'effector-react'
import { $photos, imageChanged } from 'features/meet'

export const MeetingGrid = () => {
  const meetList = useList($photos, (person, index) => (
    <div
      key={person.id}
      onClick={() => imageChanged(person.id)}
      style={{ backgroundImage: `url(${person.avatar})`, backgroundRepeat: 'no-repeat' }}
      className={`w-full h-full bg-center bg-cover bg-[#3C4043] rounded-lg p-3 flex items-end`}
    >
      <p className="text-white">{person.name}</p>
    </div>
  ))
  return <div className="w-full mr-4 grid grid-cols-4 grid-rows-3 gap-3 ease-in-out">{meetList}</div>
}
