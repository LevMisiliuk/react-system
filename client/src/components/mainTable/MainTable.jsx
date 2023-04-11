import React, { useEffect, useState } from 'react'
import './styles.scss'
import axiosInstance from 'axiosInstance'
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  TableCaption,
  Thead,
  Th,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Link
} from '@chakra-ui/react'

function MainTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([])

  console.log(data)

  useEffect(() => {
    axiosInstance.get('/api/user')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <Link
        href='https://api.instagram.com/oauth/authorize?client_id=136615522709924&redirect_uri=https://vostokmedservice.com.ua&scope=basic&response_type=code'
        isExternal
      >Chakra UI</Link>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Users data</TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => (
              <Tr
                _hover={{ background: 'gray.100', cursor: 'pointer' }}
                transition="all 0.2s ease-in-out"
                onClick={onOpen}
                key={item.id}
              >
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo dolor dolorem facilis quis qui soluta. Vitae quos voluptate nam recusandae? Distinctio, sapiente ad. Suscipit laboriosam, laborum rerum quis perferendis nesciunt necessitatibus dolores at explicabo perspiciatis iusto voluptates sequi labore deserunt ab consequuntur eius ut est nobis quidem? Quas, dolorum?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MainTable