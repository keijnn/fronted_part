//import modules
import { createStore, createEvent, createEffect, sample } from 'effector'

//get random image
const getCatsFx = createEffect(async () => {
  const res = await fetch(`${process.env.REACT_APP_API}/api/randomcat`)
  if (!res.ok) throw res
  return res.json()
})

//pressed on image
export const imageChanged = createEvent()

export const popupStatus = createEvent()

//get current image id
const $currentUser = createStore(0).on(imageChanged, (_, index) => index)

//default images
export const $photos = createStore([
  {
    id: 1,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYW764hWkP4rRjXgWRF108IWSGTF1NGgwwQ&usqp=CAU',
    name: 'Joe',
  },
  {
    id: 2,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKDSv9C9N0TFrJG0rVHyQgIlIdr7UTF2AfA&usqp=CAU',
    name: 'Ania',
  },
  {
    id: 3,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14NFJSI3CHMQozLSSQe6Lr8gcFVIR0QHpsw&usqp=CAU',
    name: 'Jua',
  },
  {
    id: 4,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhESj3KKEM3apr40ACjQnXOLnFOljCJb1AA&usqp=CAU',
    name: 'Frank',
  },
  {
    id: 5,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAWrCWrEx941ra80ZJr9dnF6sfVLpXFtVYg&usqp=CAU',
    name: 'Patric',
  },
  {
    id: 6,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgL8Hk4qSVC9vrpV6-0BwIIVmtjdT1OmBEHw&usqp=CAU',
    name: 'Simon',
  },
  {
    id: 7,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYW764hWkP4rRjXgWRF108IWSGTF1NGgwwQ&usqp=CAU',
    name: 'Joe',
  },
  {
    id: 8,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKDSv9C9N0TFrJG0rVHyQgIlIdr7UTF2AfA&usqp=CAU',
    name: 'Ania',
  },
  {
    id: 9,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14NFJSI3CHMQozLSSQe6Lr8gcFVIR0QHpsw&usqp=CAU',
    name: 'Jua',
  },
  {
    id: 10,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhESj3KKEM3apr40ACjQnXOLnFOljCJb1AA&usqp=CAU',
    name: 'Frank',
  },
  {
    id: 11,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAWrCWrEx941ra80ZJr9dnF6sfVLpXFtVYg&usqp=CAU',
    name: 'Patric',
  },
  {
    id: 12,
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgL8Hk4qSVC9vrpV6-0BwIIVmtjdT1OmBEHw&usqp=CAU',
    name: 'Simon',
  },
])

//current cat image 
const $cats = createStore('').on(getCatsFx.doneData, (_, cat) => cat)

sample({
  clock: imageChanged, //image pressed
  source: { id: $currentUser, photos: $photos, cat: $cats }, //get id and array
  fn: ({ photos, id, cat }) =>
    photos.map((item) => (item.id === id ? { ...item, avatar: cat } : item)), //image changed
  target: $photos,
})

//get new image
sample({
  clock: imageChanged,
  target: getCatsFx,
})

getCatsFx()
