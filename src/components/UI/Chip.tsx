import React from 'react';
import './Chip.css';

interface ChipProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'info' | 'warning' | 'error' | 'success' | 'default';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  children,
  size = 'medium',
  variant = 'default',
  className = '',
  style,
  onClick,
  ...props
}) => {
  const chipClass = `
    custom-chip 
    custom-chip--${size} 
    custom-chip--${variant}
    ${onClick ? 'custom-chip--clickable' : ''}
    ${className}
  `.trim();

  return (
    <span
      className={chipClass}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export default Chip; 