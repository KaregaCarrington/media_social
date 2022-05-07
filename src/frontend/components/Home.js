import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Postbox from './Postbox.js';
import Post from './Post.js';
import { Tabs } from 'antd';
import { MessageOutlined, RightCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { library } from '../../helpers/albumList';

const artistName = document.getElementById('artistName')
const songName = document.getElementById('songName')
const albumName = document.getElementById('albumName')
const price = document.getElementById('Price')
const itemFile = document.getElementById('itemFile')

const { TabPane } = Tabs;

const Home = () => {
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
		    		<input type="text" id="artistName" placeholder="artist name"></input>
		    		<input type="text" id="songName" placeholder="song name"></input>
		    		<input type="text" id="albumName" placeholder="album name"></input>
		    		<input type="number" id="price" placeholder="price"></input>
		    		<label for="createItemFile" >Select File</label>
		    		<input type="file" id='itemFile' ></input>
		    		<button id="btnCreateItem">Create your NFT</button>
		    		<button id="btnCloseItem">Close</button>
		    	</div>

		    </TabPane>
		</Tabs>
    </div>
  );
};

export default Home;