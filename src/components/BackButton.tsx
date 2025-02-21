import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  path?: string;
  text: string;
};

const BackButton: React.FC<Props> = ({ path = '/', text }) => {
  return (
    <Button variant="ghost" asChild className="mb-4">
      <Link href={path} className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        {text}
      </Link>
    </Button>
  );
};

export default BackButton;
