import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react'
import axios from 'axios'
const TableUser = () => {
  const [listUsers, setListUsers] = useState('')
  const fetchAllUser = async () => {
    let res = await axios.get('http://localhost:8080/users/all')
    const data = res && res.data ? res.data : []
    setListUsers(data)
    console.log('object:', data)
  }

  const handleDeleteUser = user => {
    console.log('Checking delete user:', user)
  }
  useEffect(() => {
    fetchAllUser()
  }, [])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Email address</th>
          <th>Username</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <tr key={`users-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDeleteUser(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}

export default TableUser
