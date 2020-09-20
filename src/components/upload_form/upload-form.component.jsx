import React, { useState } from "react";
import ProgressBar from "../progress_bar/progress-bar.component";
import {
  UploadFormContainer,
  InputField,
  Label,
  OutputContainer,
  ErrorMessage,
} from "./upload-form.styles";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const changeHandler = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("please select an image file (png or jpeg)");
    }
  };
  return (
    <UploadFormContainer>
      <Label>
        <InputField type="file" onChange={changeHandler} />
        <span>+</span>
      </Label>
      <OutputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {file && <div className="file-name">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </OutputContainer>
    </UploadFormContainer>
  );
};

export default UploadForm;
