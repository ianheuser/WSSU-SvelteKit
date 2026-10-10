<script>
    import {asset} from '$app/paths';
    import { onMount } from 'svelte';
    let { heading, paragraph, link } = $props();

    onMount(() => {

      const closeElements = document.querySelectorAll('.closePop');
      const popUpSection = document.querySelector('.popUpSection');
      
      closeElements.forEach(el => {
        el.addEventListener('click', () => {
          // @ts-ignore
          popUpSection.style.display = 'none';
          document.body.style.overflow = 'unset';
          document.documentElement.style.overflow = 'unset';
        });
      });

      const openPopUp = () => {
        // @ts-ignore
        popUpSection.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      };
      const openTimeout = window.setTimeout(openPopUp, 90000);

      return () => window.clearTimeout(openTimeout);

    });

</script>

<section class="flex column popUpSection">
  <div class="popUpBackground closePop"></div>
  <div class="popUp column flex">
    <div class="popUpClose closePop">X</div>
    <h2>Still Exploring<br />Your Options?</h2>
    <p>{@html paragraph}</p>
    {#if link}
        <a href="{link}" class="learn-more">
          <img src="{asset('/images/arrow.svg')}" alt="Arrow pointing right" /> 
        </a>
        
    {/if}
  </div>
</section>

<style>
   
.popUpBackground, .popUpSection {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
}

.popUpSection {
  display: none;
}

.popUpClose {
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;
  font-weight: 700;                      
  font-size: 23px;
}
.learn-more {
  display: block;
  color: var(--red);
  text-decoration: underline;
}
.popUp {
  background:rgba(255,255,255,0.9);
  color: var(--black);
  text-align: center;
  width: clamp(300px,50%,450px);
  padding: 30px 55px;
  position: absolute;
  top: 50%;
  z-index: 1000;
  border-radius: 10px;
  height: fit-content;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
}

.popUp h2{
  margin-bottom: 10px;
  color: var(--red);
}

.popUp p {
  margin: 0px auto;
    padding: 5px 0px 10px;
    width: 80%;
    font-size: var(--base-font-size);
}

@media (max-width: 720px){

  .popUp {
    padding: 30px 0px;
  }

}

</style>
