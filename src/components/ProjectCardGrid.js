import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

class ProjectCardGrid extends Component {
  componentDidUpdate() {
    console.log("I updated!");
  }
  render() {
    return (
      <ContentWrapper>
        <MainGrid>
          {this.props.entries.map(entry => (
            <ProjectCard
              key={entry.id}
              id={entry.id}
              imgSource={entry.imgSource}
              enrolledCourse={entry.enrolledCourse}
              youthName={entry.youthName}
              projectTitle={entry.projectTitle}
              projectSemester={entry.projectSemester}
              makerStatement={entry.makerStatement}
            />
          ))}
        </MainGrid>
      </ContentWrapper>
    );
  }
}

ProjectCardGrid.propTypes = {
  entries: PropTypes.array.isRequired,
  imgSource: PropTypes.string.isRequired,
  selectedCourse: PropTypes.string.isRequired,
  enrolledCourse: PropTypes.string.isRequired,
  youthName: PropTypes.string.isRequired,
  projectSemester: PropTypes.string.isRequired
};

ProjectCardGrid.defaultProps = {
  entries: ["Waiting for data", "Waiting for data"],
  imgSource: "/images/tester-card.jpg",
  selectedCourse: "VectorFab",
  enrolledCourse: "VectorFab",
  youthName: "DHF Youth",
  projectSemester: "Fall 2018"
};

export default ProjectCardGrid;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 10vh auto;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2vw;
  grid-row-gap: 10vh;
  margin-top: 5rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
