import React from "react";
import { Link } from 'react-router';


class ArtistContainer extends React.Component {

  render(){
  const { name, bio, similar, tags } = this.props.data
    return(
      <div>
        <h1>{name}</h1>
        <p>{bio.content}</p>

        <ul>
          <li> tags</li>
          {tags.tag.map((tag, i)=>
            <li key={i}>
              <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
            </li>
          )}
        </ul>

        <ul>
          <li> similar artists</li>
          {similar.artist.map((artist, i)=>
            <li key={i}>
              <Link to={`/artists/${artist.name}`}>{artist.name}</Link>
            </li>
          )}
        </ul>


      </div>
    );
  }

}



export default ArtistContainer;
