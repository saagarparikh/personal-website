import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton, Button } from 'react-mdl';
import arrow from './arrow.png'
import Lightbox from 'fslightbox-react';


class Images extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      currImage: "",
      img1: "https://i.pinimg.com/originals/00/bc/38/00bc38082fe941dbef5173b8bd7ad193.jpg",
      img2: "https://content-images.p-cdn.com/images/public/int/0/0/2/2/00602517412200_1080W_1080H.jpg",
      img3: "https://sslj.ulximg.com/image/1200x1200crop/cover/1576820219_dbc720673fa0b8e7e08976dcf101fcf8.jpg/79fdc4021f18e062ce0c76f508280c80/1576820219_ae754eff6557f8de4864dfaf40f27111.jpg",
      img4: "https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png",
      img5: "https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg",
      img6: "https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg",

    };
}

  toggleLightbox = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  enlargeImage = (param) => (e) => {
    this.setState({
      currImage: param,
      isVisible: true,
    });
  }



  render(){
    const displayLightbox = () =>{
      if(this.state.isVisible){
        return <div className="bg-modal" onClick = {this.toggleLightbox}>
          <img className="modal-content" src={this.state.currImage} />
        </div>
      }
    }
    return(
      <div className = "images-body">
        <a href="#top"><button id="btnScrollToTop"><img src={arrow}/></button></a>
        <h1 className = "images-h1" id = "top">My Favorite Albums</h1>
        <Grid container spacing={24} direction="column" align="center">
          <Cell col={4}>
            <h4>AT.LONG.LAST.ASAP - ASAP Rocky</h4>
            <div class="grid-box"><img onClick = {this.enlargeImage(this.state.img1)} className="image" src="https://i.pinimg.com/originals/00/bc/38/00bc38082fe941dbef5173b8bd7ad193.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>Graduation - Kanye West</h4>
            <div class="grid-box"><img onClick = {this.enlargeImage(this.state.img2)} className="image" src="https://content-images.p-cdn.com/images/public/int/0/0/2/2/00602517412200_1080W_1080H.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>So much Fun - Young Thug</h4>
            <div class="grid-box"><img onClick = {this.enlargeImage(this.state.img3)} className="image" src="https://sslj.ulximg.com/image/1200x1200crop/cover/1576820219_dbc720673fa0b8e7e08976dcf101fcf8.jpg/79fdc4021f18e062ce0c76f508280c80/1576820219_ae754eff6557f8de4864dfaf40f27111.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>If You're Reading This It's Too Late - Drake</h4>
            <div class="grid-box"><img onClick = {this.enlargeImage(this.state.img4)} className="image" src="https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png" /></div>
          </Cell>

          <Cell col={4}>
            <h4>Die Lit - Playboi Carti</h4>
            <div class="grid-box"><img onClick = {this.enlargeImage(this.state.img5)} className="image" src="https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg" /></div>
          </Cell>

          <Cell col={4}>
            <h4>Watch the Throne - Jay-Z and Kanye West</h4>
            <div class="grid-box"><img onClick = {this.enlargeImage(this.state.img6)} className="image" src="https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg" /></div>
          </Cell>

        </Grid>
        {displayLightbox()}
      </div>
    )
  }
}

export default Images;
