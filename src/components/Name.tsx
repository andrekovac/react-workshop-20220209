import { FC } from "react";

type NameProps = {
  name?: string;
};

const Name: FC<NameProps> = ({ name = "Kein Name", children }) => {
  return <div>My Name: {children}</div>;
};

export default Name;
