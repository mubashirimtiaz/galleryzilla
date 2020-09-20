import React from "react";
import Title from "./components/title/title.component";
import Header from "./components/header/header.component";
import UploadForm from "./components/upload_form/upload-form.component";
import ImageGrid from "./components/image_grid/image-grid.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
