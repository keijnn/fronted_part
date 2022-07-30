import { useList } from 'effector-react'
import { $photos, imageChanged } from 'features/meet'

export const MeetingGrid = () => {
  const meetList = useList($photos, (person, index) => (
    <div
      key={person.id}
      onClick={() => imageChanged(person.id)}
      style={{ backgroundImage: `url(${person.avatar})`, backgroundRepeat: 'no-repeat' }}
      className={`w-full h-full rounded-lg p-3 flex items-end`}
    >
      <p className="text-white">{person.name}</p>
    </div>
  ))
  return <div className="h-[88%] grid grid-cols-4 grid-rows-3 gap-3">{meetList}</div>
}
