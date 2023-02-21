const players = [
  {
    id: 'clc9fmosa00039p56h616vlm1',
    email: 'eliott@tennisladder.com',
    firstName: 'Eliott',
    lastName: 'Tennis',
    phoneNumber: '951-977-0765',
    image: 'https://dvjttgyvxibrgaynzxmy.supabase.co/storage/v1/object/public/tennis/68840311768__290610F8-5EC8-466E-A7C7-D1C7CB218E71.JPG',
    ladders: {
      connect: [{ id: 1 }, { id: 2 }]
    }
  },
  {
    id: 'clc9fmosa00039p56h616vlm2',
    email: 'megan@tennisladder.com',
    firstName: 'Megan',
    lastName: 'Tennis',
    image: 'https://dvjttgyvxibrgaynzxmy.supabase.co/storage/v1/object/public/tennis/IMG_1283.JPG',
    ladders: {
      connect: [{ id: 1 }, { id: 2 }]
    }
  },
  {
    id: 'clc9fmosa00039p56h616vlm3',
    email: 'jonah@tennisladder.com',
    firstName: 'Jonah',
    lastName: 'Tennis',
    ladders: {
      connect: [{ id: 1 }]
    },
  },
  {
    id: 'clc9fmosa00039p56h616vlm4',
    email: 'sofia@tennisladder.com',
    firstName: 'Sofia',
    lastName: 'Tennis',
    ladders: {
      connect: [{ id: 1 }]
    }
  }
]

module.exports = players
