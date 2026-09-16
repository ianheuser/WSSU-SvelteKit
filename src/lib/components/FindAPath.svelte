<script>
    let { heading,subHeading,description,buttonLabel, sectionColor } = $props();
</script>

<section class="flex column find-a-path">
    <h2 class="red">{heading}</h2>
    <h3>{subHeading}</h3>
    <p class="top-margin">{@html description}</p>
    <div class="bottom-button-holder">
      <a class="outline-button { sectionColor } line" href="#contact">
          Let's Find a Path<br />That Fits You
      </a>
      <div class="horizontal-line { sectionColor }">
      </div>
    </div>
</section>

<style>
.bottom-button-holder {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

  .top-margin {
    margin-top: 20px;
  }
  .find-a-path .outline-button {
    position: relative;
    z-index: 1;
    margin-top: 20px;
    margin-bottom: 20px;
    width:clamp(220px, 42vw, 550px);
    font-size:clamp(14px, 3vw, 32px);
  }

  .find-a-path p {
    margin-bottom: 2vw;
    width:clamp(350px, 85%, 1100px);
  }

  .horizontal-line {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: var(--border-size);
    z-index: 0;
  }

  .horizontal-line.red {
    background: var(--red);
  }
  .horizontal-line.gold {
    background: var(--gold);
  }
  .horizontal-line.green {
    background: var(--green);
  }
  .horizontal-line.blue {
    background: var(--blue);
  }


</style>
