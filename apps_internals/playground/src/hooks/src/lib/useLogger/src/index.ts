import { APP_NAME, __DEBUG__, __DEV__ } from '../../../../index'

enum logs_type {
  LOG = 'LOG',
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  Trace = 'TRACE'
}

const getTimeStamp = (): string => new Date().toISOString()

const getLoggerMessage = (
  log_type: logs_type,
  namespace: string,
  message: string
): string =>
  `[vezham] [${getTimeStamp()}] [${log_type}] [${namespace}] ${message}`
const strictLog = () => {
  if (__DEV__) return false
  return true
}

const useLogger = {
  log: (namespace = APP_NAME, message: string, object?: any) => {
    console.log(
      getLoggerMessage(logs_type.LOG, namespace, message),
      object || ''
    )
  },
  debug: (namespace = APP_NAME, message: string, object?: any) => {
    if (!__DEBUG__) return

    console.info(
      getLoggerMessage(logs_type.DEBUG, namespace, message),
      object || ''
    )
  },
  info: (namespace = APP_NAME, message: string, object?: any) => {
    if (strictLog()) return

    console.info(
      getLoggerMessage(logs_type.INFO, namespace, message),
      object || ''
    )
  },
  warn: (namespace = APP_NAME, message: string, object?: any) => {
    if (strictLog()) return

    console.warn(
      getLoggerMessage(logs_type.WARN, namespace, message),
      object || ''
    )
  },
  error: (namespace = APP_NAME, message: string, object?: any) => {
    if (strictLog()) return

    console.error(
      getLoggerMessage(logs_type.ERROR, namespace, message),
      object || ''
    )
  }
  // trace: (namespace = APP_NAME, message: string, object?: any) => {
  //   if (strictLog()) return

  //   let log_msg = getLoggerMessage(logs_type.Trace, namespace, message);
  //   if (!(object instanceof Error)) console.trace(log_msg, object);
  //   else console.trace(log_msg, object)
  // }
}

export { useLogger }
