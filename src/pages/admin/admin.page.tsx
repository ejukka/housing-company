import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import userState from "../../types/UserState";

const config = {
  column1: `${process.env.REACT_APP_ADMIN_COLUMN1_HEADER_TEXT}`,
  column2: `${process.env.REACT_APP_ADMIN_COLUMN2_HEADER_TEXT}`,
  column3: `${process.env.REACT_APP_ADMIN_COLUMN3_HEADER_TEXT}`,
  column1_text: `${process.env.REACT_APP_ADMIN_COLUMN1_HEADER_TEXT2}`,
  column2_text: `${process.env.REACT_APP_ADMIN_COLUMN2_HEADER_TEXT2}`,
  column3_text: `${process.env.REACT_APP_ADMIN_COLUMN3_HEADER_TEXT2}`,
  list1: `${process.env.REACT_APP_ADMIN_LIST1}`,
  list1_text: `${process.env.REACT_APP_ADMIN_LIST1_TEXT}`
};

const AdminPage = () => {
  const { currentUser } = useSelector((state: userState) => state.user);

  if (currentUser) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">{config.column1}</div>
          <div className="col-sm">{config.column2}</div>
          <div className="col-sm">{config.column3}</div>

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
        </ListGroup>
      </div>
    );
  } else {
    return <div>you must log in</div>;
  }
};

export default AdminPage;
