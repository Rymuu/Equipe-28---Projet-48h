import '../styles/styles.scss';
import MainLayout from '../layout/MainLayout';
import ReactDOM from 'react-dom';


function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
