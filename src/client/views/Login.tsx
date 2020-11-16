import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader';
import styled from 'styled-components';


const Login = (props: LoginProps) => {

    const history = useHistory();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('login submitted');
        history.push('/');

    }

    return (

        <Layout>

            <div className="container">

                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Playfair Display',
                            weights: [400, '400i'],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />

                <div className="sidenav">
                    <div className="login-nav-text">
                        <h1>WGAS</h1>
                        <h2>Admin Portal</h2>
                    </div>
                </div>

                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <div className="form-label">
                                <label>User Name</label>
                            </div>
                            <input value={username} onChange={e => setUsername(e.target.value)} />

                        </div>

                        <div className="form-group">
                            <div className="form-label">
                                <label>Password</label>
                            </div>
                            <input value={password} onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <button onClick={login} type="submit" className="button" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

    );
}





const Layout = styled.div`

.sidenav {
  height: 100%;
  background-color: rgba(221, 214, 211, 0.5);
  overflow-x: hidden;
  padding-top: 30px;
  
}



.login-form {
  font-size: 14px;
  padding: 30px 30px;

}


@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 30px;
  }

  .login-nav-text{
    margin-top: 40%;
    
  }

}

@media screen and (max-width: 450px) {
  .login-form{
      margin-top: 10%;
  }


}

@media screen and (min-width: 768px){
  .login-form{
      margin-left: 40%; 
  }

  .sidenav{
      width: 40%;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
  }

  .login-form{
      margin-top: 20%;
  
  }

}

.login-nav-text{
  margin-top: 40%;
  padding: 5% 25%;
  color: #696463;
  
}

.login-nav-text h1{
  font-family: 'Playfair Display', sans-serif;
  
}

.login-nav-text h3{
  font-family: 'Playfair Display', sans-serif;
 
  
}

 .form-group{
  padding: 10px 10px;
  font-size: 20px;
} 


label {
  font-family: 'Playfair Display', sans-serif;
  text-align:left;
  padding-right:20px;
}


input {
  font-family: 'Playfair Display', sans-serif; 
  padding-right: 10px;
  font-size: 25px;
  
}
 

.button{
  font-family: 'Playfair Display', sans-serif;
  font-size: 18px;
  background-color: rgba(221, 214, 211, 0.5);
  border-color: whitesmoke;
  color: grey;

}


}
`



interface LoginProps { }

export default Login;