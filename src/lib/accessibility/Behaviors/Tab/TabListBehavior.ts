import { Accessibility, FocusZoneMode } from '../../interfaces'

const TabListBehavior: Accessibility = {
  attributes: {
    root: {
      role: 'tablist',
    },
  },
  focusZone: {
    mode: FocusZoneMode.Wrap,
    props: {
      isCircularNavigation: false,
    },
  },
}

export default TabListBehavior
