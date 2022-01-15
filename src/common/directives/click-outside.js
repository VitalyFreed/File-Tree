export default {
  created(el, binding) {
    el.closeModal = (event) => {
      if (el !== event.target) {
        binding.value();
      }
    };
    document.addEventListener('click', el.closeModal);
  },
  unmounted(el) {
    document.removeEventListener('click', el.closeModal);
  }
}