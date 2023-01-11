type UserProps = {
  id: string
  name: string
  username: string
  password: string
  role: string
}

export const users: UserProps[] = [
  {
    id: '1',
    name: 'Bruce Wayne',
    username: 'bruce@email.com',
    password: '$2b$10$xB8TETTwxWOsyHAd4Hmydud/GcwCC2482O4N.fyxTl37NYs2XQtVy',
    role: 'admin'
  },

  {
    id: '2',
    name: 'Clark Kent',
    username: 'clark@email.com',
    password: '$2b$10$xB8TETTwxWOsyHAd4Hmydud/GcwCC2482O4N.fyxTl37NYs2XQtVy',
    role: 'user'
  },

  {
    id: '3',
    name: 'Barry Allen',
    username: 'barry@email.com',
    password: '$2b$10$xB8TETTwxWOsyHAd4Hmydud/GcwCC2482O4N.fyxTl37NYs2XQtVy',
    role: 'user'
  }
]
