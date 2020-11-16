<script>
  export let href
  export let id
</script>

<style> 
  a {
    display: inline-block;
    font-family: 'norwester';
    margin-bottom: 1rem;
    padding: 1.3rem;
    background-color: rgba(100, 100, 100, 0.3);
    color: var(--main-font-col);
    border: 0.125rem solid var(--main-font-col);
    border-radius: 5px;
    opacity: 0.9;
  }

  a:hover,
  a:active {
      background-color: rgba(100, 100, 100, 0.5);
      text-shadow: 2px 2px 5px black;
      border: 0.125rem solid var(--emphasized-text);
      opacity: 1;
      -webkit-transition: all 0.1s ease-in;
      -moz-transition: all 0.1s ease-in;
      -o-transition: all 0.1s ease-in;
      transition: all 0.1s ease-in;
  }

  a:active {
      color: var(--emphasized-text);
  }
</style>

<a {id} {href}>
  <slot />
</a>