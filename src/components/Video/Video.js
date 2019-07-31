import React from "react"
import ReactModal from "react-modal"
import Youtube from "react-youtube"
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
      videoId: props.videoId
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
        <Col lg={12} className={videoStyles.video}>
          <h1>Youtube</h1>
          <Button variant="primary" onClick={this.handleModalOpen} size="lg">
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
          <Youtube className={videoStyles.youtube} videoId={this.state.videoId} />
        </ReactModal>
      </>
    )
  }
}

export default Video
