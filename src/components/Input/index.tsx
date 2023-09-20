import {InputType} from '../types'
import { forwardRef, useMemo } from "react";

export const Input = forwardRef<HTMLInputElement, InputType>(
  (
    {
      id,
      children,
      className,
      startIcon,
      inputClassName,
      type ="text",
      ...rest
    },
    ref
  ) => {
    const classNames = useMemo(() => {
      const classes = {
        inputContainer: `mb-1 relative text-gray-dark  rounded-full ${className ?? ""}`,
        icon: "absolute text-gray-400 select-none top-1/2 -translate-y-2/4",
        startIcon: "left-3 w-5 h-5",
        input: `block w-full border-gray focus:ring-0 focus:outline-none rounded-full ${
          inputClassName || ""
        }`,
      };

            return classes;
        }, [className, inputClassName]);

    return (
      <div className={`${classNames.inputContainer} `} {...rest}>
      <div className="">
        {startIcon && (
          <span className={`${classNames.icon} ${classNames.startIcon}`}>
            {startIcon}
          </span>
        )}
        <input
            id={id}
            className={classNames.input}
            type={type}
            {...rest}
            placeholder=" "
            ref={ref}
          />
      </div>
      {children}
    </div>
        );
    }
);

Input.displayName = "Input";

export default Input;