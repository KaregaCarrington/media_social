import React from 'react';
import './SidebarOption.css'
	
const SidebarOption = ({text}) => {
	return(
		<div className='sidebarOption'>
			<h2>{text}</h2>
		</div>
	);
}
export default SidebarOption;