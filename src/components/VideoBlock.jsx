import { useRef, useState } from "react";

export default function VideoBlock() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [isMuted1, setIsMuted1] = useState(false);
  const [isMuted2, setIsMuted2] = useState(false);

  const toggleMute = (videoRef, setMuted) => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div className="videoWrap">
      <div className="videoCard">
        <video
          ref={videoRef1}
          className="videoPlayer"
          controls
          playsInline
          preload="metadata"
        >
          <source src="/gallery/video.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>

        {/* <button
          className="muteBtn"
          type="button"
          onClick={() => toggleMute(videoRef1, setIsMuted1)}
        >
          {isMuted1 ? "Увімкнути звук" : "Вимкнути звук"}
        </button> */}
      </div>

      <div className="videoCard">
        <video
          ref={videoRef2}
          className="videoPlayer"
          controls
          playsInline
          preload="metadata"
        >
          <source src="/gallery/video2.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>

        {/* <button
          className="muteBtn"
          type="button"
          onClick={() => toggleMute(videoRef2, setIsMuted2)}
        >
          {isMuted2 ? "Увімкнути звук" : "Вимкнути звук"}
        </button> */}
      </div>
    </div>
  );
}