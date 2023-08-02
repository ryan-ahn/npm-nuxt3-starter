export default defineNuxtRouteMiddleware((to, from) => {
  // Stack Animation
  if (to.path === '/first') {
    to.meta.pageTransition = { name: 'page-left' };
    from.meta.pageTransition = { name: 'page-left' };
  }
  if (to.path === '/') {
    to.meta.pageTransition = { name: 'page-right' };
    from.meta.pageTransition = { name: 'page-right' };
  }
});
