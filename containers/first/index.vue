<template>
  <section class="page-wrapper">
    <h1>첫번째 페이지 컨테이너</h1>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.page-wrapper {
  @include boxSet(100%, 100vh, 0px);
  @include colorSet(white, #111111);
}
</style>
