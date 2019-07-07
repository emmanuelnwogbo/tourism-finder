import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { returnSignInState } from '../actions';

import '../scss/components/photodisplay.scss';
import '../scss/components/form.scss';

const createFileId = ( length ) => {
  let str = "";
  for ( ; str.length < length; str += Math.random().toString( 36 ).substr( 2 ));
    return str.substr( 0, length );
}

class PhotoDisplay extends Component {
 constructor(props) {
  super(props);
  this.state = {
    url: 'https://blooming-hamlet-55601.herokuapp.com/forms/cook',
    images: [],
    preview: false,
    removed: [],
    formFields: null,
    image: null,
    ImageId: null,
    showError: false,
    uploading: false,
  }
 }

 renderPreview = () => {
   const { preview } = this.state;
   if (preview) {
    return (
      <figure id={`${preview.id}`} key={preview.id}>
        <div onClick={this.removePhoto}>remove</div>
        <img src={`${preview.src}`}/>
        <span></span>
      </figure>
    )
   }
 }

 removePhoto = (event) => {
  this.setState({
    preview: false,
    image: null,
    ImageId: null
 })
  /*const parentElementId = event.target.parentElement.id;
  const parentElement = event.target.parentElement
  this.setState(prevState => ({
    removed: [...prevState.removed, parentElementId]
  }), () => {
    console.log(this.state)
    parentElement.parentNode.removeChild(parentElement);
  })*/
 }

 initConfig = (ImageId) => {
  const config = {
    headers: { 
      "X-Requested-With": "XMLHttpRequest" 
    },
    onUploadProgress: event => {
      let progress = Math.round((event.loaded * 100.0) / event.total);
      console.log(progress);
      document.getElementById(ImageId).lastElementChild.style.height = `${100 - progress}%`
    }
  }

  return config
 }

 renderInputs = () => {
  return this.props.inputs.map(input => {
    if (input === 'email') {
      return (
        <div className={'form__area'} key={input}>
          <input className={'form__area--input'} 
          name={input} 
          id={input}
          placeholder={input}
          type={'email'}
          onClick={this.removeError}/>
        </div>
      )     
    }

    if (input === 'password' || input === 'confirmpassword') {
      return (
        <div className={'form__area'} key={input}>
          <input className={'form__area--input'} 
          name={input} 
          id={input}
          placeholder={input}
          type={'password'}
          onClick={this.removeError}/>
        </div>
      )     
    }
    return (
      <div className={'form__area'} key={input}>
        <input className={'form__area--input'} 
        name={input} 
        id={input}
        placeholder={input}
        type={'text'}
        onClick={this.removeError}/>
      </div>
    )
  })
}

 handleUpload = (image, ImageId) => {
  Array.from(document.getElementsByTagName("input")).forEach((item) => {
    console.log(item.value);
    if (item.id === 'email' && !validator.isEmail(item.value)) {
      this.showError();
    }

    if (item.id === 'password' && item.value !== document.getElementById('confirmpassword').value) {
      this.showError();
    }

    if (item.id === 'name' && item.value.length === 0) {
      this.showError();
    }
  });

  if (this.state.showError) {
    return;
  }

  if (!this.state.showError) {
    const { url } = this.state;
    const upload = new FormData();
    upload.append('photo', image);
    upload.append('imageId', ImageId);
    this.state.formFields.forEach(field => {
      upload.append(field, document.getElementById(field).value);
    });
    console.log(upload)
    this.setState({ uploading: true })
    axios.post(url, upload, this.initConfig(ImageId)).then(res => {
      if (res) {
        
        this.props.history.push('/');
        this.props.returnSignInState(res.data);
        this.removeError();
        this.setState({ uploading: false });
      }
    }).catch(err => {
      this.showError();
      console.log(err, 'error here')
      this.setState({ uploading: false })
    })    
  }
 }

 handlePreview = (image, ImageId) => {
   const imageReader = new FileReader();
   imageReader.readAsDataURL(image);
   imageReader.onloadend = () => {
     const previewItem = {
       src: imageReader.result,
       id: ImageId
     }
     this.setState({
         preview: previewItem,
         image,
         ImageId
      })
   }
 }

 handlePhotos = () => {
  const files = this._input.files;
  const image = Array.from(files)[0];
  this.setState({
    image: image
  }, () => {
    const ImageId = createFileId((Math.round(image.lastModified * 100)/image.lastModified));
    image.id = ImageId;
    this.handlePreview(image, ImageId);
  })
 }

 handlePhotosDrop = (event) => {
  event.preventDefault();
  event.stopPropagation();
  this.removeDragOvFeedback(event);
  if (event.dataTransfer.files) {
    const files = event.dataTransfer.files;
    const image = Array.from(files)[0];
    this.setState({ image: image }, () => {
      const ImageId = createFileId((Math.round(image.lastModified * 100)/image.lastModified));
      image.id = ImageId;
      this.handlePreview(image, ImageId);
    })
  }
 }

 showError = () => {
   this.setState({ showError: true });
 }

 removeError = () => {
   this.setState({ showError: false })
 }

 renderSubmitBtn = (btnLabel) => {
   if (!this.state.preview || this.state.image === null || this.state.ImageId === null || this.state.showError) {
     return <span className={'form__btn'} onClick={this.showError}>{btnLabel}</span>
   }

   return <span className={'form__btn'} onClick={() => this.handleUpload(this.state.image, this.state.ImageId)}>{btnLabel}</span>
 }

 sendDragOvFeedback = (event) => {
  event.preventDefault();
  event.stopPropagation();
  this._droparea.style.background = 'rgba(232, 67, 147, 0.2)';
  this._droparea.style.borderRadius = '.3rem 3rem';
  this._droparea.style.border = '.5px solid rgba(232, 67, 147, 0.8)';
  this._droparea.style.boxShadow = '0 0px 1px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.1)';
 }

 removeDragOvFeedback = (event) => {
  event.preventDefault();
  event.stopPropagation();
  this._droparea.style.background = '#F0F3F4';
  this._droparea.style.borderRadius = '.3rem';
  this._droparea.style.border = 'none';
  this._droparea.style.boxShadow = 'none';
 }

 componentDidMount() {
   this.setState({ formFields: this.props.inputs }, () => {
     console.log(this.state)
   })
 }

 render() {
   const { btnLabel } = this.props;
   return (
      <div>
        {this.state.uploading ? <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '100%',
          background: '#fff',
          opacity: '.8',
          textAlign: 'center',
          fontSize: '2rem',
          color: '#000000',
          textTransform: 'uppercase',
          zIndex: '3',
          fontWeight: '900'
        }}><div style={{
          margin: '10rem 0'
        }}>Uploading Your Photo and Signing Up...</div></div> : <span></span>}
        <div 
        className={`photodisplay`}
        ref={c => (this._droparea = c)} 
        onDragOver={this.sendDragOvFeedback}
        onDragEnter={this.sendDragOvFeedback}
        onDragLeave={this.removeDragOvFeedback}
        onDrop={this.handlePhotosDrop}>
        <div style={{position: 'relative'}}>
        <h3 className={`photodisplay__h3`}>Pick a profile photo</h3>
        <h3 className={`photodisplay__h3`}>{this.state.preview ? 1 : 0} file selected</h3>
        <h3 className={`photodisplay__h3`} style={{color: 'red'}}>{this.state.showError ? 'please fill out all fields properly' : ''}</h3>
        <div className={`photodisplay__gallery`}>
          {this.renderPreview()}
        </div>
        </div>
          <input type="file" id="upload"
          className={`photodisplay__input`}
          name="upload"
          accept="image/*" 
          ref={c => (this._input = c)}
          onChange={this.handlePhotos}
          style={{
            display: `none`
          }}/>
          <label htmlFor="upload" className={`photodisplay__label`}></label>
        </div>
        <div className={'form'}>
          {this.renderInputs()}
        </div>
        {this.renderSubmitBtn(btnLabel)}
      </div>
   )
 }
}

function mapStateToProps(state) {
  return {
    state: state.returnDetails
  }
}

export default connect(mapStateToProps, {returnSignInState})(withRouter(PhotoDisplay));