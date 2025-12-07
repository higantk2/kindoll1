import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Script from 'next/script'; // For FontAwesome

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kindoll Hyacinth - Full Stack Developer',
  description: 'Portfolio of Kindoll Hyacinth, an IT Student and Web Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* FontAwesome CDN */}
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
                        {/* We'll handle the theme toggle with a Client Component later */}
                        <button id="theme-toggle" aria-label="Toggle Dark Mode">
                            <i className="fas fa-moon"></i>
                        </button>
                    </nav>
                </header>
            </div>
        </div>

        {children}

        <footer>
            <div className="container">
                <p>© {new Date().getFullYear()} KINDOLL HYACINTH. All rights reserved.</p>
            </div>
        </footer>
      </body>
    </html>
  );
}