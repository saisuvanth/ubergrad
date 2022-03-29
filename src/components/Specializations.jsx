import React from 'react'
import styles from '../assets/css/Components.module.css';
import {Container,Row,Col} from 'react-bootstrap';


const Specializations = () => {
	const arr=['Artificial Intelligence','Big Data','Cloud Computing','Computer Architecture','Computer Graphics','Computer Networks','Cyber Security','Data Structures','Embedded Systems','Machine Learning','Mobile Computing','Operating Systems','Software Engineering'];
  return (
	<div className={styles.row} style={{backgroundColor:'#e5e7eb'}}>
		<Container className="d-flex flex-column align-items-center">
			<div style={{borderBottom:'4.5px solid orangered',width:'150px',marginBottom:'0.5rem'}}></div>
		<h2 style={{marginBottom:'1rem'}}>Popular Specializations</h2>
		<p>Below are some of popular specializations of computer science</p>
		<Row className="d-flex justify-content-center">
			{arr.map((item,index)=>
				<Col xs='6' md='4' sm='4' key={index} className={styles.smallcont+" mx-3"}>
				<p>{item}</p>
			</Col>
			)}
			
		</Row>
		</Container>
	</div>
  )
}

export default Specializations