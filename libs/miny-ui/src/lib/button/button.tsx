import { ButtonProps } from './button.d';

export const Button = ({ text, disabled = false, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={() => onClick?.()}>
      {text}
    </button>
  );
};

export default Button;
