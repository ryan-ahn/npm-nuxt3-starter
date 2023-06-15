<template>
  <section class="wrapper">
    <h1>메인페이지 컨테이너</h1>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useModalStore from '@store/useModalStore';

const store = useModalStore();
const { isOpen } = storeToRefs(store);
console.log('스토어 데이터 확인 : ' + isOpen.value);
</script>

<style lang="scss">
.wrapper {
  font-size: 50px;
  font-weight: 500;
}
</style>
