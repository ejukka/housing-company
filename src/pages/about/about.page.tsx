import React from "react";
import { ListGroup } from "react-bootstrap";
import GoogleMapResult from "../../components/google-map/google-map.component";

const config = {
  column1: `${process.env.REACT_APP_ABOUT_COLUMN1_HEADER_TEXT}`,
  column2: `${process.env.REACT_APP_ABOUT_COLUMN2_HEADER_TEXT}`,
  column3: `${process.env.REACT_APP_ABOUT_COLUMN3_HEADER_TEXT}`,
  column1_text: `${process.env.REACT_APP_ABOUT_COLUMN1_HEADER_TEXT2}`,
  column2_text: `${process.env.REACT_APP_ABOUT_COLUMN2_HEADER_TEXT2}`,
  column3_text: `${process.env.REACT_APP_ABOUT_COLUMN3_HEADER_TEXT2}`,
  list1: `${process.env.REACT_APP_ABOUT_LIST1}`,
  list1_text: `${process.env.REACT_APP_ABOUT_LIST1_TEXT}`,
  list2: `${process.env.REACT_APP_ABOUT_LIST2}`,
  list2_text: `${process.env.REACT_APP_ABOUT_LIST2_TEXT}`,
  list3: `${process.env.REACT_APP_ABOUT_LIST3}`,
  list3_text: `${process.env.REACT_APP_ABOUT_LIST3_TEXT}`,
  list4: `${process.env.REACT_APP_ABOUT_LIST4}`,
  list4_text: `${process.env.REACT_APP_ABOUT_LIST4_TEXT}`,
  list5: `${process.env.REACT_APP_ABOUT_LIST5}`,
  list5_text: `${process.env.REACT_APP_ABOUT_LIST5_TEXT}`
};

const AboutPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm">{config.column1}</div>
      <div className="col-sm">{config.column2}</div>
      <div className="col-sm">{config.column3}</div>
    </div>
    <div className="row">
      <div className="col-sm">{config.column1_text}</div>
      <div className="col-sm">{config.column2_text}</div>
      <div className="col-sm">{config.column3_text}</div>
    </div>
    <br />
    <ListGroup>
      <ListGroup.Item>
        <a target="_blank" rel="noopener noreferrer" href={config.list1}>
          {config.list1_text}
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a target="_blank" rel="noopener noreferrer" href={config.list2}>
          {config.list2_text}
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a target="_blank" rel="noopener noreferrer" href={config.list3_text}>
          {config.list3_text}
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a target="_blank" rel="noopener noreferrer" href={config.list4}>
          {config.list4_text}
        </a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a target="_blank" rel="noopener noreferrer" href={config.list5}>
          {config.list5_text}
        </a>
      </ListGroup.Item>
    </ListGroup>
    <div>
      <GoogleMapResult
        containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </div>
);

export default AboutPage;
