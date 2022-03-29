import React from 'react'
import styles from '../assets/css/Components.module.css';
import {Container,Row,Col} from 'react-bootstrap';


const Requirements = () => {
	const data={
		'degree':'A four year degree in Computer Science or equivalent experience with a minimum of 65%',
		'IELTS':'A minimum score of 6.5 in the IELTS Academic Test',
		'TOEFL':'A minimum score of 80 in the TOEFL General Test or a minimum score of 90 in the TOEFL Academic Test', 
		'GRE':'A minimum score of 330 in the GRE General Test',
		'GMAT':'A minimum score of 700 in the GMAT General Test (or equivalent) and a minimum score of 30 in the GMAT Quantitative and Verbal Test',
	}
  return (
	<div className={styles.row}>
		<Container className="d-flex flex-column align-items-center">
			<div style={{borderBottom:'4.5px solid orangered',width:'100px',marginBottom:'0.5rem'}}></div>
			<h3 style={{marginBottom:'1rem'}}> Requirements</h3>
			{Object.keys(data).map((item,index)=>
				<Row className="w-100 pb-2">
					<Col md='2' className="mx-1 d-flex align-items-center justify-content-center" style={{backgroundColor: '#e5e7eb',borderRadius:'5px'}}>
						<p style={{marginBottom:'0px'}}>{item}</p>
					</Col>
					<Col md='2' className="mx-1 d-flex align-items-center justify-content-center"  style={{backgroundColor: '#e5e7eb',borderRadius:'5px',width:'80%'}}>
						<p style={{margin:'1rem 0rem'}}>{data[item]}</p>
					</Col>
				</Row>
			)}
		</Container>
	</div>
  )
}

export default Requirements