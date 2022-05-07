import React from 'react';
import './Post.css';

const Post = ({
	displayName,
	username,
	text,
	verified,
	avatar,
	image

}) => {
	return (
		<div class='post'>
			<div class='post__avatar'>
				<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
			</div>
			<div class='post__body'>
				<div class='post__header'>
					<div class='post__header__text'>
						<h3>Rigz Carrington</h3> 
					</div>
					<div class='post__header__description'>
						<p>This is a test But I have to make it long enough to see how well the css is. dfagsasfgasfgsdfgsfdgs sdgsdg sdgsd </p>
					</div>
					<img src='https://media4.giphy.com/media/gd09Y2Ptu7gsiPVUrv/giphy.gif?cid=ecf05e47etacbs3h4wu9b6rl1hkq03ehz28rh4spn0r84y7c&rid=giphy.gif&ct=g' />
				</div>
			</div>
		</div>
	);
}

export default Post;