import React,{useEffect,useState} from 'react';
import NewInfo from "./NewInfo"
import { Button } from 'react-bootstrap'
import Info from "./Components/Info"
import Connect from "./InfoConnect"
import "./Styles/newInfoStyle.css"
import Search from "./Components/search"
import Login from "./Components/login"
import LoginConnect, { signUp } from "./loginConnect"
import { MDBIcon } from "mdbreact";
import Map from "./Components/map"

function App() {

  const [data, setData] = useState([]);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [click, setClick] = useState(false)
  const [show, setShow] = useState(false);
  const [word, setWord] = useState("")
  

  useEffect(() => {
    async function start(){
      const loggedUserJSON = sessionStorage.getItem('LoggedInfoUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        Connect.setToken(user.token)
        let data = await Connect.getAll()
        setData(data)
      }
    }
    start()
  }, [])

  const handeLogin = async (event) =>{
    // Hack for optional parameter
    typeof(event) !== 'string' && event.preventDefault()
    try {

      const user = await LoginConnect.login({
        username, password
      })
      console.log(user.token)
      sessionStorage.setItem(
        'LoggedInfoUser', JSON.stringify(user)
      ) 

      Connect.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log("Logged in")

      let data = await Connect.getAll()
      setData(data)
      
    } catch (exception) {
      alert("Login failed")
      console.log(exception)
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const user = await LoginConnect.signUp({
        username, password
      })

      await handeLogin("");

      await alert(`Succesfully created user ${username}`)
    } catch (e) {
      alert("Signup failed")
      console.error(e);
    }
  }

  const logOut = () =>{
    console.log("hello")
    setUser(null)
    sessionStorage.clear()
  }

  const copyToken = async () => {
    try {
      await navigator.clipboard.writeText(user.token);
      alert("API token copied.")
    } catch (e) {
      alert("Something went wrong :(")
    }
  }

  const allData = data.map((data) =>
    <div  key={data.id} className="shadowBackground2" >
      <Info  word={word} title={data.title} user={user} category={data.category} text={data.text} id={data.id} setData={setData} link={data.link} pic={data.pic}/>
    </div>
  )
  
  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

   
  if(user == null){
    return (
      <div >
        
        {user === null ? 
        <div>
          <h1 className="text--center">Welcome to the info bank {new Date().getFullYear()}!</h1>
      <Login setUsername={setUsername} handeLogin={handeLogin} handleSignUp={handleSignUp} setPassword={setPassword} click={click} setClick={setClick}/> 
        </div>
        : <Button className="my-2 mx-2" onClick={logOut}>Log out username: {user.username}</Button>}
      </div>
    )
  }else if(user.admin === false){
    return (
      <div>
        {show === true && <Map handleClose={handleClose} show={show}/>}
        
        {user === null ? 
        <Login setUsername={setUsername} handeLogin={handeLogin} handleSignUp={handleSignUp} setPassword={setPassword} click={click} setClick={setClick}/> 
        : <Button className="my-2 mx-2" onClick={logOut}>Log out username: {user.username}</Button>}
        
        <div className="sticky">
          <Search data={data} setData={setData} word={word} setWord={setWord}/>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary text-center" onClick={copyToken}>Copy API token to clipboard</button>
        </div>
        {allData}
      </div>
    )
  }    

  return (
    <div >
      
        {show === true && <Map handleClose={handleClose} show={show}/>}
        
        {user === null ? 
        <Login setUsername={setUsername} handeLogin={handeLogin} setPassword={setPassword} click={click} setClick={setClick}/> 
        : <Button className="my-2 mx-2" onClick={logOut}>Log out username: {user.username}</Button>}

        {user !== null && <NewInfo setData={setData}/>}
        
        <div className="sticky">
          <Search data={data} setData={setData} word={word} setWord={setWord}/>
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary text-center" onClick={copyToken}>Copy API token to clipboard</button>
        </div>
        {allData}
    </div>
  );
}

export default App;

