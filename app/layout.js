import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kindoll Hyacinth - Full Stack Developer',
  description: 'Portfolio of Kindoll Hyacinth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        
        <div className="navbar">
            <div className="container">
                <header>
                    <Link href="/" className="logo">KINDOLL1</Link>
                    <nav>
                        <ul>
                            <li><Link href="/#hero" className="nav-link">About</Link></li>
                            <li><Link href="/#projects" className="nav-link">Projects</Link></li>
                            <li><Link href="/#contact" className="nav-link">Contact</Link></li>
                            <li><Link href="/certificates" className="nav-link">Certificates</Link></li> 
                        </ul>
                        <ThemeToggle />
                    </nav>
                </header>
            </div>
        </div>

        {children}

        {/* RESTORED FOOTER */}
        <footer>
            <div className="container">
                <p>© {new Date().getFullYear()} KINDOLL HYACINTH. All rights reserved.</p>
            </div>
        </footer>
      </body>
    </html>
  );
}