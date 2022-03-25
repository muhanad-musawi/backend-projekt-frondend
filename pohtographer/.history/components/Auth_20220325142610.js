import { useState, useEffect } from "react"; 

const [user, setUser] = useState("");
  const [password,setPassword] = useState("");

function Auth(isShowLogin, setUser,  password , handleShowLogin ,handleLogoutUser , handleSecretLogin , isCurrentUserAdmin) {
  return (
    <div> 
       {isShowLogin ? 
        <div>
          <form onSubmit={handleSecretLogin}>
            <input onChange={e=>setUser(e.target.value)}type="text"/>
            <input onChange={e=>setPassword(e.target.value)} type="password"/>
            <input type="submit"/>
          </form>
          <button onClick={handleShowLogin}>
            X
          </button>
        </div>
        :  
        <div>
          <button onClick={handleShowLogin}>
            Secret Login
          </button>
          {isCurrentUserAdmin &&
            <button onClick={handleLogoutUser}>
              Logout
            </button>
          }
        </div>
        }
       </div>
  )
}

export default Auth