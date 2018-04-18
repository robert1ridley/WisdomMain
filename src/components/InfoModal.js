import React from 'react';
import { Button, Modal, Image  } from 'react-bootstrap';

class InfoModal extends React.Component{

  componentWillReceiveProps(nextProps){
    console.log(nextProps.data)
  }

  render() {
    const { showModal, close, language, data } = this.props;
    console.log(data.articleHead[language])
    return (
      <Modal show={showModal} onHide={close}>
        <Modal.Header closeButton={true}>
          <Modal.Title>{data.articleHead[language]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            data.articleContent.map((item, index) => 
              <div>
                <p>{item.text[language]}</p>
                {
                  item.articleImage.map((image, idx)=>
                    <div className="img-container text-center" key={index} style={{marginBottom: 30}}>
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
        {/* <Button onClick={close}>Close</Button> */}
      </Modal>
    )
  }
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