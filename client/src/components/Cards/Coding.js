import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useCollapse from "react-collapsed";
import { HiCode } from "react-icons/hi";

const Coding = () => {
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
          border: "6px solid rgba(7, 85, 236, 0.62)",
          boxShadow: "10px 8px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Card.Body>
          <div
            style={{
              width: "340px",
              height: "4rem",
              marginLeft: "-17px",
              marginTop: "-17px",
              background: "#0755EC",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <HiCode
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
            Coding
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              marginLeft: "5px",
              marginTop: "1rem",
            }}
          >
            <p>
              Coding is inextricably related to the act of creation. It's an
              enthralling subject that gives confidence to every youngster.
              <p {...getCollapseProps()}>
                Coding is the digital age's core language. It is the process of
                writing step-by-step instructions that a computer can comprehend
                and use to run its programmes. It has its own grammatical and
                syntactic structure.
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

export default Coding;
