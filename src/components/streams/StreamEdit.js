import _ from "lodash";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams as params } from "react-router";
import { fetchStream, editStream } from "./../../actions/index";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const dispatch = useDispatch();
  const id = params().id;
  const fetchDispatch = useCallback(
    () => dispatch(fetchStream(id)),
    [id, dispatch]
  );
  useEffect(() => {
    fetchDispatch();
  }, [fetchDispatch]);

  const onSubmit = (formValues) => {
    dispatch(editStream(id, formValues));
  };
  // const dispatch1 = useDispatch();
  // const id1= params().id;
  // const fetchInformation = () => {
  //   dispatch(fetchStream(id));
  // };
  // useEffect(() => {
  //   fetchInformation();
  // }, [id1]);
  const stream = useSelector((state) => state.streams[id]);

  const renderStream = () => {
    if (!stream) {
      return null;
    }
    return (
      <div>
        <h3 className="header">Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={onSubmit}
        />
      </div>
    );
  };

  return <div>{renderStream()}</div>;
};

export default StreamEdit;
