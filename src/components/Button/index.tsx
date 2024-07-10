import { cn } from "../../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const FeedbackVariants = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "bg-primary-500",
    "hover:cursor-pointer",
    "transition-colors",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        button: "px-4 py-2",
        widget: "flex w-10 h-10 rounded-full text-2xl hover:bg-primary-600",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "button",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "widget",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
    ],
    defaultVariants: {
      variant: "button",
      colorscheme: "primary",
    },
  }
);

type FeedbackProps = ComponentProps<"div"> &
  VariantProps<typeof FeedbackVariants> & {
    label: string;
    animation: string;
  };

const Feedback = forwardRef<HTMLDivElement, FeedbackProps>(
  ({ variant, colorscheme, className, ...props }, ref) => {
    let { label, animation } = props;
    if (variant === "widget" && !label) {
      label = "👋🏻";
    } else if (variant === "button" && !label) {
      label = "Feedback";
    }
    console.log(animation);
    function setAnimation() {
      switch (animation) {
        case "wave":
          return "animate-wave";
        default:
          return "";
      }
    }
    return (
      <div
        ref={ref}
        className={cn(FeedbackVariants({ variant, colorscheme, className }))}
        {...props}
      >
        <span className={setAnimation()}>{label}</span>
      </div>
    );
  }
);

export default Feedback;
