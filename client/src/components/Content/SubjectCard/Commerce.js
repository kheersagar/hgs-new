import React, { useState } from "react";
import useCollapse from "react-collapsed";
import { Card, Button } from "react-bootstrap";
const Commerce = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse();
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          height: "20rem",
          boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
          border: "6px solid rgba(244, 59, 0, 0.63)",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            height: "4rem",
            background: "rgba(244, 59, 0, 0.91)",
            width: "20rem",
            marginLeft: "-6px",
            marginTop: "-6px",
            borderRadius: "10px",
            border: "6px solid rgba(244, 59, 0, 0.63)",
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
            <b>Commerce</b>
          </p>
        </div>
        <Card.Body>
          <div>
            <Card.Title>Compulsory Subjects</Card.Title>
            <Card.Body style={{ marginTop: "-10px" }}>
              <ul>
                <li>English</li>
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
              </ul>
            </Card.Body>
          </div>
          <div {...getCollapseProps()}>
            <Card.Title>Optional Subjects</Card.Title>
            <Card.Body>
              <ul>
                <li>Mathematics</li>
                <li>Computer Science</li>
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

export default Commerce;
