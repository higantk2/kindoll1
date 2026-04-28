'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // If we are on the certificates page, don't render anything
  if (pathname === '/certificates') {
    return null;
  }

  return (
    <footer>
        <div className="container">
            <p>© {new Date().getFullYear()} KINDOLL HYACINTH. All rights reserved.</p>
        </div>
    </footer>
  );
}