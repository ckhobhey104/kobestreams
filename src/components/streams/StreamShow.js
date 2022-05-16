import React, { useEffect, useCallback } from "react";
import { useParams as param } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchStream } from "./../../actions/index";

const StreamShow = () => {
  const id = param().id;
  const dispatch = useDispatch();

  const fetchDispatch = useCallback(
    () => dispatch(fetchStream(id)),
    [id, dispatch]
  );

  useEffect(() => {
    fetchDispatch();
  }, [fetchDispatch]);

  const stream = useSelector((state) => state.streams[id]);

  const renderStream = () => {
    if (!stream) {
      return <div> Loading</div>;
    }
    return (
      <React.Fragment>
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </React.Fragment>
    );
  };

  return <div>{renderStream()}</div>;
};

export default StreamShow;
