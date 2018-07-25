import React, { Component } from 'react';
import MusicCards from "../components/MusicCards";
import SewingCards from "../components/SewingCards";
import minkyCover from "../images/minky_album_cover-min.jpg";
import songadayCover from "../images/song_a_day_album_cover-min.jpg";
import avocadoPlushie from "../images/avocado_plushie-min.jpg";
import eggPlushie from "../images/egg_plushie-min.jpg";
import { Container, Row, Col } from "reactstrap";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      music: [
        {
          cover: {minkyCover},
          alt: "Minky Album Cover",
          album: "Minky",
          date: "April 2018",
          description: "Indie Folk Songs. I had fun writing these songs and aimed to write in multiple instruments. Here, I played the guitar, piano, and ukulele. I had, also, tried to write a different yet catchy sound for each song.",
          link: "https://edgarhawkins.bandcamp.com/album/minky"
        },
        {
          cover: {songadayCover},
          alt: "Song a Day: Year 1 Album Cover",
          album: "Song a Day: Year 1",
          date: "2015",
          description: "I wrote a song a day for every day of 2015. It was an incredibly long year, but it was super fulfilling. I plan to take up this challenge again, soon!",
          link: "https://edgarhawkins.bandcamp.com/album/song-a-day-year-1"
        }
      ],
      sewing: [
        {
          image: {avocadoPlushie},
          alt: "Avocado Plushie",
          title: "Avocado",
          description: "First plush doll made. Hand sewn winter-fleece and felt. Face hot glued. Polyster fiber filling."
        },
        {
          image: {eggPlushie},
          alt: "Egg Plushie",
          title: "Egg",
          description: "Hand sewn winter-fleece and felt. Polyster fiber filling."
        }
      ]
    }
  }

  render() {
    let musicCards = this.state.music.map(music => {
      return (
        <Col sm="6">
          <MusicCards music={music} />
        </Col>
      )
    });

    let sewingCards = this.state.sewing.map(sewing => {
      return (
        <Col sm="6">
          <SewingCards sewing={sewing} />
        </Col>
      )
    });

    return (
      <Container>
        <div>
          <h1>About Me</h1>
          <p>Proud Peruvian from CT, now living in NYC. React-Redux Fullstack Developer. Also, am diving into Machine Learning and AI with Python.</p>
          <p>I am a life long learner.</p>
          <p>Gonna Google me? I already did that for you! Below are some of the non-technical projects I do that you could find on the web.</p>
        </div>
        <h3>Music</h3>
        <Row>
          {musicCards}
        </Row>
        <h3>Sewing</h3>
        <Row>
          {sewingCards}
        </Row>
        <p>Will be working on an ecommerce site to sell my handmade plush dolls!</p>
        <br />
      </Container>
    );
  }
};
