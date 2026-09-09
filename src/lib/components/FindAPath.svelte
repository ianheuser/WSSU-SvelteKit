<script>
    let { heading,subHeading,description,buttonLabel, sectionColor } = $props();
</script>

<section class="flex column find-a-path">
    <h2 class="red">{heading}</h2>
    <h3>{subHeading}</h3>
    <p>{@html description}</p>
    <a class="outline-button { sectionColor } line" href="#contact">
        Let's Find a Path<br />That Fits You
    </a>
</section>

<style>


  .find-a-path .outline-button {
    margin-top: 20px;
    margin-bottom: 20px;
    width:clamp(220px, 42vw, 550px);
    font-size:clamp(14px, 3vw, 32px);
  }


  .find-a-path p {
    margin-bottom: 2vw;
    width:clamp(350px, 85%, 1100px);
  }



</style>