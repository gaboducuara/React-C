import { useEffect, useState } from "react"
import { Message } from './Message'


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'gabrielmancilladucuara@gmail.com'
    })


    const { username , email } = formState;

    const onInputChange = ({ target }) => {
        const { name , value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }


    useEffect(() => {
        // console.log('Hola mundo')
    },[])

    useEffect(() => {
        // console.log('formState Change')
    },[ formState ])

    useEffect(() => {
        // console.log('email Change')
    },[ email ])

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={onInputChange}
        />

        <input 
            type="email"
            className="form-control mt-3"
            placeholder="gabrielmancilladucuara@gmail.com"
            name="email"
            value={ email }
            onChange={onInputChange}
        />

        {
            (username ===  'strider2') && <Message /> 
            
        }
{/* 
        {
            
            (email ===  'gaabrielmancilladucuara@gmail.com') && <Message />
        } */}


    </>
  )
}
