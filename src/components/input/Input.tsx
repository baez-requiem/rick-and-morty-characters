import { useEffect, useRef, useState, InputHTMLAttributes, FC } from "react"
import { Container, StyledInput, StyledLabel } from "./input.styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelFixed?: boolean
  block?: boolean
} 

const Input: FC<InputProps> = ({
  label = '',
  block = false,
  labelFixed = false,
  ...props
}) => {
  const [useUpLabel, setUpLabel] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const verifyUpLabel = () => setUpLabel(!!inputRef.current?.value)
  
  useEffect(() => {
    !!inputRef.current?.value && setUpLabel(true)
  }, [])

  return (
    <Container block={block}>
      <StyledLabel
        hasUp={labelFixed || useUpLabel}
        onClick={() => inputRef.current?.focus()}
      >
        {label}
      </StyledLabel>
      <StyledInput
        ref={inputRef}
        block={block}
        onFocus={() => setUpLabel(true)}
        onBlur={verifyUpLabel}
        {...props}
      />
    </Container>
  )
}

export default Input