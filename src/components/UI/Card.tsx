import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  borderTopColor?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  className = '',
  style,
  onClick,
  borderTopColor,
  ...props
}) => {
  const cardClass = `
    custom-card
    ${hoverable ? 'custom-card--hoverable' : ''}
    ${onClick ? 'custom-card--clickable' : ''}
    ${className}
  `.trim();

  const cardStyle = {
    ...style,
    ...(borderTopColor ? { borderTopColor } : {})
  };

  return (
    <div
      className={cardClass}
      style={cardStyle}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 