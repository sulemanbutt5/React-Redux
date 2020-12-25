import {useSelector,useDispatch} from 'react-redux'

function App() {

  const counter=useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const stylebutton={backgroundColor:'crimson',height:50,width:150,borderWidth:2,borderColor:'black',margin:10,padding:10,}
  
  return (
    <div className='APP'>
      <h1 className='header'>
        COUNTER: {counter}
      </h1>
      <div className='buttons'>
      <button style={stylebutton} onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
      <br/>
      <button style={stylebutton} onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
      <br/>
      <button style={stylebutton} onClick={()=>dispatch({type:'RESET'})}>RESET</button>
      <br/>
      </div>
    </div>
  );
}

export default App;
