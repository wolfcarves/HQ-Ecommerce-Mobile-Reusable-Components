import React, { useState } from 'react'

const useToggle = () => {
  const [state, setState] = useState<boolean>(false)

  const toggleState = () => setState((prevState) => !prevState)

  return { state, toggleState }
}

export default useToggle
