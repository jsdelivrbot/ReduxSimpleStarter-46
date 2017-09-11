import React from 'react';

import VideoListItem from './video_list_item';


const VideoList = (props) => {


const VideoItems = props.videos.map(  (video) => {
return <VideoListItem video={video } key={ video.etag} onVideoSelect={ props.onVideoSelect }  />
}  );



return (

	<ul className = "col-md4 list-group">
		{VideoItems}
	</ul>
	);
};


export default VideoList;
