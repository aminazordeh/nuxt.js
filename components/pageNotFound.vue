<template>
  <div
    id="pageNotFound"
    style="overflow: hidden; min-heigth: calc(100% - var(--headerTop-heigth))"
  >
    <div
      style="position: relative"
      class="animate__animated animate__swing center-abs"
    >
      <img
        class="full-svg"
        :src="require('../assets/images/undraw_page_not_found_su7k.svg')"
        alt="Page Not Found"
      />
      <span class="full-svg-text">صفحه مورد نظر پیدا نشد.</span>
    </div>
  </div>
</template>
