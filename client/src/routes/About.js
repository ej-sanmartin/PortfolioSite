import React, { Component } from 'react';
import MusicCards from "../components/MusicCards";
import SewingCards from "../components/SewingCards";
import YoutubeCards from "../components/YoutubeCards";
import { Container, Row, Col } from "reactstrap";

// setting paths to images
const minkyCover = require("../images/minky_album_cover-min.jpg");
const songadayCover = require("../images/song_a_day_album_cover-min.jpg");
const avocadoPlushie = require("../images/avocado_plushie-min.jpg");
const eggPlushie = require("../images/egg_plushie-min.jpg");
const youtubeVideoFirstVideo = require("../images/edgar_youtube_my_stoftware_developer_story-min.png");

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      music: [
        {
          cover: minkyCover,
          alt: "Minky Album Cover",
          album: "Minky",
          date: "April 2018",
          description: "Indie Folk Songs. I had fun writing these songs and aimed to write in multiple instruments. Here, I played the guitar, piano, and ukulele. I had, also, tried to write a different yet catchy sound for each song.",
          link: "https://edgarhawkins.bandcamp.com/album/minky"
        },
        {
          cover: songadayCover,
          alt: "Song a Day: Year 1 Album Cover",
          album: "Song a Day: Year 1",
          date: "2015",
          description: "I wrote a song a day for every day of 2015. It was an incredibly long year, but it was super fulfilling. I plan to take up this challenge again, soon!",
          link: "https://edgarhawkins.bandcamp.com/album/song-a-day-year-1"
        }
      ],
      sewing: [
        {
          image: avocadoPlushie,
          alt: "Avocado Plushie",
          title: "Avocado",
          description: "First plush doll made. Hand sewn winter-fleece and felt. Face hot glued. Polyester fiber filling."
        },
        {
          image: eggPlushie,
          alt: "Egg Plushie",
          title: "Egg",
          description: "Hand sewn winter-fleece and felt. Polyester fiber filling."
        }
      ],
      video: [
        {
          image: youtubeVideoFirstVideo,
          alt: "Youtube Thumbnail for 'My Software Developer story'",
          title: "Hello World! | My Software Developer Story (so far)",
          description: "Here's my first video on youtube describing myself and my journey so far to becoming a software developer. More to come.",
          link: "https://www.youtube.com/watch?v=w0jqdUuJGTs"
        }
      ],
    };
  }

  render() {
    const wrapper = {
      margin: "auto",
      marginTop: "1em"
    };

    const descriptionStyle = {
      textAlign: "center",
      marginTop: "2em",
      background: "#F5E3FB",
      padding: "0.5em"
    };

    let musicCards = this.state.music.map((music, i) => {
      return (
        <Col sm="5" style={wrapper} key={i}>
          <MusicCards music={music} />
        </Col>
      );
    });

    let sewingCards = this.state.sewing.map((sewing, i) => {
      return (
        <Col sm="5" style={wrapper} key={i}>
          <SewingCards sewing={sewing} />
        </Col>
      );
    });

    let youtubeCards = this.state.video.map((video, i) => {
      return (
        <Col sm="6" style={wrapper} key={i}>
          <YoutubeCards video={video} />
        </Col>
      );
    });

    return (
      <Container>
        <div>
          <h1 style={{ marginTop: ".5em",
                       marginBottom: ".25em" }}>
            About Me
          </h1>
          <div style={descriptionStyle}>
            <p>Proud Peruvian from CT, now living in NYC. React Fullstack Developer. Also, not afraid to dabble with a multitude of technologies, such as mobile development, game development, blockchain, and machine learning.</p>
            <p>Gonna Google me? I already did that for you! Below are some of the non-technical projects I do that you could find on the web.</p>
          </div>
        </div>
        <h3 style={{marginTop: "0.5em", fontWeight: "bold" }}>Music</h3>
        <Row>
          {musicCards}
        </Row>
        <p style={descriptionStyle}>
          I am passionate about music and singing. And I love writing songs. You can always find me humming or posting a cover on my instagram when I am not writing a song. My songs can be found <a style={{ color: "#BF84D4" }} href="https://edgarhawkins.bandcamp.com/" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <h3 style={{marginTop: "2em", fontWeight: "bold" }}>Sewing</h3>
        <Row>
          {sewingCards}
        </Row>
        <p style={descriptionStyle}>
          A calm and relaxing passtime. Soon, I plan on building an ecommerce site to sell my handmade plush dolls!
        </p>
        <h3 style={{marginTop: "2em", fontWeight: "bold" }}>YouTube</h3>
        <Row>
          {youtubeCards}
        </Row>
        <p style={descriptionStyle}>
          Recently started a youtube channel to vlog about my life as a software developer. I will create content to share my life experiences, advices, and to demystify the technical aspects of progamming through tutorials.
        </p>
      </Container>
    );
  }
};
