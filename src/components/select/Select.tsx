import { useEffect, useRef, useState, SelectHTMLAttributes, FC, useId } from "react"
import { Container, StyledSelect, StyledLabel } from "./select.styles"

interface OptionType {
  label: string
  value: string | number
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  labelFixed?: boolean
  block?: boolean
  options: OptionType[]
} 

const Select: FC<SelectProps> = ({
  label = '',
  block = false,
  labelFixed = false,
  options = [],
  ...props
}) => {
  const [useUpLabel, setUpLabel] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)
  const idComp = useId()
  
  const verifyUpLabel = () => setUpLabel(!!selectRef.current?.value)
  
  useEffect(() => {
    !!selectRef.current?.value && setUpLabel(true)
  }, [])

  return (
    <Container block={block}>
      <StyledLabel
        hasUp={labelFixed || useUpLabel}
        onClick={() => selectRef.current?.focus()}
      >
        {label}
      </StyledLabel>
      <StyledSelect
        ref={selectRef}
        block={block}
        onFocus={() => setUpLabel(true)}
        onBlur={verifyUpLabel}
        {...props}
      >
        {options.map(opt => (
          <option key={`${idComp}-opt-${opt.value}`} value={opt.value}>{opt.label}</option>
        ))}
      </StyledSelect>
    </Container>
  )
}

export default Select