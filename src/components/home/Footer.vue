<template>
  <footer>
    <a target="_blank" href="https://github.com/drafting-dreams">GitHub
      <div class="ripple"></div>
      <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill="#1296DB" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>
    <a target="_blank" href="https://codepen.io/drafting-dreams/">CodePen
      <div class="ripple"></div>
      <img src="../../assets/codepen.png">
    </a>
    <a target="_blank" href="https://www.youtube.com/channel/UCGc1CjGFmspkt4mGZDtE8Bw">YouTube
      <div class="ripple"></div>
      <img src="../../assets/youtube.png">
    </a>
    <a target="_blank" href="https://www.instagram.com/drafting_dreams/">Instagram
      <div class="ripple"></div>
      <img src="../../assets/ins.png">
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/%E6%BD%87%E6%B4%8B-%E5%88%98-2a761514a/">LinkedIn
      <div class="ripple"></div>
      <img src="../../assets/linkedin.png">
    </a>
  </footer>
</template>

<style lang="sass">
  footer
    background-color: #35495E
    display: flex
    justify-content: center
    a
      position: relative
      font-size: 0
      .ripple
        display: none
      img, svg
        padding: 10px
        width: 25px
        height: 25px
      &:hover
        .ripple
          display: inline-block
          position: absolute
          right: 50%
          top: 50%
          background-color: transparent
          border: 1px solid rgba(12,96,219, .5)
          border-radius: 50%
          animation: rippleEffect 1.3s infinite
        img, svg
          transform: scale(.7)
  @keyframes rippleEffect
    0%
      width: 1px
      height: 1px
    70%
      transform: scale(20)
    100%
      border-color: transparent
</style>
