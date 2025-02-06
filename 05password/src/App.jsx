import {useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpassword]=useState("")

  //use ref hook
  const passref=useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for (let i =1; i <=length; i++) {
      let char =Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed,setpassword] )

  const copyPasswordtoClipboard=useCallback(()=>{
    passref.current?.select();
    //passref.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
     passwordgenerator()
  },[length,numberAllowed,charAllowed,passwordgenerator])
  return (
   
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-100 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className='className="flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder="password"
      readOnly
      ref={passref}
      />  
      <button 
      onClick={copyPasswordtoClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'> 
      <div className='flex item-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length:{length}</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberinput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex item-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="numberinput"
        onChange={()=>{
          setcharAllowed((prev)=>!prev);
        }}
        />
        <label htmlFor="numberInput">Character</label>
      </div>
    </div>
   </div>
   
 
  )
}

export default App
