<template>
    <div class="bottom-btn" :style="setWdith">
      <div class="fixedButton">
        <div class="left">
          <slot name="left"></slot>
        </div>
        <div class="right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      setWdith () {
        return {
          width: `calc(100% - ${this.buttonWidth}px)!important`,
          transition: `.3s width ease-in-out`
        }
      },
      buttonWidth () {
        return this.$store.state.leftNavWidth
      }
    }
  }
</script>

<style scoped>
.fixedButton {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  justify-content: flex-start;
}
.right {
  display: flex;
  justify-content: flex-end;
}
</style>
