<template>
  <div
    class="relative flex items-center border outline focus-within:border-gray-900 rounded-lg"
  >
    <SvgIcon
      class="ml-4 w-6 h-6"
      :name="icon"
    />

    <input
      :id="id"
      v-model="message"
      :name="id"
      :type="type"
      placeholder=" "
      required
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
    >
    <label
      :for="id"
    >{{ labelValue }}</label>
    <SvgIcon
      v-if="initialInputType === 'password'"
      class="h-5 w-5 mr-2 text-primary cursor-pointer"
      :name="type === 'text'? 'eyeOff' : 'view'"
      @click="$emit('toggleType')"
    />
  </div>
</template>

<script>
import { useModelWrapper } from "@/utils/modelWrapper";
import { ref } from "@vue/reactivity";

export default {
  props: {
    id: { 
      type: String, 
      required:true
    },
    type: {
      type: String, 
      required:true
    },
    placeholder: {type:String, required:true},
    label: {type:String, required:true},
    modelValue: {type:String, required:true},
    icon: {type:String, required:true},
    initialInputType: {
      type: String, 
      required: false, 
      default:()=>{return 'text'}
    }
  },

  emits:['toggleType', 'update:modelValue'],

  setup(props, { emit }) {
    const focus = ref(false);
    const message = useModelWrapper(props, emit);

    const labelValue = ref(props.placeholder);
    const handleFocus = (value) => {
      focus.value = value;
      if (value || message.value.length > 0) labelValue.value = props.label;
      else labelValue.value = props.placeholder;
    };

    return {
      message,
      focus,
      labelValue,
      handleFocus,
    };
  },
};
</script>

<style lang="postcss" scoped>
input {
  @apply block px-4 py-3 w-full text-sm appearance-none focus:outline-none bg-transparent;
}
label {
  @apply absolute text-xs text-gray-500 bg-white px-2 ml-10 pt-4 pb-3 duration-300 origin-0 top-0;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
}
</style>
