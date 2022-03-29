import React,{useEffect, useState} from 'react'
import styles from '../assets/css/Components.module.css';
import {Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';


const Salary = () => {
	const [arr,setArr]=useState([]);

	useEffect(()=>{
		axios.get('https://ubergrad-assign.herokuapp.com/jobs').then(data=>{
			console.log(data.data())
			setArr(data.data());
		})
	})
	// const arr=['Application Developer','Data Analyst','Database Administrator','Forensic Computer Analysis','Game Designer','Game Developer','IT Consultant','UX Designer','Multimedia Programmer','Software Designer','VFX Artist','Web Designer','Web Developer']
  return (
	<div className={styles.row} style={{backgroundColor:'#e5e7eb'}}>
		<Container className='d-flex flex-column align-items-center'>
			<div style={{borderBottom:'4.5px solid orangered',width:'100px',marginBottom:'0.5rem'}}></div>
			<h2 style={{marginBottom:'1rem'}}>Job & Salary prospects</h2>
			<p className='text-muted' style={{fontWeight:'400px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia blanditiis laudantium mollitia enim magni laborum corrupti corporis reprehenderit excepturi aperiam debitis, nulla tempora aliquid ipsum vitae natus accusamus voluptas obcaecati.lore Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem repellendus consequuntur esse beatae laborum? Repellat, sed repellendus. Consequatur cumque tenetur placeat beatae harum vero obcaecati? Aliquid quasi possimus a voluptatem?</p>
			<ul>
				<Row>
				{arr.map((item,index)=>
				<Col key={index} xs='6' sm='6' md='3' lg='3' className='my-3'>
					<li key={index} className={" mx-3"}>
						<p style={{width:'fit-content',fontWeight:'400'}}>{item}</p>
					</li>
				</Col>
				)}
				</Row>
			</ul>
			<p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nesciunt non tenetur ratione. Veritatis quisquam doloribus voluptatem dolores, dolorem facere omnis? Veniam est at sint molestias accusantium. Sapiente, repellendus cum.</p>
			<p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint voluptatum praesentium dolorem asperiores voluptatem beatae ipsam atque eum corrupti molestiae nesciunt, nostrum fuga cumque nulla suscipit. Ipsum magni fugit nemo!

			</p>
			</Container>
	</div>
  )
}

export default Salary