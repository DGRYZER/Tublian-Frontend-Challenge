import React from "react";
import { useRoutes } from "react-router-dom";
import ExampleOne from "pages/ExampleOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <ExampleOne /> }
  ]);

  return element;
};

export default ProjectRoutes;
