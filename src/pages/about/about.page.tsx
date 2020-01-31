import React from "react";
import { ListGroup } from "react-bootstrap";
import GoogleMapResult from "../../components/google-map/google-map.component";

const AboutPage = (props: any) => {
  const { ...config } = props.props;
  return (
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
};

export default AboutPage;
