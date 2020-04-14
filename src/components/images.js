import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';

class Images extends Component{
  render(){
    return(
      <div className = "images-body">

        <div><h1 className = "images-h1">My Favorite Albums</h1></div>
        <Grid container spacing={24} direction="column" align="center">
          <Cell col={4}>
            <h4>AT.LONG.LAST.ASAP - ASAP Rocky</h4>
            <div class="grid-box"><img src="https://i.pinimg.com/originals/00/bc/38/00bc38082fe941dbef5173b8bd7ad193.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>Graduation - Kanye West</h4>
            <div class="grid-box"><img src="https://content-images.p-cdn.com/images/public/int/0/0/2/2/00602517412200_1080W_1080H.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>So much Fun - Young Thug</h4>
            <div class="grid-box"><img src="https://sslj.ulximg.com/image/1200x1200crop/cover/1576820219_dbc720673fa0b8e7e08976dcf101fcf8.jpg/79fdc4021f18e062ce0c76f508280c80/1576820219_ae754eff6557f8de4864dfaf40f27111.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>If You're Reading This It's Too Late - Drake</h4>
            <div class="grid-box"><img src="https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png" /></div>
          </Cell>

          <Cell col={4}>
            <h4>Die Lit - Playboi Carti</h4>
            <div class="grid-box"><img src="https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>Watch the Throne - Jay-Z and Kanye West</h4>
            <div class="grid-box"><img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg" /></div>
          </Cell>

        </Grid>

      </div>
    )
  }
}

export default Images;
