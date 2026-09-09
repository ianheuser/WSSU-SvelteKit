<script>
    let { heading, content } = $props();
</script>

<section class="flex column headingAndText ">
    <h2>{@html heading}</h2>
    <div class="columns">{@html content}</div>
</section>

<style>
.columns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.headingAndText {
  padding: 50px 0px;
  background: var(--red);
  color: var(--white);
  text-align: center;
}

.headingAndText h2 {
  margin-bottom: 10px;
}

@media (max-width: 720px){
  .columns {
    flex-direction: column;
  }
  .headingAndText {
    padding: 30px 0px;
  }

}

</style>