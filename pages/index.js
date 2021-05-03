import { useCallback, useState } from 'react'
import {
  Wrapper,
  Heading,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from '../components'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = useCallback((ev) => {
    setName(ev.target.value)
  }, [])

  const handleEmailChange = useCallback((ev) => {
    setEmail(ev.target.value)
  }, [])

  return (
    <Wrapper>
      <Heading>Optimze React Render</Heading>
      <StyledForm>
        <StyledLabel htmlFor="name">Họ và tên</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          name="name"
          placeholder="Tommy Teo"
          value={name}
          onChange={handleNameChange}
        />
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          placeholder="tommyteo@trungtambangdialauhaingoai.vjp"
          value={email}
          onChange={handleEmailChange}
        />
        <StyledButton>Đăng ký</StyledButton>
      </StyledForm>
    </Wrapper>
  )
}
