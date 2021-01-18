import React from 'react';
// import MDBFileupload from 'mdb-react-fileupload';
import { NavLink, withRouter } from 'react-router-dom';

import './style.css';

const DragnDropFiles = () => {
  return (
    <div class='file-upload-wrapper'>
      <h3>
        <br />
        <br />
        Upload Picture
      </h3>
      <input
        type='file'
        id='input-file-max-fs'
        class='file-upload'
        data-max-file-size='2M'
      />
    </div>
  );
};

export default DragnDropFiles;
