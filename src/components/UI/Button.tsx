import React from 'react';
import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
  type?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'secondary',
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  className = '',
  style,
  ...props
}) => {
  const buttonClass = `
    custom-button 
    custom-button--${type} 
    custom-button--${size}
    ${className}
    ${disabled ? 'custom-button--disabled' : ''}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {icon && <span className="custom-button__icon">{icon}</span>}
      {children && <span className="custom-button__text">{children}</span>}
    </button>
  );
};

export default Button; 