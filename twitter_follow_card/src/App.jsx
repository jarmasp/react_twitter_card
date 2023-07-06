import { FollowCard } from './components/FollowCard'

export function App() {
  return (
    <section className='App'>
      < FollowCard isFolowing userName="thyfus" name="thyfus" />
      < FollowCard isFolowing userName="dimethai" name="dimethai" />
      < FollowCard isFolowing userName="coletto42" name="coletto" />
    </section>
  )
}