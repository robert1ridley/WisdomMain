import React from 'react';

class ScrollButton extends React.Component {	
	scrollUp() {
		window.scroll(0,0);
	}
  
  render () {
      return (
		<button style={styles.scroll} title='Back to top' className='scroll' 
			onClick={this.scrollUp}>
			<span style={styles.arrowUp} className='glyphicon glyphicon-arrow-up'></span>
		</button>
	  )
   }
} 

export default class ScrollTo extends React.Component {  
  render () {
    return (
      <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    )
  }
}

const styles = {}

styles.scroll = {
  opacity: 0.8,
  backgroundColor: 'transparent',
  width: 40,
  height: 40,
  position: 'fixed',
  bottom: 10,
  right: 10,
  borderRadius: 5,
  border: 'none',
  fontSize: 21.25
}

styles.arrowUp = {
  color: '#999'
}