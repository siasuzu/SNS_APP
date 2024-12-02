import { AuthInvalidTokenResponseError } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import { authRepository } from "./repositories/auth";

const SessionContext = createContext();
const SessionProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setSesson();
  }, []);

  const setSesson = async () => {
    const currentUser = await authRepository.getCurrentUser();
    setCurrentUser(currentUser);
    setIsLoading(false);
  };

  if (isLoading) return <div />;

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};
// export { SessionProvider };
// export { SessionContext };
export { SessionContext, SessionProvider };
