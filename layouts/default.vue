<template>
  <div>
    <MoleculesNavigatorGnb/>
    <slot/>
  </div>
</template>

<style>
/* UpperStack */
.page-left-leave-active,
.page-right-enter-active {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: all 0.4s linear;
}
.page-left-enter-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  transition: all 0.4s linear;
}
/* StackUp */
.page-left-enter-from {
  transform: translateX(100%);
}
.page-left-leave-to {
  transform: translateX(-15%);
}
/* StackDown */
.page-right-leave-to {
  transform: translateX(100%);
}
.page-right-enter-from {
  transform: translateX(-15%);
}
</style>
