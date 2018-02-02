const isBrowser =
  typeof window === 'object' &&
  typeof document === 'object' &&
  typeof navigator === 'object';

export default (() => {
  if (isBrowser) return require('swiper');
  return function Swiper() {};
})();
