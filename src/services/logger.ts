const TYPES = {
  DEBUG: "debug",
  INFO: "info",
  SUCCESS: "success",
  ERROR: "error",
};

const log = (type: string, ...args: Array<any>) => {
  // Log only in dev mode

  // if (!__DEV__) {
  //   return;
  // }

  switch (type) {
    case TYPES.DEBUG: {
      console.log(...args);
      break;
    }
    case TYPES.INFO: {
      const [title, ...rest] = args;
      console.log(`%c${title}`, "color: #348feb; font-weight: 600", ...rest);
      break;
    }
    case TYPES.SUCCESS: {
      const [title, ...rest] = args;
      console.log(`%c${title}`, "color: #25b02e; font-weight: 600", ...rest);
      break;
    }
    case TYPES.ERROR: {
      const [title, ...rest] = args;
      console.log(`%c${title}`, "color: #c73724; font-weight: 600", ...rest);
      break;
    }
    default:
      break;
  }
};

const Logger = {
  debug: (...args) => log(TYPES.DEBUG, ...args),
  info: (...args) => log(TYPES.INFO, ...args),
  success: (...args) => log(TYPES.SUCCESS, ...args),
  error: (...args) => log(TYPES.ERROR, ...args),
};

export default Logger;
