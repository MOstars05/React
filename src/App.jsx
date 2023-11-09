import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Registr from '../pages/registr'
import Users from '../pages/users'

function App() {

  
 
  return (
    <Box className='wrapper'display={'flex'} justifyContent={'center'} flexDirection={'column'} minHeight={'100vh'}>

      <Box>
        <Routes>
          <Route path='registr' element={<Registr />}></Route>
          <Route path='users' element={<Users />}></Route>

        </Routes>
      </Box>

      
      

    </Box>

  )
}

export default App
