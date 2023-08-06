<template>
  <FirstContainer/>
</template>

<script setup lang="ts">
import FirstContainer from '@containers/first/index.vue';
import { META_PAGE } from '@assets/data/meta';

// Meta
useHead({
  title: META_PAGE.firstPage.page_title,
  meta: [{
    name: 'description',
    content: META_PAGE.firstPage.page_description,
  }],
  link: [{
    rel: 'canonical',
    href: META_PAGE.firstPage.page_cannonical_link,
  }],
});
// Seo Meta
useSeoMeta({
  title: META_PAGE.firstPage.page_title,
  ogTitle: META_PAGE.firstPage.page_title,
  description: META_PAGE.firstPage.page_description,
  ogDescription: META_PAGE.firstPage.page_description,
  ogImage: META_PAGE.firstPage.page_image,
  twitterCard: 'summary_large_image',
});
// Layout
definePageMeta({
  layout: 'default',
});
</script>
