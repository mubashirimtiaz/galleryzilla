import React, { useEffect } from "react";
import useStorage from "../../hooks/use_storage/use-storage.hook";
import { ProgressBarContainer } from "./progress-bar.styles";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <ProgressBarContainer
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
