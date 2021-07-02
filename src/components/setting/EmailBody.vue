<template>
  <div class="pt-6 pl-10 pr-32">
    <div class="flex">
      <div class="flex-1 pr-6">
        <editor
          v-model="editorBody"
          api-key="no-api-key"
          :init="{
            height: 550,
            menubar: false,
            plugins: [],
            toolbar: '',
            content_style: '.forecolor { color: #1E22AA !important;}'
          }"
        />
      </div>
      <div class="flex-1 pl-8">
        <div class="text-3xl font-bold text-secondary">
          Instruction
        </div>
        <p class="text-base font-medium">
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt justo dictum tristique donec amet, hendrerit consequat quis elementum. Non pharetra, consectetur hendrerit risus quisque facilisis platea phasellus amet.
          <br>
          <br>
          A, bibendum commodo quam scelerisque non massa. Scelerisque morbi ultrices nibh id quisque sed suspendisse elementum. Volutpat dui blandit id ornare libero, pulvinar sapien. Eget pellentesque lorem amet rhoncus semper eget augue.
          <br>
          <br>
          Diam tellus morbi pellentesque massa sagittis accumsan praesent vitae. Mattis urna sit fames quam ornare habitasse. Lectus id felis, id magnis dictum est, sed consequat, eget. Faucibus morbi amet mattis mi facilisi mattis. Mauris bibendum pellentesque tristique ultricies. Vulputate tristique aenean etiam felis nec sagittis libero nunc. Sit augue morbi bibendum bibendum. Feugiat tincidunt sit mauris, risus, amet, felis.
        </p>
      </div>
    </div>
    <div class="flex mt-5">
      <dp-button
        class="w-36 px-1 text-white bg-accent-blue py-2 border-accent-blue border-2 rounded-lg"
        text="Link tag"
        @click="linkTag"
      />
      <dp-button
        class="w-36 ml-3 px-1 text-white bg-accent-blue py-2 border-accent-blue border-2 rounded-lg"
        text="Passcode tag"
        @click="passcodeTag"
      />
    </div>
  </div>
  <div class="flex mt-15 justify-end pr-9 pb-9">
    <dp-button
      text="Cancel"
      class="w-36 bordered-dp-button px-3 mr-2 border rounded-xl font-bold text-center bg-gray-500 text-white"
    />
    <dp-button
      text="Save"
      class="w-36 ml-3 py-5 px-14 text-white bg-secondary h-btn-builder min-h-btn-builder my-auto rounded-xl"
      @click="todo"
    />
  </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import Editor from "@tinymce/tinymce-vue";
import DpButton from '../buttons/DpButton.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  components: { DpButton, 'editor': Editor},
  setup() {
    const store = useStore();
    const emailBody = computed(() => store.getters['setting/emailBody'])
    var editorBody = ref("");
    editorBody.value = emailBody;
    return {store, editorBody, emailBody};
  },
  watch:{
    'editorBody' : {
      handler(val){
        this.$store.commit("setting/setEmailBody",val);
      },
      deep:true,
      immediate:false
    },
  },
  methods: {
    linkTag() {
      this.insertLink('<span class="forecolor">{link}</span><span>&nbsp;</span>');
    },
    passcodeTag() {
      this.insertLink('<span class="forecolor">{passcode}</span><span>&nbsp;</span>');
    },
    insertLink(link) {
      // eslint-disable-next-line no-undef
      tinymce.activeEditor.execCommand('mceInsertContent', false, link);
    },
  }
}
</script>

<style>
    .tox-notifications-container {display: none !important;}
    .tox-statusbar {display: none !important;}
    .tox-tinymce{border:1px solid #E2E2EA !important; border-radius:10px !important;}
</style>
