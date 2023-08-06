<template>
  <section class="page-wrapper">
    <div class="title-box">
      <h1>{{ contentTitle }}</h1>
      <p>{{ contentDescription }}</p>
    </div>
    <div class="button-box">
      <AtomsButtonMain
        type="A"
        :text="confirmButtonText"
        :attrDisabled="confirmButtonDisabled"
        :onClickFunction="() => onClickRouteToStack(confirmButtonPath)"
      />
      <AtomsButtonMain
        type="B"
        :text="cancelButtonText"
        :attrDisabled="cancelButtonDisabled"
        :onClickFunction="() => onClickRouteToStack(cancelButtonPath)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONTENT_PAGE } from '@assets/data/content';
import { BUTTON_MAIN } from '@assets/data/button';
// Hooks
const router = useRouter();
// variable
const contentTitle = CONTENT_PAGE.main.title;
const contentDescription = CONTENT_PAGE.main.description;
const confirmButtonText = BUTTON_MAIN.main.A.text;
const confirmButtonDisabled = BUTTON_MAIN.main.A.disabled;
const confirmButtonPath = BUTTON_MAIN.main.A.path;
const cancelButtonText = BUTTON_MAIN.main.B.text;
const cancelButtonDisabled = BUTTON_MAIN.main.B.disabled;
const cancelButtonPath = BUTTON_MAIN.main.A.path;
// functions
const onClickRouteToStack = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss">
.page-wrapper {
  @include flexSet(center, center, column);
  @include boxSet(100%, 100vh, 0px);
  @include colorSet(white, #111111);
}
.title-box {
  @include flexSet(center, center, column);
  gap: 10px;
  padding: 50px;
  & > h1 {
    @include fontSet(100px, 700, 110px);
    white-space: pre-wrap;
  }
  & > p {
    @include fontSet(16px, 100, 30px);
    text-align: center;
    white-space: pre-wrap;
  }
}
.button-box {
  @include flexSet(center, center, row);
  gap: 10px;
}
</style>
