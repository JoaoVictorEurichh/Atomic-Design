import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Buscar' | 'VerPerfil' | 'Sair';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
}

export const Button = ({ 
  variant = 'Buscar', 
  size = 'md', 
  icon, 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  
  const variants = {
    Buscar: 'bg-blue-600 hover:bg-blue-700 text-white font-bold',
    VerPerfil: 'w-full bg-gray-700 hover:bg-gray-600',
    Sair: 'mt-2 text-blue-400 hover:underline',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && <span className="w-5 h-5 flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
};

{/*
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6
rounded-lg transition-all">
Buscar
</button>

<button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-md text-sm
font-medium">Ver Perfil</button>

<button className="mt-2 text-blue-400 hover:underline">Sair do sistema</button>
*/}