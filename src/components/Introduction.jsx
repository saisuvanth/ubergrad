import React from 'react'
import styles from '../assets/css/Components.module.css';


const Introduction = () => {
  return (
	<div className={styles.row+' container'}>
		<h1 style={{borderTop:'4.5px solid orangered',width:'fit-content',paddingBottom:'1.5rem',paddingTop:'0.5rem'}}>Introduction</h1>
		<p style={{fontFamily:'sans-serif'}}>
			Lorem ipsum dolor sit amet consectetur, beatae, est delectus v reprehenderit incidunt voluptatum nobis.
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente cumque libero nostrum nulla dolores dolor, voluptas maiores quaerat exercitationem accusamus porro nihil explicabo quasi suscipit laborum quam corrupti ducimus. Esse.
			<br />
			Lorem ipsum, dolor sit ame
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, enim. Nisi corporis porro, odit id doloremque alias tempora labore repellat, sit laudantium non architecto quod quam beatae omnis ea vitae.
			<br />
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quidem repudiandae ipsum vero assumenda, nam itaque tempora perspiciatis enim, expedita, nesciunt quas? Fugiat quos magnam ullam non in, numquam veritatis.
		</p>
	</div>
  )
}

export default Introduction;