import { useCallback } from 'react'
import {
  Wrapper,
  Heading,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from '../components'

export default function Home() {
  return (
    <Wrapper>
      <Heading>Optimze React Render</Heading>
      <StyledForm>
        <StyledLabel htmlFor="name">Tên</StyledLabel>
        <StyledInput type="text" id="name" name="name" />
        <StyledLabel htmlFor="age">Tuổi</StyledLabel>
        <StyledInput type="number" id="age" name="age" />
        <StyledButton>Đăng ký</StyledButton>
      </StyledForm>
    </Wrapper>
  )
}
