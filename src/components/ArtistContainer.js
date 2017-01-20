import React from "react";
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

import ReadMore from './ReadMore.js';
import StringToColor from '../js/colors/StringToColor';
import LightenDarkenColor from '../js/colors/LightenDarkerColor';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: "100%",
    overflowY: 'auto',
  },
  card: {
    width: 600,
    float: "right",
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

function handleTouchTap() {
return "";
}


class ArtistContainer extends React.Component {
  render(){
    const { name, bio, similar, tags, image } = this.props.data;
    return(
      <div>
      <Paper zDepth={1} >
          <Card style={styles.card}>

            <CardHeader
              title={name}
              avatar={image[0]['#text']}
            />

            <CardMedia
              overlay={<CardTitle title={name}
              subtitle={<div  dangerouslySetInnerHTML={{ __html: bio.summary }}></div>} />}
            >
              <img src={image[5]['#text']} role="presentation" />
            </CardMedia>

            <CardText>
              <ReadMore>
              <div  dangerouslySetInnerHTML={{ __html: bio.content }}></div>
               </ReadMore>
            </CardText>

            <CardActions>
            <div style={styles.wrapper}>
              {tags.tag.map((tag, i)=>
                <Link key={i} to={`/tags/${tag.name}`} >

                  <Chip
                  labelColor={LightenDarkenColor(StringToColor(tag.name),100)}
                  backgroundColor={StringToColor(tag.name)}
                  onTouchTap={handleTouchTap}
                  style={styles.chip}
                  >
                  {tag.name}

                  </Chip>
                </Link>
              )}
              </div>
            </CardActions>

          </Card>

        <div style={styles.root}>
          <GridList
            padding={10}
            cols={2}
            cellHeight={90}
            style={styles.gridList}
          >
            <Subheader>
              <CardHeader title={"Similar Artists"}/>
              { similar.artist.length === 0 &&
                <h2> No similar artists</h2>
              }
            </Subheader>

            {similar.artist.map((tile,i) => (
              <Link key={i} to={`/artists/${tile.name}`}>
                <GridTile
                  key={i}
                  title={tile.name}>
                  <img src={tile.image[5]['#text']} role="presentation"/>
                </GridTile>
              </Link>
            ))}

          </GridList>

        </div>

      </Paper>
      </div>
    );
  }

}



export default ArtistContainer;
