import * as _ from 'lodash'

import { pxToRem } from '../../../../lib'
import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import { MenuProps, MenuState } from '../../../../components/Menu/Menu'
import { MenuVariables } from './menuVariables'

type MenuPropsAndState = MenuProps & MenuState

const solidBorder = (color: string) => ({
  border: `1px solid ${color}`,
})

export default {
  root: ({ props, variables: v, colors }): ICSSInJSStyle => {
    const { iconOnly, fluid, pointing, pills, underlined, vertical } = props

    return {
      display: 'flex',
      ...(iconOnly && { alignItems: 'center' }),
      ...(vertical && {
        flexDirection: 'column',
        ...(!fluid && { width: pxToRem(200) }),
        ...(iconOnly && {
          display: 'inline-block',
          width: 'auto',
        }),
      }),
      ...(!pills &&
        !iconOnly &&
        !(pointing && vertical) &&
        !underlined && {
          ...solidBorder(colors.border.initial),
          borderRadius: pxToRem(4),
        }),
      ...(underlined && {
        borderBottom: `2px solid ${v.borderColor}`,
      }),
      minHeight: pxToRem(24),
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    }
  },
} as ComponentSlotStylesInput<MenuPropsAndState, MenuVariables>
