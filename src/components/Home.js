import { Container } from 'react-bootstrap'
import FormAddNew from './FormAddNew'
import Header from './Header'
import TableUser from './TableUser'

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <FormAddNew />
        <TableUser />
      </Container>
    </>
  )
}

export default Home
