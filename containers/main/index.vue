<template>
  <section class="page-wrapper">
    <h1>메인페이지 컨테이너</h1>
    <AtomsButtonMain type="A" text="hi" />
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.page-wrapper {
  @include boxSet(100%, 100vh, 0px);
  @include colorSet(white, #111111);
}
</style>
