import { InputHTMLAttributes, FC, useRef, KeyboardEvent } from "react"
import { BtnSearch, Container, StyledInput } from "./searchInput.styles"
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (arg0: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onBtnClick = () => onSearch(inputRef.current?.value || '')
  const onKeyDownEnter = (event: KeyboardEvent) => event.key === 'Enter' && onSearch(inputRef.current?.value || '')

  return (
    <Container>
      <StyledInput
        ref={inputRef}
        placeholder="Search..."
        onKeyDown={onKeyDownEnter}
        {...props}
      />

      <BtnSearch onClick={onBtnClick}>
        <AiOutlineSearch size={20} />
      </BtnSearch>
    </Container>
  )
}

export default SearchInput