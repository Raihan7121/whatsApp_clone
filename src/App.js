
import { GoogleOAuthProvider } from '@react-oauth/google';

//components

import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

    const clientId='1047192581614-2ufkv4n4npeimgtt4dqmmfknqj4bv44p.apps.googleusercontent.com'

  return (

    <GoogleOAuthProvider clientId={clientId}>
     <AccountProvider> 
      
      <Messenger />

    </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;
