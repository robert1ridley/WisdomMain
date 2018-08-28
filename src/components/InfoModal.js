import React from 'react';
import { Modal, Image  } from 'react-bootstrap';
import '../styles/info-modal.css';

const InfoModal = (props) => {
  const { showModal, close, language, data } = props;
  return (
    <Modal show={showModal} onHide={close}>
      <Modal.Header className="solutions-modal-header" closeButton={true}>
        <Modal.Title>{data.articleHead[language]}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          data.articleContent.map((item, index) => 
            <div key={index}>
              <p>{item.text[language]}</p>
              {
                item.articleImage.map((image, idx)=>
                  image.imageURL!==null &&
                  <div className="img-container text-center" key={idx}>
                    <Image src={image.imageURL} className="center-img" width="100%" responsive/>
                    {image.caption[language]===""?<div></div>:
                      <p className="medium-body" style={{marginTop: 2}}><span className="mini-tab" style={styles.tab} /> {image.caption[language]}</p>
                    }
                  </div>
                )
              }
            </div>
          )
        }
      </Modal.Body>
    </Modal>
  )
}

const styles = {
  tab: {
  borderBottomColor: '#2c739d',
  borderLeftColor: '#2c739d',
  borderLeftStyle: 'solid',
  borderLeftWidth: 4.79688,
  borderRightColor: '#2c739d',
  borderTopColor: '#2c739d',
  display: 'inline',
  height: 24,
  marginRight: 8,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  width: 4.79688,
  }
}

export default InfoModal;