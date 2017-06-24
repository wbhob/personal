function requireAll (r) {
  r.keys().forEach(r);
}
requireAll(require.context('./', true, /\.(jpe?g|png|gif|svg)$/i));
