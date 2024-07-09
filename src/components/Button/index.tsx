import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="text-pink-500" {...props}>
      {children}
    </button>
  );
}
