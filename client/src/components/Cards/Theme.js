import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useCollapse from "react-collapsed";
import { FaChalkboardTeacher } from "react-icons/fa";
const Theme = () => {
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
          border: "6px solid rgba(244, 59, 0, 0.63)",
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
              border: "1px solid rgba(244, 59, 0, 0.63)",
              backgroundColor: "rgba(244, 59, 0, 0.91)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <FaChalkboardTeacher
              style={{
                width: "8rem",
                height: "3rem",
                marginTop: "0.5rem",
                marginLeft: "7rem",
              }}
            />
          </div>
          <Card.Title
            style={{
              marginLeft: "5px",
              marginTop: "10px",
              fontSize: "1.3rem",
            }}
          >
            Theme Based Curriculum
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              marginLeft: "5px",
              marginTop: "0.9rem",
            }}
          >
            <p>
              In our school, theme-based learning is a common approach to
              organise the curriculum. It entails your youngster’s
              <p {...getCollapseProps()}>
                learning about a particular topic. It's a fantastic technique to
                grab the interest of young students.
              </p>
            </p>
          </Card.Text>
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
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Theme;
