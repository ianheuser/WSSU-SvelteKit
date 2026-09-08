<script>
    let { heading,subHeading,description,buttonLabel } = $props();
</script>

<section class="flex column find-a-path">
    <h2 class="red">{heading}</h2>
    <h3>{subHeading}</h3>
    <p>{@html description}</p>
    <a class="outline-button gold line" href="#contact">
        {buttonLabel}
    </a>
</section>

<style>


  .find-a-path .outline-button {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .find-a-path p {
    margin-bottom: 2vw;
    width: clamp(390px,70%,950px);
  }



</style>