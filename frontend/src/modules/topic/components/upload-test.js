import React from 'react'
import {createApiActions} from 'core'
import {connect } from 'react-redux'


class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = { url: '', file: ''}
  }

  changeFile = (e) => {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

   reader.onloadend = function() {
     //that.setState({ url: reader.result, file: file });
     that.props.sendfile(reader.result)
     console.log('filename:tesdf.zip;'+reader.result);
   }

   if (file) {
    reader.readAsDataURL(file);
    console.log('11111111');
   } else {
    this.setState({ url: "", file: null });
   }
  }

  render = () =>
    <div>
    <input type="file" onChange={this.changeFile} />
    </div>
}

const filesend = (file) =>
createApiActions('http://localhost:4200/api/v1/questions/41/answers', 'POST', 0x4000, { answer:{
  body:'blasdadsfd',
  attachments_attributes: [{file: file}]
}})

const mapDispatchToProps = dispatch => {
  return {
    sendfile: (file) => dispatch(filesend(file))
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
