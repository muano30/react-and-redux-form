import './App.css';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addMessage} from './Redux/Actions/actionCreator'

function DisplayMessages(){
  const dispatch = useDispatch()
  const message = useSelector(state => state.message)
  const [form, setForm] = useState({
         input: "",
         
        })
        const handleChange = (event) =>{
            setForm({...form,
              [event.target.name]: event.target.value,
            
            })
          }
          const submitMessage = () => {
              dispatch(addMessage(form.input))
            }
  return (
    <div className="form">
      <h2>Type in a new Message</h2>
     <input onChange={handleChange} value={form.input} name='input' placeholder="yourMessage"/>
     <button onClick={submitMessage}>Submit</button>
      <ul>
      {message.map((text, index)=>{
        return(
          <li key={index}>{text}</li>
        )
      })}

      </ul>

    </div>
  )
}

 //   constructor(props){
//     super(props)
//     this.state =({
//       input: "",
//       messages: []
//     });
//   }

// handleChange(event){
//   this.setState({
//     input: event.target.value,
//     messages: this.state.messages 
//   })
// }

// submitMessage(){
//   this.setState({
//     input: "",
//     messages: [...this.state.messages, this.state.input]
//   })
// }
// render(){
//   return(
//     <div>
//       <h2>Type in a new Message</h2>
//       <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
//       <button onClick={this.submitMessage.bind(this)}>Submit</button>
//       <ul>
//         {this.state.messages.map((item, index) =>{
//           return(
//             <li key={index}>{item}</li>
//             )
//           })}

//       </ul>

//     </div>
//   )
// }

// }

export default DisplayMessages;

