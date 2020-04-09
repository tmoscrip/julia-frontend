import React, { useContext } from 'react'
import InputField from '../base_components/InputField'
import { ShaderContext } from '../../ModelProvider'
import { lowerTrim } from './../../../helpers'

export default function SmoothingToggle() {
  const ctx = useContext(ShaderContext)
  const [value, setValue] = ctx.julia.useSmoothing

  const label = 'Julia smoothing'
  const id = lowerTrim(label)
  const tooltip =
    'Toggle Julia escape iteration renormalisation. Produces smooth gradients between the boundries of n and n+1 iterations before escape'

  function onChange(e) {
    const newValue = e.target.checked
    setValue(newValue)
  }

  return <InputField type='checkbox' id={id} label={label} tooltip={tooltip} value={value} onChange={onChange} />
}
