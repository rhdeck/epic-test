import React, { useEffect } from "react";
import { oauth2 } from "fhirclient";
function Launch() {
  const scope = [].join(" ");
  const clientId = "b9e5759a-2c88-4592-b9d5-46f30b744754";
  useEffect(() => {
    oauth2.authorize({ clientId, scope, noRedirect: true }).then((ret) => {
      console.log("ret is ", ret);
    });
  }, [scope, clientId]);
  return null;
}

export default Launch;
