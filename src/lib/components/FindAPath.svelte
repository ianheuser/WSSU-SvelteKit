<script>
    let { heading,subHeading,description,buttonLabel, sectionColor } = $props();
</script>

<section class="flex column find-a-path">
    <h2 class="red">{heading}</h2>
    <h3>{subHeading}</h3>
    <p>{@html description}</p>
    <a class="outline-button { sectionColor } line" href="#contact">
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
    width:clamp(350px, 85%, 1100px);
  }



</style>