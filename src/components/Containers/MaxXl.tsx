import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function MaxXl({ children }: Props) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export default MaxXl;
