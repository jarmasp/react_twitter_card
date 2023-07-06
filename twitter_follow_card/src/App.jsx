import { FollowCard } from './components/FollowCard'

const users = [
  {
    userName: 'dime_thai',
    name: 'thai',
    isFollowing: true
  },
  {
    userName: 'coletto42',
    name: 'coletto',
    isFollowing: true
  },
  {
    userName: 'thyfus',
    name: 'thyfus',
    isFollowing: false
  }
]

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <FollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </FollowCard>
        ))
      }
    </section>
  )
}