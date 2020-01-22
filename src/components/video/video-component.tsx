import React from "react";

import { Container } from "react-bootstrap";

const Video = () => (
  <Container>
    <video width="320" height="240" controls poster="talo1.png" hidden={false}>
      <source
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </Container>
);
export default Video;
