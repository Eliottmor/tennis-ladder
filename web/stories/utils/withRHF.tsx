import { StoryFnReactReturnType } from '@storybook/react/dist/esm/client/preview/types'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const StorybookFormProvider = ({ children }: { children: JSX.Element }) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form>
        {children}
      </form>
    </FormProvider>
  )
}

// eslint-disable-next-line react/display-name
export const withRHF = () => (
  Story: FC
): StoryFnReactReturnType => (
  <StorybookFormProvider>
    <Story />
  </StorybookFormProvider>
)