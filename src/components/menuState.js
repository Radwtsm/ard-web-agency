function Menureducer(isOpen,action) {
    if (action.type === 'closed') {
        return false
    } else if (action.type === 'opened') {
        return true
    } else {
        return !isOpen
    }
  }

export default Menureducer