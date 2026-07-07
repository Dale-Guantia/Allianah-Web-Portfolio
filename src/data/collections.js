// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW GALLERY:
//   1. Create a folder:  public/gallery/<id>/  (e.g. public/gallery/japan/)
//   2. Drop your photos in it, including a cover.jpg
//   3. Add one entry to the array below, pointing src paths at that folder
//   The grid card, /gallery/<id> route, filter chip, and detail page all
//   generate automatically. Never edit component code to add a gallery.
// ─────────────────────────────────────────────────────────────
export const collections = [
  {
    id: 'asia',
    label: 'Asia',
    kind: 'place',
    cover: '/gallery/asia/cover.jpg',
    photos: [
      {
        src: '/gallery/asia/noodle-stall.jpg',
        caption: 'Noodle stall at 2am',
        location: 'Bangkok',
      },
      {
        src: '/gallery/asia/ferry.jpg',
        caption: 'Missed the ferry, found a better one',
        location: 'Ha Long Bay',
      },
      {
        src: '/gallery/asia/cover.jpg',
        caption: 'The reason this page exists',
        location: 'Camera Exchange',
      },
    ],
  },
  {
    id: 'michigan',
    label: 'Michigan',
    kind: 'place',
    cover: '/gallery/michigan/cover.jpg',
    photos: [
      {
        src: '/gallery/michigan/cover.jpg',
        caption: 'Lake so flat it looked fake',
        location: 'Lake Michigan',
      },
      {
        src: '/gallery/michigan/dock.jpg',
        caption: 'Fog ate the bridge',
        location: 'Marin Headlands',
      },
    ],
  },
  {
    id: '2022',
    label: '2022',
    kind: 'date',
    cover: '/gallery/2022/cover.jpg',
    photos: [
      {
        src: '/gallery/2022/cover.jpg',
        caption: 'First roll, half of it blank',
        location: 'Home',
      },
      {
        src: '/gallery/2022/desk.jpg',
        caption: 'Coffee gone cold again',
        location: 'Manila',
      },
    ],
  },
]
