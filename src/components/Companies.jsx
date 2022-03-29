import React from 'react'
import styles from '../assets/css/Components.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import logo from '../assets/img/amazon.svg';

const Companies = () => {
  return (
	<div className={styles.row}>
		<Container className='d-flex flex-column align-items-center'>
			<div style={{borderBottom:'4.5px solid orangered',width:'170px',marginBottom:'0.5rem'}}></div>
			<h2 style={{marginBottom:'1rem'}}>Top Companies for MS in Computer Science in USA</h2>
			<p>Below are some of top companies for MS in Computer Science in USA</p>
			<Row className='pt-4'>
				<Col xs='12' sm='6' md='4' lg='4' className='d-flex justify-content-center my-4'>
					<div className={styles.company}>
						<img style={{ width: '-webkit-fill-available',maxWidth:'250px'}} src={logo} alt=""/>
					</div>
				</Col>
				<Col xs='12' sm='6' md='4' lg='4' className='d-flex justify-content-center my-4'>
					<div className={styles.company}>
						<img style={{ width: '-webkit-fill-available',maxWidth:'250px'}} src={logo} alt=""/>
					</div>
				</Col>
				<Col xs='12' sm='6' md='4' lg='4' className='d-flex justify-content-center my-4'>
					<div className={styles.company}>
						<img style={{ width: '-webkit-fill-available',maxWidth:'250px'}} src={logo} alt=""/>
					</div>
				</Col>
				<Col xs='12' sm='6' md='4' lg='4' className='d-flex justify-content-center my-4'>
					<div className={styles.company}>
						<img style={{ width: '-webkit-fill-available',maxWidth:'250px'}} src={logo} alt=""/>
					</div>
				</Col>
				<Col xs='12' sm='6' md='4' lg='4' className='d-flex justify-content-center my-4'>
					<div className={styles.company}>
						<img style={{ width: '-webkit-fill-available',maxWidth:'250px'}} src={logo} alt=""/>
					</div>
				</Col>

			</Row>
		</Container>
	</div>
  )
}

export default Companies