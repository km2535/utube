import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import List from "./components/list";
import axios from "axios";
import Detail from "./components/detail";

function App() {
  axios.defaults.withCredentials = false;
  axios.defaults.baseURL = "http://localhost:3000";
  const apikey = process.env.REACT_APP_YOUTUBE_API;
  const apiKey = process.env.REACT_APP_UTUBE_API;

  const [query, setQuery] = useState("bts");
  const [video, setVideos] = useState([]);
  const [videoID, setVideoID] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${apiKey}`
      )
      .then((res) => {
        setVideos(res.data.items);
      });
  }, [query]);

  // https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}um0&key=${apikey}

  return (
    <>
      <Header setQuery={setQuery} />
      <div className={videoID.length > 0 ? "sideVideoCon" : "container"}>
        {videoID.length > 0 && <Detail videoId={videoID} />}
        <div className={videoID.length > 0 ? "sideVideo" : "video"}>
          {video.map((video) => (
            <List video={video} videoId={setVideoID} key={video.id.videoId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
