<template>
  <button
    class="button-wrapper"
    :style="{
      width: type === 'block' ? '100%' : 'auto',
      border: `1px solid ${border}`,
      color: attrDisabled ? 'white' : textColor,
      background: attrDisabled ? '#f1f1f1' : backColor,
    }"
    :disabled="attrDisabled"
    @click="onClickFunction"
  >
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { IButtonCustomATypeProps } from '@interface/props';
// Props
const {
  type,
  text,
  textColor,
  backColor,
  border = 'transparent',
  attrDisabled,
  onClickFunction,
} = defineProps<IButtonCustomATypeProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  @include flexSet(center, center, row);
  @include boxSet(auto, auto, 40px);
  padding: 14px 20px;
  cursor: pointer;
  background-color: white;
  & > p {
    @include fontSet(17px, 600, 22px);
    @include ellipsisSet(1, 22px);
  }
}
</style>
