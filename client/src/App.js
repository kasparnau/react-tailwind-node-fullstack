import React from "react";

import { getApiVersion } from "./api.js";
import { useMainStore } from "./store.js";

function App() {
  const { apiVersion, setApiVersion } = useMainStore();

  React.useEffect(() => {
    getApiVersion().then((retval) => {
      if (retval.status === 200) {
        setApiVersion(retval.data);
      } else {
        setApiVersion(null);
      }
    });
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-white text-2xl">
      <div>Api Version: {apiVersion ? apiVersion : "NONE"}</div>
      {apiVersion === null ? (
        <div className="text-red-600 text-xl">
          Configuration error detected (/api/version not available)
        </div>
      ) : (
        apiVersion !== undefined && (
          <div className="text-green-600 text-xl">
            Everything is properly set up and working, good job :)
          </div>
        )
      )}
    </div>
  );
}

export default App;
