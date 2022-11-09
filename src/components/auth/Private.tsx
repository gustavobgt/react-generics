import { Login } from "./Login";
import { ProfileProps } from "./Profile";
import { ComponentType } from "react";

type PrivateProps = {
  isLoggedIn: boolean;
  component: ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="VishwasF" />;
  } else {
    return <Login />;
  }
};
