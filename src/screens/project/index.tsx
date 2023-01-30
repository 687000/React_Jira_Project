import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { DashboardScreen } from "screens/dashboard";
import { TaskGroupScreen } from "screens/taskgroup";
export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"dashboard"}>Dashboard</Link>
      <Link to={"taskgroup"}>Task Group</Link>
      <Routes>
        {/*projects/:projectId/dashboard*/}
        <Route path={"/dashboard"} element={<DashboardScreen />} />
        <Route path={"/taskgroup"} element={<TaskGroupScreen />} />
        <Route
          path="*"
          element={
            <Navigate
              to={window.location.pathname + "/dashboard"}
              replace={true}
            />
          }
        />
      </Routes>
    </div>
  );
};
