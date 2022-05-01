import React, { Component } from "react";
import axios from "axios";

const apikey = process.env.REACT_APP_YOUTUBE_API;
class Detail extends Component {
  state = {
    result: {
      kind: "",
      etag: "",
      id: "",
      snippet: {
        publishedAt: "",
        channelId: "",
        title: "",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/8dJyRm2jJ-U/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/8dJyRm2jJ-U/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/8dJyRm2jJ-U/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "",
        tags: [],
        categoryId: "",
        liveBroadcastContent: "no",
        localized: {
          title: "",
          description: "",
        },
        defaultAudioLanguage: "ko",
      },
    },
  };
  onload = () =>
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${this.props.videoId}&key=${apikey}`
      )
      .then((i) => this.setState({ result: i.data.items[0] }));
  render() {
    console.log(this.state.result);
    return (
      <div className="play">
        <iframe
          onLoad={this.onload}
          title="youtube video player"
          src={`https://www.youtube.com/embed/${this.props.videoId}`}
          type="text/html"
        ></iframe>

        <p className="play-channelTitle">
          {this.state.result.snippet.channelTitle}
        </p>
        <p className="play-title">{this.state.result.snippet.title}</p>
        <p className="play-des">
          {this.state.result.snippet.localized.description}
        </p>
      </div>
    );
  }
}

export default Detail;

// 동영상을 재생하는 url
// https://www.youtube.com/embed/`${video.id}`
