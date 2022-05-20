import React from 'react';
import { Link } from "react-router-dom";
import Moralis from 'moralis';
import { useMoralis } from "react-moralis";
import './Home.css';
import Postbox from './Postbox.js';
import Post from './Post.js';
import { Tabs } from 'antd';
import { MessageOutlined, RightCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { library } from '../../helpers/albumList';


const { TabPane } = Tabs;



const Home = () => {

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
		
		const artistName = document.getElementById('artistName');
		const songName = document.getElementById('songName');
		const albumName = document.getElementById('albumName');
		const price = document.getElementById('price');

		const metadata = {
			'artistName': artistName,
			'songName' : songName,
			'albumName' : albumName,
			'price' : price,
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
		await uploadMetadata(albumCover, music);
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
		      			<p>{e.title}</p>
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
		    		<input type="text" id="artistName" name="artistName" placeholder="artist name"></input>
		    		<input type="text" id="songName" placeholder="song name"></input>
		    		<input type="text" id="albumName" placeholder="album name"></input>
		    		<input type="number" id="price" placeholder="price"></input>
		    		
		    		<div id='uploads'>
		    			picture
		    			<input type="file" id='pictureInput'></input>
		    			music	
		    			<input type="file" id='musicInput'></input>
		    		</div>

		    		<button onclick="createNFT()">Create your NFT</button>
		    		<button id="btnCloseItem">Close</button>
		    	</div>
		    </TabPane>
			</Tabs>
    </div>
  );
};

export default Home;