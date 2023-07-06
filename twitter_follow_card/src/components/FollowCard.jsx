import './FollowCard.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
export function FollowCard({ children, userName, isFolowing }) {
  //const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='avatar'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          follow
        </button>
      </aside>
    </article>)
}