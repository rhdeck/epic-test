import { useEffect, useState } from "react";
import { oauth2 } from "fhirclient";
function Launch() {
  const scope = ["launch/encounter"].join(" ");
  const clientId = "b9e5759a-2c88-4592-b9d5-46f30b744754"; //Client 1
  //   const clientId = "c2cfbf30-dbc3-44fd-9434-a39dcc3bd525";
  const [uri, setUri] = useState("");
  useEffect(() => {
    oauth2
      .authorize({
        client_id: clientId,
        scope,
        noRedirect: true,
        redirectUri: "/",
      })
      .then((ret) => {
        console.log("ret is ", ret);
        if (ret) setUri(ret);
      });
  }, [scope, clientId]);
  return <a href={uri}>Launch</a>;
}

export default Launch;
