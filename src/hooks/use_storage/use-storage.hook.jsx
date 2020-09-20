import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timeStamps,
} from "../../firebase/firebase.utils";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collections = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        let url = await storageRef.getDownloadURL();
        setUrl(url);
        let createdAt = timeStamps();
        collections.add({
          url,
          createdAt,
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
