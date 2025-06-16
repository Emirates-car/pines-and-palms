import '../../../styles/globals.css';
import Navbar from "../../../components/nav"


export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
