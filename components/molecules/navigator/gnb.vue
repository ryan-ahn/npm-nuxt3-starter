<template>
  <div class="nav-wrapper">
    <img
      src="/logo.png"
      alt="logo"
      class="logo-box"
    >
    <NuxtLink to="/">
      <AtomsButtonSub :text="buttonText"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { BUTTON_SUB } from '@assets/data/button';
// Variable
const buttonText = BUTTON_SUB.gnb.text;
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  @include flexSet(space-between, center, row);
  @include boxSet(100%, 55px, 0px);
  padding: 0 20px;
  border-bottom: 1px solid #333;
  @include colorSet(white, #111);
}
.logo-box {
  @include boxSet(50px, 40px, 0px);
  object-fit: contain;
}
</style>
