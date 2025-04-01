import { RouterProvider } from "react-router";
import router from "./utils/router";
import { useCheckAuthQuery } from "./services/api";
import { setUser } from "./store/slices/authslice";
import { useAppDispatch } from "./store/store";
import { useEffect, useState } from "react";

function App() {
  const AppDispatcher = useAppDispatch();
  const [isUserSet, setIsUserSet] = useState<boolean>(false);
  const { data, isLoading, isUninitialized } = useCheckAuthQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    try {
      if (data?.user) {
        AppDispatcher(setUser(data.user));
        setIsUserSet(true);
      }
      setIsUserSet(true);
    } catch (error) {
      console.error(error);
    }
  }, [data]);

  if (isLoading || isUninitialized || !isUserSet) {
    return null;
  } else {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
}

export default App;
