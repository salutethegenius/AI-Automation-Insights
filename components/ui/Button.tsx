import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95'
  
  const variantStyles = {
    primary: 'bg-gold text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl',
    secondary: 'bg-turquoise text-white hover:bg-teal-600 shadow-lg hover:shadow-xl',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
