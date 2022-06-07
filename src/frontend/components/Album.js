import React from 'react';
import './Album.css';
import { useLocation } from 'react-router-dom';
import { ClockCircleOutlined } from '@ant-design/icons';

const Album = () => {

	const {state: album} = useLocation();
	

	return (
		<div class='all__pages'>
			<div class='topNav'>

			</div>

			<div class="albumContent">
				<div class="topBanner">
					<img src={album.image} alt="albumCover" class="albumCover" ></img>
					<div class="albumDetails">
						<div class="title">{album.title}</div>
						<div class="artist">{album.artist}</div>
						<div>
							{album.year} - {album.length} Songs
						</div>
						<div class="buttonArea">
							<button class="playButton" onClick={()=>console.log('starting music')} >
								PLAY
							</button>
							<button class="purchaseButton" onClick={()=>console.log('purchased')} >
								BUY NOW
							</button>
						</div>
					</div>
				</div>
				<div class='tableHeader'>
					<div class="'numberHeader" >#</div>
					<div class="titleHeader" >Title</div>
					<div class="numberHeader" ><ClockCircleOutlined /></div>
				</div>
			</div>
		</div>
	);
	
}

export default Album;


