<script>
    let { heading, paragraph } = $props();
</script>

<section class="flex column headingAndText ">
    <h2>{heading}</h2>
    <p>{@html paragraph}</p>
</section>

<style>

.headingAndText {
  padding: 50px 0px;
  background: var(--red);
  color: var(--white);
  text-align: center;
}

.headingAndText p {
  width: clamp(300px, 70%, 750px);
  margin: 0px auto;
  padding-bottom: 0px;
}
.headingAndText h2 {
  margin-bottom: 10px;
}

@media (max-width: 720px){

  .headingAndText {
    padding: 30px 0px;
  }

}

</style>