import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ContactForm from './ContactForm';

export default class PopModal extends React.Component {
  constructor(props) {
    super(props)
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
        hover: false,
        showModal: false
    };
}

  mouseIn() {
    this.setState({hover: true});
  }

  mouseOut() {
    this.setState({hover: false});
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render () {
    var buttonStyle = !this.state.hover === true? styles.regButton: styles.hoverButton;
    return (
      <div>
        <Button 
          className="wiggle-me"
          onMouseEnter={this.mouseIn} 
          onMouseLeave={this.mouseOut}
          onClick={this.open} 
          style={buttonStyle}>{this.props.language === "zh"? this.props.buttonText.chinese: this.props.buttonText.english}
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <ContactForm 
              language = {this.props.language}
              close = {this.close}
              staffMember = {this.props.name}
            />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const styles = {
  regButton: {
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: 100,
    backgroundColor: 'white',
    color: 'black'
  },

  hoverButton: {
    borderRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: 100,
    backgroundColor: '#7ebc59',
    color: 'white'
  }
}