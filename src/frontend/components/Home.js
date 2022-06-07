import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Moralis from 'moralis';
import './Home.css';
import Postbox from './Postbox.js';
import Post from './Post.js';
import { Tabs } from 'antd';
import { MessageOutlined, RightCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { library } from '../../helpers/albumList';


const { TabPane } = Tabs;



const Home = () => {

	
	const artistName = useRef();

	const songName = useRef();

	const albumName = useRef();

	const yearDate = useRef();

	const priceAmount = useRef();


	const uploadImage = async () => {
		const pictureInput = document.getElementById('pictureInput');
		const data = pictureInput.files[0]
		const file = new Moralis.File(data.name, data)
		await file.saveIPFS();

		console.log(file.ipfs(), file.hash());
		return file.ipfs(); 
	}

	const uploadMusic = async () => {
		const musicInput = document.getElementById('musicInput');
		const data = musicInput.files[0]
		const file = new Moralis.File(data.name, data)
		await file.saveIPFS();

		console.log(file.ipfs(), file.hash());
		return file.ipfs(); 
	}

	const uploadMetadata = async (albumCover, music) => {
		
		const artistRef = artistName.current;
		const songRef = songName.current;
		const albumRef = albumName.current;
		const yearRef = yearDate.current;
		const priceRef = priceAmount.current;

		const metadata = {
			'artistName': artistRef,
			'songName' : songRef,
			'albumName' : albumRef,
			'year' : yearRef,
			'price' : priceRef,
			'image' : albumCover,
			'animation_url' : music
		}

		const file = new Moralis.File('file.json', {base64 : btoa(JSON.stringify(metadata))});
		await file.saveIPFS();

		console.log(file.ipfs());

	}

	const createNFT = async () => {
		const albumCover = await uploadImage();
		const music = await uploadMusic();
		library.push(await uploadMetadata(albumCover, music));
	}


  return (
    <div class='all__pages'>   	
    	<Tabs defaultActiveKey="1" centered>	
		    <TabPane
		      tab={
		        <span>
		          <MessageOutlined />
		          Chat
		        </span>
		      }
		      key="1"
		    >

		      < Postbox />
		      < Post />
		      < Post />
		      < Post />
		      < Post />
	

		    </TabPane>
		    <TabPane
		      tab={
		        <span>
		          <RightCircleOutlined />
		          Music
		        </span>
		      }
		      key="2"
		    >
		      <div class='albums'>
		      	{library.map((e) => (
		      		<Link to='/album' state={e} class='albumSelection' >
		      			<img src={e.image} alt='album cover' style={{ width: '150px', marginBottom: '10px' }}></img>
		      			<p>{e.albumName}</p>
		      		</Link>
		      	))};
		      </div>
		    </TabPane>
		    <TabPane
		      tab={
		        <span>
		          <UploadOutlined />
		          Upload
		        </span>
		      }
		      key="3"
		    >
		    	<div id="createItem">
		    		<h4>Create Item</h4>
		    		<input ref={artistName} placeholder="artist" type="text"></input>
		    		<input ref={songName} type="text" placeholder="song"></input>
		    		<input ref={albumName} type="text" placeholder="album"></input>
		    		<input ref={yearDate} type="number" placeholder="year"></input>
		    		<input ref={priceAmount} type="number" placeholder="price"></input>
		    		
		    		<div id='uploads'>
		    			picture
		    			<input type="file" id='pictureInput'></input>
		    			music	
		    			<input type="file" id='musicInput'></input>
		    		</div>

		    		<button onClick={createNFT}>Create your NFT</button>
		    		<button id="btnCloseItem">Close</button>
		    	</div>
		    </TabPane>
			</Tabs>
    </div>
  );
};

export default Home;