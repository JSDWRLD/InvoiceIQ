import { createStore } from 'vuex'

export default createStore({
  state: {
    // default state to null to keep invoices closed
    invoiceModal: null,
  },
  mutations: {
    // This is used by Home and invoicemodal to allow for the mutation of the buttons
    // basically allowing for open and close
    // state is the parameter and will turn to the opposite true or false
    TOGGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal;
    },
  },
  actions: {
  },
  modules: {
  },
});