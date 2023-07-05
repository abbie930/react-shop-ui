import styled from "styled-components"

const Container = styled.div`
  height: 30px;
  background-color: #f5e5cc;
  color: #6d6363;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Free Shipping on Orders Over NTD2000
    </Container>
  )
}

export default Announcement