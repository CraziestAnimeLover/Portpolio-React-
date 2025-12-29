import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

const FaceID = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: {} });
      } catch (err) {
        console.error("Error accessing camera", err);
      }
    };

    const loadModels = async () => {
      const MODEL_URL = "/models"; // you need to host face-api models in public/models
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      startVideo();
    };

    loadModels();
  }, []);

  const handleVideoOnPlay = () => {
    const interval = setInterval(async () => {
      if (videoRef.current) {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions());
        console.log("Detected faces:", detections);
      }
    }, 100);
  };

  return (
    <div className="flex justify-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        onPlay={handleVideoOnPlay}
        className="w-96 h-96 rounded-2xl shadow-2xl"
      />
    </div>
  );
};

export default FaceID;
