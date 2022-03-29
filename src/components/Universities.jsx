import React from 'react'
import styles from '../assets/css/Components.module.css';
import {Container} from 'react-bootstrap';
import logo from '../assets/img/stanford (1).png';

const Universities = () => {
	const tab=[
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
		{'name':'Stanford University','rank':1,'fee':'$55,800 (approx40.24lks INR)'},
	]
  return (
	<div className={styles.row} style={{backgroundColor:'#e5e7eb'}}>
		<Container className="d-flex flex-column align-items-center">
		<div style={{borderBottom:'4.5px solid orangered',width:'100px',marginBottom:'0.5rem'}}></div>
			<h4 style={{marginBottom:'1rem'}}>Top Universities for MS in Computer Science in USA</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil, soluta  nemo culpa sapiente quos illum incidunt? Eaque, neque similique?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsa dicta repellat? Totam id molestiae dicta eveniet quaerat voluptate sint? Deserunt inventore earum commodi magni iste labore repellendus pariatur ipsum?</p>
			<table className='table text-muted'>
				<thead>
					<tr>
						<th>UNIVERSITY</th>
						<th>RANKING</th>
						<th>FEE</th>
					</tr>
				</thead>
				<tbody>
					{tab.map((item,index)=> <tr>
						<td><img style={{width:'28px',borderRadius:'50px',paddingRight:'7px'}} src={logo} alt="" />
							{item.name}</td>
						<td>{item.rank}</td>
						<td>{item.fee}</td>
					</tr> )}
				</tbody>
			</table>
		</Container>
	</div>
  )
}

export default Universities