import React, { Component } from "react"
import styled from "styled-components"
import AJob from "../components/AJob"
import Modal from "../components/Modal"
import { SEO } from "../components/seo"
import experienceDataArray from "../../static/experienceData.json"

export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalDetails: {},
    }
  }

  modalOnClick = modalData => {
    this.setState({
      modalDetails: modalData,
      showModal: true,
    })
    document.body.classList.add("no-scroll")
    const projectArray = document.getElementsByClassName("project")
    for (var i = 0; i < projectArray.length; i++) {
      projectArray[i].pause()
    }
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
    document.body.classList.remove("no-scroll")
    const projectArray = document.getElementsByClassName("project")
    for (var i = 0; i < projectArray.length; i++) {
      projectArray[i].play()
    }
  }

  render() {
    return (
      <>
        <Modal
          modalDetails={this.state.modalDetails}
          closeModal={this.closeModal}
          showModal={this.state.showModal}
        />
        <ExperienceSection>
          <div className="u-center-text">
            <h2 className="heading" id="applications">
              Experience
            </h2>
          </div>
          {experienceDataArray.map(aJob => (
            <AJob
              aJob={aJob}
              key={aJob.name}
              modalOnClick={this.modalOnClick}
              showModal={this.state.showModal}
            />
          ))}
        </ExperienceSection>
      </>
    )
  }
}

export const Head = () => (
  <SEO title="Jared Rothenberg | Experience" />
)

const ExperienceSection = styled.section`
    padding: 10rem 0 5rem 0;


  .u-center-text {
    text-align: center;
  }

  .heading {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    color: black;
    background: -webkit-linear-gradient(left, rgb(102, 201, 255), rgb(120, 139, 249));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 3rem;

    @media (max-width: 56.25em) {
      font-size: 4rem;
    }
  }
`