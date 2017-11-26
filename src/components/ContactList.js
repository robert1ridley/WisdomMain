import React from 'react';
import contactdata from '../data/contactdata';
import CircleImageBlock from '../components/CircleImageBlock';

export default class ContactList extends React.Component {
  render () {
    return (
      <div className="lower-margin">
        <CircleImageBlock img="glyphicon glyphicon-home" 
          text={this.props.language==="zh"? contactdata.addressChinese: contactdata.addressEnglish}
        />
        <CircleImageBlock img="glyphicon glyphicon-earphone"
          text={contactdata.phone}
        />
        <CircleImageBlock img="glyphicon glyphicon-envelope"
          text={contactdata.email}
        />
      </div>
    )
  }
}