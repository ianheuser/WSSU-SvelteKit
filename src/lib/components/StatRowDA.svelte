
<section class="flex stats-band substitute">
  
    <div class="container">
      <div class="stats flicker blue">
        21% job growth from 2024 to 2034
      </div>
      
    </div>
  
</section>

<style>
  
  .container {
    max-width: 1400px;
    gap: 3vw;
  }

  .stats.blue {
    color: var(--blue);
  }

.stats-band {
  padding: 62px 20px;
  background: var(--black);
  color: var(--white);
  text-align: center;
  border-top: var(--red-border);
  border-bottom: var(--red-border);
}

.stats {
  display: block;
  color: var(--gold);
  font-family: "Tilt Neon", sans-serif;
  font-size: clamp(28px,5vw,65px); 
  line-height: 1;
  text-transform: uppercase;
}


@media( max-width: 720px ) {
  
  
  .container {
    max-width: 400px;
    gap: 3vw;
  }

  .stats {
    font-size: 40px;
    line-height: 40px;
  }

}
</style>