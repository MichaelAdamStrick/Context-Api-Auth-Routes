import { useStore } from "./store";

export const useAuth = () => {
  const { state, dispatch } = useStore();
  return {
    auth: state.auth,
    username: state.username,
    authenticated: () => dispatch({ type: "authenticated", username: "mike" }),
    islogged: () => dispatch({ type: "authenticated" }),
    logOut: () => dispatch({ type: "logOut" }),
    count: state.count,
    message: state.message,
    increment: () => dispatch({ type: "increment", message: "Incremented" }),
    decrement: () => dispatch({ type: "decrement", message: "Decremented" }),
    reset: () => dispatch({ type: "reset", message: "Reset" })
  };
};
