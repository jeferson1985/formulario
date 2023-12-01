import { reactive, readonly } from 'vue'

const alerts = reactive([])
const timeouts = reactive([])

export const get_alerts = readonly(alerts)

/*
 * status: string. Possible values 'success', 'error', 'info' 'warning'
 * message: string
 */
export const addMessage = (status, message) => {
  alerts.push({ status, message })
  const timeout = setTimeout(() => {
    alerts.splice(0, 1)
    timeouts.splice(0, 1)
  }, 10000)

  timeouts.push(timeout)
}

export const removeByIndex = (index) => {
  const timeout = timeouts[index]
  clearTimeout(timeout)

  alerts.splice(index, 1)
  timeouts.splice(index, 1)
}
