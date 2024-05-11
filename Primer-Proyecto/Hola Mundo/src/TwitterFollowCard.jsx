import { useState } from "react";


// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({children, userName,initialIsFollowing}) {
 const [isFollowing, setIsFollowing]= useState(initialIsFollowing)

 const text = isFollowing ?'Siguiendo' : 'Seguir'
 const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
   :'tw-followCard-button'

   const handleClick = () => {
    setIsFollowing(!isFollowing)
   }

    return (
    <article className="tw-follow-card">
      <header className="tw-follow-header">
        <img
          className="tw-follow-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de Midulev"
        />
        <div className="tw-followCard-info">
          <strong> {children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
