<template>
  <div class="twk-input">
    <label :class="{ 'text-red': hasError }" :for="labelId">{{ label }}</label>

    <div class="container"
      :style="{height: height}"
      :class="[borderColor, {'border-red': hasError}]">

      <div class="slot before" v-if="$slots.before">
        <slot name="before"></slot>
      </div>

      <div class="flex-grow">
        <input
          :style="{height: height}"
          ref="input"
          class="p-3 w-full h-full active:outline-none focus:outline-none"
          :id="labelId"
          v-model="inputValue"
          :type="inputType"
          :disabled="disabled"
          :placeholder="placeholder || 'Type here..'"
          v-on="listeners"
        />
      </div>

      <div class="slot after" v-if="$slots.after">
        <slot name="after"></slot>
      </div>
    </div>
    <em class="text-error" v-html="errorMessage"></em>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'auto'
    },
    value: {
      type: [Number, String],
      required: true
    },
    placeholder: {
      type: String
    },
    error: {
      type: [String, Boolean],
      default: false
    }
  },
  data: () => {
    return {
      borderColor: 'border-gray-2',
      errorMsg: null,
      inputValue: null
    }
  },
  computed: {
    labelId () {
      return `inputId${this.getRandomInt()}`
    },
    hasError () {
      return this.error
    },
    errorMessage () {
      return typeof this.error === 'boolean' ? this.errorMsg : this.error
    },
    inputType () {
      if (this.password) return 'password'
      if (this.email) return 'email'
      return 'text'
    },
    listeners () {
      return {
        ...this.$listeners,
        focus: e => {
          this.$emit('focus', e)
          this.borderColor = 'border-green'
        },
        input: e => this.$emit('input', e.target.value),
        blur: e => {
          this.$emit('blur', e)
          this.borderColor = 'border-gray-2'
        }
      }
    }
  },
  methods: {
    getRandomInt () {
      const min = 1
      const max = 1000000000
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.inputValue = this.value
    })
  }
}
</script>
