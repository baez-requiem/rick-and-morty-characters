import { useFormik } from 'formik' 
import { useState } from 'react'
import { initialValues } from '../home.constants'

interface UseFiltersProps {
  onFilter: (arg0: typeof initialValues) => void
}

const useFilters = ({ onFilter }: UseFiltersProps) => {
  const [showPopover, setShowPopover] = useState<boolean>(false)

  const formik = useFormik({
    initialValues,
    onSubmit(values) {
      setShowPopover(false)
      onFilter(values)
    }
  })

  return {
    formik,
    showPopover,
    setShowPopover
  }
}

export { useFilters }