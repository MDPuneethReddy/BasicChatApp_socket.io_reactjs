import { Input,Button } from 'antd'
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import { RouteComponentProps} from '@reach/router'
const Endpoint="http://localhost:3333"
const socket = io(Endpoint,{ transports : ['websocket', 'polling', 'flashsocket'] });
interface Iprops extends RouteComponentProps{

}
export const Chat:React.FC<Iprops>=(props:Iprops)=> {
  const [name,setName]=useState<any>("")
  const [message,setMessage]=useState<any>("")
  const [chat, setChat] = useState<Array<any>>([])
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  const onMessageSubmit = e => {
    e.preventDefault()
    if(message!=="" && name!==""){
    socket.emit('message', { name, message })
    setMessage("")
  }
}
  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className="card">
      <Input placeholder="Enter the name" type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}></Input>
            <Input placeholder="Enter the message" type="text" value={message} onChange={(e)=>{
                setMessage(e.target.value)
            }}></Input>
            <Button  onClick={onMessageSubmit}>send</Button>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  )
}