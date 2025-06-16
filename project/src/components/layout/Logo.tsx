import { BookOpen } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mr-2">
        <BookOpen className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
        Creatorlane
      </span>
    </div>
  );
}