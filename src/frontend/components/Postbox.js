import React from 'react';
import './Postbox.css';

const Postbox = () =>  {
	return(
		<div class='postbox'>
			<form>
				<div class='postbox__input'> 
					<div class='chat__avatar'>
						<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>	
					</div>
					<input type='text-area' placeholder='     chat here'></input>
				</div>
			</form>
		</div>
	);
}

export default Postbox;