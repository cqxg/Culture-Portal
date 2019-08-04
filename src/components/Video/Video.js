import React, { useState } from "react";
import ReactModal from "react-modal";
import Youtube from "react-youtube";
import getVideoId from "get-video-id";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Button } from "reactstrap";

import videoStyles from './video.module.less';


const Video = ({ url }) => {
    ReactModal.setAppElement("#___gatsby");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = event => {
        setIsModalOpen(true);
    };

    const handleModalClose = event => {
        setIsModalOpen(false);
    };

    return <>
            <Col lg={12} className={videoStyles.video}>
                <h1>YouTube</h1>
                <Button variant="primary" onClick={handleModalOpen} size="lg">
                    Watch the video
          </Button>
            </Col>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Director's videos"
                className={videoStyles.modal}
                overlayClassName={videoStyles.overlay}
            >
                <Youtube className={videoStyles.youtube} videoId={getVideoId(url).id} />
            </ReactModal>
        </>    
};

export default Video;
