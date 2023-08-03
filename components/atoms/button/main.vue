<template>
  <button
    class="button-wrapper"
    :style="{
      border: type === 'A' ? '0px' : '1px solid #252525',
      background: type === 'A' ? '#252525' : 'white',
      opacity: attrDisabled ? 0.3 : 1,
    }"
    :disabled="attrDisabled"
    @click="onClickFunction"
  >
    <p :style="{ color: type === 'A' ? 'white' : '#252525' }">
      {{ text }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { IAtomsButtonMainProps } from '@interface/props';
// Props
const {
  type,
  text,
  attrDisabled,
  onClickFunction,
} = defineProps<IAtomsButtonMainProps>();
</script>

<style lang="scss" scoped>
.button-wrapper {
  @include flexSet(center, center, row);
  @include boxSet(auto, auto, 30px);
  padding: 12px 30px;
  cursor: pointer;
  & > p {
    @include fontSet(17px, 600, 22px);
    @include ellipsisSet(1, 22px);
  }
}
</style>
