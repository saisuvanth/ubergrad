/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../assets/css/Components.module.css';
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
  return (
	<div className={styles.row} style={{backgroundColor:'#323334',paddingTop:'1rem',color:'white'}}>
		<Container className='d-flex flex-column justify-content-center'>
			<h4 style={{color:'orange'}}>Ubergrad India Pvt Ltd</h4>
		<div style={{borderBottom:'2.5px solid white',width:'100%',marginBottom:'0.5rem',borderRadius:'30px'}}></div>
		<Row>
			<Col id='foot-info' className='d-flex flex-column align-items-start text-start'>
				<p className='text-muted' style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing dciakdbc adoa doad wd wsQ SOWSH blanditiis quis quidem vel, voluptas animi quibusdam. Temporibus reprehenderit commodi eligendi error! Deleniti hic ullam praesentium ratione.</p>
				<p>Ph: +91-9303-42-42-42</p>
				<p>contactus@ubergrad.com</p>
			</Col>
			<Col className='d-flex flex-column text-start' style={{fontWeight:'400'}}>
			<Row>
				<a className={styles.mylink} href="#">About</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Sucess Stories</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Terms and Conditions</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Privacy Policy</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Disclaimer</a>
			</Row>
			</Col>
			<Col className='d-flex flex-column justify-content-around text-start'>
			<Row>
				<a className={styles.mylink} href="#">About</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Sucess Stories</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Terms and Conditions</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Privacy Policy</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Disclaimer</a>
			</Row>
			</Col>
			<Col className='d-flex flex-column justify-content-around text-start'>
			<Row>
				<a className={styles.mylink} href="#">About</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Sucess Stories</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Terms and Conditions</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Privacy Policy</a>
			</Row>
			<Row>
				<a className={styles.mylink} href="#">Disclaimer</a>
			</Row>
			</Col>
		</Row>
		</Container>
	</div>
  )
}

export default Footer