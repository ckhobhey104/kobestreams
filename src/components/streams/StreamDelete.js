import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams as params } from "react-router";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions/index";
import Modal from "./../Modal";
import { history } from "./../../history";

const StreamDelete = () => {
  const dispatch = useDispatch();
  const id = params().id;

  const fetchDispatch = useCallback(
    () => dispatch(fetchStream(id)),
    [id, dispatch]
  );

  useEffect(() => {
    fetchDispatch();
  }, [fetchDispatch]);

  const stream = useSelector((state) => state.streams[id]);

  const renderContent = () => {
    if (!stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete this stream with title: ${stream.title}`;
  };

  const onDismiss = () => {
    history.push("/");
  };
  const onDelete = () => {
    dispatch(deleteStream(id));
  };
  const actions = (
    <React.Fragment>
      <button onClick={onDelete} className="ui button negative">
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      onDismiss={onDismiss}
      actions={actions}
    />
  );
};

export default StreamDelete;
