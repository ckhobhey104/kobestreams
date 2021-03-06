import React, { useEffect, useRef } from "react";
import flv from "flv.js";
import { useParams as param } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "./../../actions/index";

const StreamShow = () => {
  const id = param().id;
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const stream = useSelector((state) => state.streams[id]);

  // const fetchDispatch = useCallback(
  //   () => dispatch(fetchStream(id)),
  //   [id, dispatch]
  // );

  // useEffect(() => {
  //   fetchDispatch();
  // }, [fetchDispatch]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, [id, dispatch]);

  useEffect(() => {
    let player;
    if (videoRef.current) {
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${id}.flv`,
      });

      player.attachMediaElement(videoRef.current);
      player.load();
    }
    return () => {
      console.log(player);
      if (player) {
        player.destroy();
      }
    };
  }, [id, stream]);

  const renderStream = () => {
    if (!stream) {
      return <div> Loading</div>;
    }
    return (
      <React.Fragment>
        <video ref={videoRef} style={{ width: "100%" }} controls />

        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </React.Fragment>
    );
  };

  return <div>{renderStream()}</div>;
};

export default StreamShow;
