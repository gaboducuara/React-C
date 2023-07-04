import { useState } from 'react';
import { UserContext } from './UserContex';

// const user = {
//   id: 123,
//   name: 'gabriel mancilla ducuara',
//   email: 'gabrielmancilladucuara@gmail.com',
// }


export const UserProvider = ({ children }) => {
  
  const [ user , setUser ] = useState();

  return (

        <UserContext.Provider value={{ user , setUser }}>
            { children }
        </UserContext.Provider>
  )
}
