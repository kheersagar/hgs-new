import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useCollapse from "react-collapsed";
import { FaChalkboardTeacher } from "react-icons/fa";
const ExaminationCard = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div>
      <Card
        style={{
          width: "350px",
          height: "auto",
          marginTop: "2rem",
          borderRadius: "20px",
          border: props.border,
          boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Card.Body>
          <div
            style={{
              width: "340px",
              height: "3.9rem",
              marginLeft: "-17px",
              marginTop: "-17px",
              // border: props.border,
              backgroundColor: props.backgroundColor,
              color: "white",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            {" "}
            {props.title}
          </div>

          <Card.Text
            style={{
              fontSize: "1rem",
              marginLeft: "5px",
              marginTop: "0.9rem",
            }}
          >
            <p>
              {props.description}
              <p {...getCollapseProps()}>
                learning about a particular topic. It's a fantastic technique to
                grab the interest of young students.
              </p>
            </p>
          </Card.Text>
          <a href={props.path} target="_blank">
            <Button
              style={{
                marginLeft: "60%",
                width: "7rem",
                height: "2.5rem",
                borderRaduis: "20px",
                border: "none",
                backgroundColor: "#081b24",
              }}
            >
              Read More
            </Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExaminationCard;
