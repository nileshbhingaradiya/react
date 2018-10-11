import { Accessibility } from '../../interfaces'

/**
 * @description
 *  Adds role='button' if element type is other than 'button'. This allows screen readers to handle the component as a button.
 *  Adds attribute 'aria-disabled=true' based on the property 'disabled'. This can be overriden by directly providing 'aria-disabled' property to the component.
 */

const buttonBehavior: Accessibility = (props: any) => ({
  attributes: {
    root: {
      role: props.as === 'button' ? undefined : 'button',
      'aria-disabled': 'aria-disabled' in props ? props['aria-disabled'] : props['disabled'],
    },
  },
})

export default buttonBehavior
