import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useCollapse from "react-collapsed";
import { GiSkills } from "react-icons/gi";

const Skill = () => {
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
          border: "6px solid rgba(36, 234, 3, 0.66)",
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
              background: "#24EA03",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <GiSkills
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
            Skill Curriculum
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "1rem",
              marginLeft: "5px",
              marginTop: "1rem",
            }}
          >
            <p>
              Emulating the skill-based model of education as per NEP 2020 and
              CBSE guidance, we have also introduced the
              <p {...getCollapseProps()}>
                skill subjects at the secondary level. Choosing any one Skill
                subject at this level can help the child to pursue what truly
                interests or pleases him or her. In this way, students would be
                able to hone their skills.
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

export default Skill;
