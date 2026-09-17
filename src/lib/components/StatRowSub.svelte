<script>
    let { stats , sectionColor } = $props();
</script>

<section class="flex stats-band substitute">
  
    <div class="stat-stack">
      <div class="stats flicker {sectionColor}">{@html stats.value}</div>
      {#if stats.description}
        <p class="stat">{@html stats.description}</p>
      {/if}
      {#if stats.subText}
      <div class="white-line"></div>
      
        <div class="subText">{@html stats.subText}</div>
      {/if}
    </div>
  
</section>

<style>
  .white-line {
    height: 1px;
    background: rgba(256, 256, 256, .5);
    margin: 13px 0;
    max-width: 979px;
    width: 65%;
  }

  .container {
    max-width: 1400px;
    gap: 3vw;
  }

  .stats.blue {
    color: var(--blue);
  }
  .stats.gold {
    color: var(--gold);
  }
  .stats.green {
    color: var(--green);
  }


.stats-band {
  padding: 62px 20px;
  background: var(--black);
  color: var(--white);
  text-align: center;
  border-top: var(--red-border);
  border-bottom: var(--red-border);
}

.stats-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 58px;
}

.stat-stack {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}

.stat-stack {
  flex: 0 1 100%;
}

.stats {
  display: block;
  color: var(--gold);
  font-family: "Tilt Neon", sans-serif;
  font-size: clamp(28px,5vw,65px); 
  line-height: 1;
  text-transform: uppercase;
}
p.stat {
  font-size: clamp(12px,1.8vw,20px);
  padding: 0px;
  width: clamp(350px, 85%, 1100px);
}
.subText {
  width: clamp(350px, 85%, 1100px);
}

@media( max-width: 980px ) {

  .stats-grid {
    gap: 18px;
  }

}

@media( max-width: 720px ) {
  
  .stats-band {
    padding: 24px 0 25px;
  }

  .stats-grid {
    flex-wrap: nowrap;
    gap: 8px;
    width: min(100% - 28px, 590px);
  }

.stat-stack {
  flex: 1 1 260px;
}

}
</style>