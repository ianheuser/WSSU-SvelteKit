<script>

    let { 
      heading, 
      columns = [
        "Birth-Kindergarten Education",
        "Elementary Education",
        "Middle Grades Education",
        "Special Education",
        "Health and Physical Education"
      ] 
    } = $props();
    
</script>



<section class="flex column promoBox">

    <h2 class="no-wrap-text">{@html heading}</h2>
    
    <div class="columns">
    
     {#each columns as column}
        <div class="column">{column}</div>
     {/each}

    </div>

</section>

<style>
.no-wrap-text {
  white-space: nowrap;
}
.promoBox .columns {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  gap: 0;
  margin-top: 30px;
  margin-bottom: 60px;
}

.promoBox .column {
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-size: var(--base-font-size);
  font-weight: 600;
  line-height: 1.35;
}

.promoBox .column:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 3px;
  height: 60px;
  background: var(--gold);
  transform: translate(50%, -50%);
}

.promoBox {
  padding: 50px 24px 0;
  background: var(--red);
  color: var(--white);
  text-align: center;
}

.promoBox h2 {
  margin-bottom: 10px;
}
@media (max-width: 920px) { 
  .promoBox .column {
    font-size: 15px;
  }
}



@media (max-width: 620px) {
  .promoBox {
    padding-top: 30px;
  }
  .no-wrap-text {
    text-wrap: balance;
  }

  .promoBox .columns {
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .promoBox .column {
    flex: 0 0 auto;
    padding: 20px 16px;
    font-size: 18px;
  }

  .promoBox .column:not(:last-child)::after {
    top: auto;
    right: 50%;
    bottom: 0;
    width: 300px;
    height: 3px;
    transform: translate(50%, 50%);
  }
}

</style>
