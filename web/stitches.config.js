import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: '"Gotham SSm"'
    },
    fontSizes: {
      1: '14',
      2: '15px'
    },
    fontWeights: {
      medium: '500'
    },
    fonts: {
      combined:
        'Gotham SSm,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif'
    },
    colors: {
      action: '#3d69e1',
      actionHighlight: '#3457b2',
      error: '#b74134',
      neutral: '#f5f5f5',
      textLight: '#5c5d61',
      textLighter: '#e2e4e4'
    }
  }
})
