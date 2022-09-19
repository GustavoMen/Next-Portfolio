import GlobalStyle from '../components/globalStyles'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  
}

export default MyApp;
