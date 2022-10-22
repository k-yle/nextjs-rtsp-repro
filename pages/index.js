import { useEffect, useRef } from "react";
import { loadPlayer } from "rtsp-relay/browser";

export default function Home() {
  const canvas = useRef(null);

  useEffect(() => {
    if (!canvas.current) throw new Error("Ref is null");

    loadPlayer({
      url: "ws://localhost:2000/api/stream/2",
      canvas: canvas.current,
    });
  }, []);

  return <canvas ref={canvas} />;
}
