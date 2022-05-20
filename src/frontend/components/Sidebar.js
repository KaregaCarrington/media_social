import React from 'react';
import SidebarOption from './SidebarOption.js';
import './Sidebar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Sidebar = () => {

	return (
		<div class='sidebar' >
      					
        	<Link to="/">
    			<SidebarOption text='Home' />
  			</Link>
     		<Link to="/collection">
    			<SidebarOption text='Collection' />
  			</Link>
  			<Link to="/createnft">
    			<SidebarOption text='Add Music' />
  			</Link>

		</div>
	);
}

export default Sidebar;