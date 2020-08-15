import { STEPPER_SET_CURRENT_STEP } from './actions'

const defaultState = {
  currentStep: 0
}

const stepper = (state = defaultState, action) => {
  switch (action.type) {
    case STEPPER_SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.step
      }
    default:
      return state
  }
}

export default stepper
