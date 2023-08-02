<template>
  <div class="nav-wrapper">
    <img src="/logo.png" alt="logo" class="logo-box" />
    <NuxtLink to="/">
      <AtomsButtonSub type="B" :text="buttonText" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { BUTTON_SUB } from '@common/button';
// Variable
const buttonText = BUTTON_SUB.gnb.A;
</script>

<style lang="scss" scoped>
.nav-wrapper {
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 55px, 0px);
  padding: 0 20px;
  @include colorSet(white, #111111);
}
.logo-box {
  @include boxSet(50px, 40px, 0px);
  object-fit: contain;
}
</style>
