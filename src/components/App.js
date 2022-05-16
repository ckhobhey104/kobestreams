import React from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import { history } from "../history";

const App = () => {
  return (
    <div className="ui container">
      <HistoryRouter history={history}>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
          <Route path="/streams/show/:id" element={<StreamShow />} />
        </Routes>
      </HistoryRouter>
    </div>
  );
};
export default App;
