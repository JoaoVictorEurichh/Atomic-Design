import { cn } from '@/app/lib/utils';

interface InputProps {
  type?: 'Buscar';
  placeholder?: 'Buscar';
  className?: string;
}

export const input = ({ 
  type = 'Buscar', 
  placeholder = 'Buscar', 
  className,
  ...props 
}: InputProps) => {
  
  const types = {
    Buscar: 'text',
  };

  const placeholders = {
    Buscar: 'Buscar...',
  };

  return (
    <input
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors gap-2',
        types[type],
        placeholders[placeholder],
        className
      )}
      {...props}
    />
  );
};

{/*
<input
type="text"
placeholder="Buscar..."
className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg
focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
*/}