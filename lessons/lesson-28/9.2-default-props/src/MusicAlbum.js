import React from 'react';

const MusicAlbum = (props) => {
    return (
        <div className='album' style={{background: `url('${props.cover}') no-repeat center center/cover`}}>
           <h1>{props.title}</h1>
           <h4>{props.artist}</h4>
           <p>{props.numOfSong} songs</p>
           <p>length :{props.length}</p>
           <a href={props.link}>click to listen</a>
        </div>
    );
}
MusicAlbum.defaultProps  = {
    title: 'some title',
    cover: 'https://source.unsplash.com/random',
    artist: 'zohar argovs',
    length: '00:00',
    numOfSong: '3',
    link: 'http://youtube.com/random'

  };
export default MusicAlbum;
