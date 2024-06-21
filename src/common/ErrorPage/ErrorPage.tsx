import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <React.Fragment>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? error.statusText
            : (error as Error).message}
        </i>
      </p>
    </React.Fragment>
  );
};

export default ErrorPage;
