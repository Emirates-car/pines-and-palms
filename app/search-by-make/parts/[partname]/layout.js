import '../../../../styles/globals.css';
import Navbar from '../../../../components/nav';
import Footer from '../../../../components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
