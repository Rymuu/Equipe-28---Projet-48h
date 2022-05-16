import '../styles/styles.scss';
import MainLayout from '../layout/MainLayout';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';


function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
