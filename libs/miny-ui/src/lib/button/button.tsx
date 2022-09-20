import { ButtonProps } from './button.d';

export const Button = ({ text, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className="text-white bg-teal-800 py-2 px-3 rounded-md"
      disabled={disabled}
      onClick={() => onClick?.()}
    >
      {text}
    </button>
  );
};

export default Button;
