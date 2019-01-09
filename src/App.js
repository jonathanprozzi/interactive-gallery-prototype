import React, { Component } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCardGrid from "./components/ProjectCardGrid";
import ProjectModal from "./components/ProjectModal";
import Toggle from "./components/Toggle";
import { entries } from "./data";

class App extends Component {
  state = {
    entries: [],
    selectedCourse: "VectorFab"
  };

  selectCourse = courseName => {
    console.log(`Course toggled to: ${courseName.toLowerCase()}`);
    let filteredEntries = entries.filter(
      entry => entry.enrolledCourse.toLowerCase() === courseName.toLowerCase()
    );
    console.log(`filtering content for: ${courseName}`);
    console.log(filteredEntries);
    this.setState({
      selectedCourse: `${courseName.toLowerCase()}`,
      entries: filteredEntries
    });
  };

  render() {
    return (
      <AppWrapper>
        <Header selectCourse={this.selectCourse.bind(this)} />
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <ProjectModal
                on={on}
                toggle={toggle}
                entries={this.state.entries}
                selectedCourse={this.state.selectedCourse}
              />
            </React.Fragment>
          )}
        </Toggle>
        <ProjectCardGrid
          entries={this.state.entries}
          selectedCourse={this.state.selectedCourse}
        />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
`;
