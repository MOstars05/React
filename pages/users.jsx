import { DeleteIcon } from '@chakra-ui/icons'
import { Box, useToast } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Users = () => {

  const [data, setData] = useState([])
  const toast = useToast()

  const API = 'http://localhost:3000/users'

  useEffect(() => {
    axios.get(API)
    .then((res) => {
      setData(res.data)
    })

  } ,[API])

  const deleteItem = (id) => {
    axios.delete(`${API}/` + id)
    .then((data) => {
      axios.get(API)
      .then((res) => {
        setData(res.data)
        toast({
          title: 'Malumot ochti.',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top-right'
        })
      })

    })
  }
  return (
    <Box>

      <Box>
        <TableContainer bg={'white'} rounded={'10px'}>
          <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>name</Th>
                  <Th>lastname</Th>
                  <Th>email</Th>
                  <Th>phoneNumber</Th>
                  <Th>Qo'shimcha</Th>
                </Tr>
              </Thead>
            <Tbody>

              {data.map((item, i ) => (
                <Tr key={i}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.lastName}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phoneNumber}</Td>
                <Button onClick={() => deleteItem(item.id)} bg={'red'} _hover={{bg: 'red'}} colorScheme='blue'><DeleteIcon /></Button>
              </Tr>

              ))}
                
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

    </Box>
  )
}

export default Users