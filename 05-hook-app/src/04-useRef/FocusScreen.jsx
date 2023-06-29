import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();
  
  const onClick = () => {
        inputRef.current.select();
  }

  return (
    <>
      <h1>focus Screen</h1>
      <hr />

      <input 
          ref={ inputRef}
          type="text" 
          placeholder="ingrese su nombre"
          className="form-control"
      />

      <button className="btn btn-primary mt-3"
        onClick={ onClick }
      >
        Set Focus
      </button>


    </>
  )
}
