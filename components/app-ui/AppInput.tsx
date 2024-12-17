import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const AppInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, icon, label, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="space-y-2">
        {/* lable text */}
        {label && (
          <Label className="font-brand text-[14px] text-zinc-500">
            {label}
          </Label>
        )}
        {/* input with icons */}
        <div className="flex items-center rounded-[6px] border-input px-3 text-muted-foreground ring-1 ring-zinc-200 duration-200 ease-in-out focus-within:text-primary focus-within:ring-1 focus-within:ring-primary">
          <span className="">{icon}</span>
          <Input
            id={id}
            type={showPassword ? "text" : type}
            className="group peer border-none font-body font-normal text-zinc-800 ring-offset-0 placeholder:text-zinc-400 focus-visible:ring-transparent focus-visible:ring-offset-0"
            ref={ref}
            {...props}
          />
          {type === "password" && (
            <span
              onClick={toggleShowPassword}
              className="cursor-pointer select-none"
            >
              {showPassword ? (
                <EyeOff size={18} strokeWidth={2} />
              ) : (
                <Eye size={18} strokeWidth={2} />
              )}
            </span>
          )}
        </div>
      </div>
    );
  }
);
AppInput.displayName = "AppInput";

export default AppInput;
