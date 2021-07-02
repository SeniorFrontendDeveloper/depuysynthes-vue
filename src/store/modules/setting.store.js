export default {
  state: {
    emailBody: `<p class="text-sm font-medium">
  Hello,
  <br>
  <br>
  I would like you to check the presentataion
  <br>
  <br>
  <br>
  Here’s the link : <span
    class="forecolor"
  >
    {link}</span><span>&nbsp;</span>
  <br>
  Passcode : <span
    class="forecolor"
  >
    {passcode}</span><span>&nbsp;</span>
  <br>
  <br>
  <br>
  Let me know on user@depuy.co, if you need any help.
  <br>
  <br>
  Best,
  <br>First Last
  <br>Depuy
</p>`},
  getters: {
    emailBody(state) {
      return state.emailBody;
    },
  },
  mutations: {
    setEmailBody(state, payload) {
      state.emailBody = payload
    },
  },
  actions: {

  },
}
