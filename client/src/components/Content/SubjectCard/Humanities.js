import React, { useState } from "react";
import useCollapse from "react-collapsed";
import { Card, Button } from "react-bootstrap";
const Humanities = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          border: "6px solid #9ee08d",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            height: "4rem",
            background: "#4eb833",
            width: "20rem",
            marginLeft: "-6px",
            marginTop: "-6px",
            borderRadius: "10px",
            border: "6px solid #9ee08d",
          }}
        >
          <p
            style={{
              marginTop: ".4rem",
              fontSize: "1.4rem",
              textAlign: "center",
              color: "white",
            }}
          >
            <b>Humanities</b>
          </p>
        </div>
        <Card.Body>
          <div>
            <Card.Title>Compulsory Subjects</Card.Title>
            <Card.Body style={{ marginTop: "-10px" }}>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Economics / Home Science</li>
                <li>Psychology / Political Science</li>
              </ul>
            </Card.Body>
          </div>
          <div {...getCollapseProps()}>
            <Card.Title>Optional Subjects</Card.Title>
            <Card.Body>
              <ul>
                <li>
                  Computer Science / Physical Education / Painting / Psychology
                  / Maths
                </li>
                <li>Mass Media</li>
                <li>Web Application</li>
                <li>Physical Education</li>
                <li>Painting</li>
              </ul>
            </Card.Body>
          </div>
        </Card.Body>
        <Button
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
          style={{
            marginLeft: "60%",
            width: "7rem",
            height: "2.5rem",
            borderRaduis: "20px",
            border: "none",
            backgroundColor: "#081b24",
            marginTop: "-2rem",
            marginBottom: "1rem",
          }}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
      </Card>
    </div>
  );
};

export default Humanities;
