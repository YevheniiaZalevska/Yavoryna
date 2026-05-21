import { useRef } from "react";

export default function VideoBlock() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  return (
    <div className="videoWrap">
      <div className="videoCard">
        <video
          ref={videoRef1}
          className="videoPlayer"
          controls
          playsInline
          preload="metadata"
          poster="/gallery/video-cover.jpg"
        >
          <source src="/gallery/video.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>
      </div>

      <div className="videoCard">
        <video
          ref={videoRef2}
          className="videoPlayer"
          controls
          playsInline
          preload="metadata"
          poster="/gallery/video2-cover.jpg"
        >
          <source src="/gallery/video2.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>
      </div>
    </div>
  );
}