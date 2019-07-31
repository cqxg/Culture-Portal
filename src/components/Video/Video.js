import React from "react"
import ReactModal from "react-modal"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Button } from "reactstrap"
import FormattedMessage from "gatsby-plugin-intl"
import videoStyles from './video.module.less'

ReactModal.setAppElement("#___gatsby")

class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  handleModalOpen = event => {
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <>
        <Col>
          <h1>Youtube</h1>
          <Button variant="primary" onClick={this.handleModalOpen}>
            Watch the video
          </Button>
        </Col>

        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Director's videos"
          className={videoStyles.modal}
          overlayClassName={videoStyles.overlay}
        >
          <h2>Video</h2>
          <button onClick={this.handleModalClose}>Close Modal</button>
        </ReactModal>
      </>
    )
  }
}

export default Video
