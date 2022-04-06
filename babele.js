Hooks.on('init', () => {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'pf2e_compendium_chn',
      lang: 'cn',
      dir: 'compendium'
    });
  }
});
