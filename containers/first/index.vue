<template>
  <section class="page-wrapper">
    <div class="title-box">
      <h1>{{ contentTitle }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONTENT_PAGE } from '@assets/data/content';
// variable
const contentTitle = CONTENT_PAGE.fist.title;
</script>

<style lang="scss" scoped>
.page-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100vh, 0px);
  @include colorSet(white, #111);
}
.title-box {
  @include flexSet(center, center, column);
  gap: 10px;
  padding: 50px;
  & > h1 {
    @include fontSet(100px, 700, 110px);
    white-space: pre-wrap;
  }
}
</style>
