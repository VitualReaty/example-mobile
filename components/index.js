import lodash from 'lodash'
import components from './components'
import element from './util/element'
import popup from './popup'
import scroller from './scroller'

export default {
  options: {
    prefix: 'Mn',
    cssPrefix: ''
  },
  install (Vue, options) {
    // Assign default & options
    this.options = Object.assign({}, this.options, options)

    // Using components
    lodash.forEach(components, (component, name) => {
      Vue.component(`${this.options.prefix}${name}`, component)
    })

    // Adding scroll save & set
    Vue.human = {
      prefix: this.options.prefix,
      cssPrefix: this.options.cssPrefix
    }

    Vue.prototype.$human = Vue.human

    Vue.use(scroller)
    Vue.use(element)
    Vue.use(popup)
  }
}
