import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import userState from "../../types/UserState";

const AdminPage = (props: any) => {
  const { currentUser } = useSelector((state: userState) => state.user);
  const { ...config } = props.props;

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
