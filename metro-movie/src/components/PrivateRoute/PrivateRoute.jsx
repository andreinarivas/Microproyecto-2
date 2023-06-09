import { Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import styles from "./PrivateRoute.module.css";

export function PrivateRoute({ children }) {
  const { user, isLoadingUser } = useUserContext();

  if (isLoadingUser) {
    return <h1 className={styles.loadingScreen}>LOADING USER...</h1>;
  }

  if (!isLoadingUser && !user) {
    return <Navigate to="/login" />;
  }

  return children;
}