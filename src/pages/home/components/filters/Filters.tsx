import { FC } from 'react'

import { IconButton, Input, Button, Select } from "src/components"
import { FormContent, Container, PopoverContent, Title } from "./filters.styles"

import { MdOutlineTune } from 'react-icons/md'
import { BiReset } from 'react-icons/bi'

import { genderOpts, initialValues, statusOpts } from "../../home.constants"
import { useFilters } from "../../hooks/useFilters"

interface FiltersProps {
  onFilter: (arg0: typeof initialValues) => void
  total?: number
}

const Filters: FC<FiltersProps> = ({ onFilter, total }) => {

  const {
    showPopover,
    setShowPopover,
    formik: { 
      values,
      handleChange,
      handleSubmit,
      resetForm,
      submitForm
    }
  } = useFilters({onFilter})

  const reset = () => {
    resetForm()
    submitForm()
  }

  return (
    <Container>
      <Title>Characters {total}</Title>
      <FormContent onSubmit={handleSubmit}>
        <IconButton
          size={45}
          type="button"
          color="white"
          variant="outlined"
          onClick={() => setShowPopover(!showPopover)}
        >
          <MdOutlineTune size={20} />
        </IconButton>

        <IconButton
          size={45}
          type="button"
          color="white"
          variant="outlined"
          onClick={reset}
        >
          <BiReset size={20} />
        </IconButton>

        <PopoverContent show={showPopover}>
          <Input
            name="name"
            label="Name:"
            value={values.name}
            onChange={handleChange}
          />

          <Select
            labelFixed
            name="status"
            label="Status:"
            options={statusOpts}
            value={values.status}
            onChange={handleChange}
          />

          <Input
            name="species"
            label="Species:"
            value={values.species}
            onChange={handleChange}
          />

          <Input
            name="type"
            label="Type:"
            value={values.type}
            onChange={handleChange}
          />

          <Select
            labelFixed
            name="gender"
            label="Gender:"
            options={genderOpts}
            value={values.gender}
            onChange={handleChange}
          />

          <Button color="sky_600" type="submit">Filter</Button>
        </PopoverContent>
      </FormContent>
    </Container>
  )
}

export default Filters