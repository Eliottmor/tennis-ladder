import { useMemo } from 'react'

const useGetClassName = (base) => {
  const getClassName = (base) => (customName) => {
    const baseAndCustom =
      customName && [base, customName].filter(Boolean).join('-')

    return [base, baseAndCustom].filter(Boolean).join(' ')
  }
  const withBaseAndClass = useMemo(() => getClassName(base), [base])

  return withBaseAndClass
}

export default useGetClassName
