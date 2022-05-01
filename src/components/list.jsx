import React, { Component } from "react";

class List extends Component {
  onClick = (e) => {
    // 클릭 시 해당 video로 이동
    this.props.videoId(e.target.name);
  };
  render() {
    const video = this.props.video;
    //console.log(this.props.videoId);
    return (
      <>
        <div className="thumnail-video" onClick={this.onClick}>
          <img
            className="thumbnail"
            src={video.snippet.thumbnails.high.url}
            alt="video"
            name={video.id.videoId}
          />
          <div className="title">
            <p className="tit">{video.snippet.title}</p>
            <p className="channelTit">{video.snippet.channelTitle}</p>
          </div>
        </div>
      </>
    );
  }
}

export default List;
