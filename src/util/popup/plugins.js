import Confirm from '../../components/popup/confirm'
import Alert from '../../components/popup/alert'
import Toastr from '../../components/popup/toastr'
import popup from './index.js'

export default {
  install (Vue) {
    /**
     * Custom popup element
     * @param  {Object} ComponentClass Vue component object
     * @param  {Object} options        Some settings
     * @return {Object}                Vue component instance
     */
    Vue.human.popup = (ComponentClass, options = {}) => {
      return popup({ Vue, ComponentClass }, options)
    }

    /**
     * Confirm popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.confirm = (options = {}) => {
      return Vue.human.popup(Confirm, options)
    }

    /**
     * Alert popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.alert = (options = {}) => {
      return Vue.human.popup(Alert, options)
    }

    /**
     * Toastr popup component
     * @param  {Object} options Some settings
     * @return {Object}
     */
    Vue.human.toastr = (options = {}) => {
      return Vue.human.popup(Toastr, options)
    }
  }
}
