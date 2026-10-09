<script>
    import { onMount } from 'svelte';
    let { heading, paragraph, link } = $props();

    onMount(() => {

      const closeElements = document.querySelectorAll('.closePop');
      const popUpSection = document.querySelector('.popUpSection');
      
      closeElements.forEach(el => {
        el.addEventListener('click', () => {
          popUpSection.style.display = 'none';
          document.body.style.overflow = 'unset';
          document.documentElement.style.overflow = 'unset';
        });
      });

      const openPopUp = () => {
        popUpSection.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      };
      const openTimeout = window.setTimeout(openPopUp, 1000);

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
        <a href="{link}" class="learn-more">Learn more</a>
    {/if}
  </div>
</section>

<style>

.popUp {
  background-color: rgba(255,255,255,0.9);
}

.popUpBackground, .popUpSection {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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
  font-size: 17px;
}
.learn-more {
  display: block;
  color: var(--red);
  text-decoration: underline;
}
.popUp {
  background: white;
  color: var(--black);
  text-align: center;
  width: clamp(300px, 40%, 350px);
  padding: 30px 0px;
  position: absolute;
  top: 50%;
  z-index: 1000;
  border-radius: 10px;
  height: fit-content;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popUp h2{
  margin-bottom: 10px;
  color: var(--red);
  font-size: clamp(20px, 2.5vw, 24px);
}

.popUp p {
  margin: 0px auto;
    padding: 5px 0px 10px;
    width: clamp(100px, 80%, 250px);
    font-size: clamp(16px, 2vw, 18px);
}

@media (max-width: 720px){

  .popUp {
    padding: 30px 0px;
  }

}

</style>
