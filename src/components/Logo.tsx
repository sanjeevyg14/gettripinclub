
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.png"
      alt="GetrippinClub Logo"
      width={180}
      height={180}
      className={cn(className)}
    />
  );
};
