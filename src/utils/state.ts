const INITIAL_STATE = {
  loading: false,
  success: false,
  error: false,
  initialized: false,
};

const createApiState = () => INITIAL_STATE;

const updateApiState = (state: {
  loading: false;
  success: false;
  error: false;
  initialized: false;
}) => {
  return {
    ...INITIAL_STATE,
    ...(state?.error || state?.success ? { initialized: true } : {}),
    ...state,
  };
};

export { createApiState, updateApiState };
