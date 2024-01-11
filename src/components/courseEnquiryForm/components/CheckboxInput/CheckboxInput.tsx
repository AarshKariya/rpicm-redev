import React from "react";

type CheckboxInputProps = {
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: any;
  id: string;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  value,
  label,
  onChange,
  className,
  id,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
        className={className}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
