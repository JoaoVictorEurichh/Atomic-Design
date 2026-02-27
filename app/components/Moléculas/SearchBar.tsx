'use client';

import { FormEvent } from 'react';
import { Button } from '../Átomos/button';
import { input as InputAtom } from '../Átomos/input';
import { cn } from '@/app/lib/utils';

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex items-center gap-2 w-full',
        className
      )}
    >
      <InputAtom
        type="Buscar"
        placeholder="Buscar"
        className="flex-1"
      />
      <Button
        variant="Buscar"
        size="md"
        type="submit"
      >
        Buscar
      </Button>
    </form>
  );
};
