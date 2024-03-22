
  i18next.init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          // translation data
        }
      },
      // other languages
    };
    fallbackLng: 'en',
    debug: true,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    };
    react: {
      wait: true
    }
  }, function(err, t) {
    // initialize language switcher
  });
</script>

////......////
  const search = document.getElementById('search');
  const options = {
    keys: ['title', 'content'],
    includeScore: true
  };
  const fuse = new Fuse(data, options); // replace `data` with your actual data
  search.addEventListener('input', function() {
    const results = fuse.search(search.value);
    // display results
  });

