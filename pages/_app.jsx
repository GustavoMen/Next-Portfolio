import GlobalStyle from '../components/globalstyles'
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp;
