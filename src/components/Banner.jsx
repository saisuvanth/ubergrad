import React from 'react'
import styles from '../assets/css/Components.module.css';


const Banner = () => {
  return (
	  <>
	<div className={styles.banner} style={{backgroundImage:'url(https://media.gettyimages.com/photos/american-flag-picture-id501228753?s=612x612)'}}>
	</div>
	<div className={styles["banner-text"]}>
		<h1>Masters in <span style={{borderBottom: '3px solid orangered'}}>Computer </span>Science in Us</h1>
		<h2>
			Grow Your Skills to Advance <br />
			Your Career Path.
		</h2>
	</div>
	  </>
  )
}

export default Banner