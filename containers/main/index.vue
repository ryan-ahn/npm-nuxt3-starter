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
import { CONTENT_PAGE } from '@common/content';
import { BUTTON_MAIN } from '@common/button';
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
  @include boxSet(100%, 100vh, 0px);
  @include colorSet(white, #111111);
  padding-top: 10%;
}
.title-box {
  @include flexSet(center, center, column);
  gap: 30px;
  padding: 50px;
  & > h1 {
    @include fontSet(100px, 700, 110px);
    white-space: pre-wrap;
  }
  & > p {
    @include fontSet(18px, 200, 30px);
  }
}
.button-box {
  @include flexSet(center, center, row);
  gap: 10px;
}
</style>
