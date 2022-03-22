import '../styles/globals.css' 
import Layout from '../layouts/default'

function MyApp({ Component, pageProps }) { 


  const getLayout = Component.getLayout
  || ((page) => (<Layout>{page}</Layout>))

  return  getLayout (<Component {...pageProps} />  
 

  ) 

}

export default MyApp
