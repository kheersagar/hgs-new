import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useCollapse from "react-collapsed";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Finance = () => {
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
          border: "6px solid #fa6487",
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
              background: "#f53864",
              border: "1px solid #fa6487",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <BsFillJournalBookmarkFill
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
            Financial Literacy
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              marginLeft: "5px",
              marginTop: "1rem",
            }}
          >
            <p>
              Our students learn how to create a bank account, how to use a
              debit card, how to utilise online banking, and about
              <p {...getCollapseProps()}>
                various banking and financial products. Students should acquire
                financial management skills such as saving money, starting a
                company, and determining life objectives.
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
            className="hover-overlay shadow-1-strong rounded"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Finance;
