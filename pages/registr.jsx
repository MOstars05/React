import { Box, Button, Input, Toast } from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registr = () => {

  const API = 'http://localhost:3000/users'
  

  const [data, setData] = useState({name: '', lastName: '', email: '', phoneNumber: ''})
  const Toast = useToast()

  const navigate = useNavigate()

  const handleSubmit = () => {
    axios.post(API, data)
    .then((res) => {
      Toast({
        title: "Malumot qo'shildi",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right'
      })

      setTimeout(() => {
        navigate('/users')

      }, 2000)

    })
  }



  return (
    <Box display={'flex'} width={'100%'} gap={'20px'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'} flexDirection={'column'}>
        <FormControl display={'flex'} justifyContent={'space-between'} width={'100%'}>
          <Box>
            <FormLabel>Name</FormLabel>
            <Input onChange={(e) => setData({...data, name: e.target.value})} placeholder='Name' width={'600px'} border={'1px'} type='email' /> 
          </Box>

          <Box>
            <FormLabel>Last Name</FormLabel>
            <Input onChange={(e) => setData({...data, lastName: e.target.value})} placeholder='Last Name' width={'600px'} border={'1px'} type='email' />
          </Box>
      </FormControl>

      <FormControl display={'flex'} justifyContent={'space-between'} width={'100%'}>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input onChange={(e) => setData({...data, email: e.target.value})} placeholder='Email' width={'600px'} border={'1px'} type='email' /> 
          </Box>

          <Box>
            <FormLabel>Phone Number</FormLabel>
            <Input onChange={(e) => setData({...data, phoneNumber: e.target.value})} placeholder='Phone Number' width={'600px'} border={'1px'} type='email' />
          </Box>
      </FormControl>

      <Box width={'100%'}> 
        <Button onClick={handleSubmit} width={'100%'} bg={'green'} _hover={{bg: 'green'}} color={'white'}>Jo'natish</Button>
      </Box>

      

    </Box>
  )
}

export default Registr