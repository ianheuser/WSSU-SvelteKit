<script>
    // Default values
    let { stats , sectionColor } = $props();
    let totalStats = $derived(stats.length);
</script>

<section class="flex stats-band">
    
  <div class="stats-grid">
        {#each stats as stat}

            <div class="stat-stack total-stats-{totalStats}" class:needs-approval={stat.needsApproval} class:single-element={totalStats === 1}>
                <div class="stats flicker {sectionColor} total-stats-{totalStats}">{@html stat.value}</div>
                <p class="stat total-stats-{totalStats}">{@html stat.description}</p>
                {#if stat.subText}
                  <div class="subText total-stats-{totalStats}">{@html stat.subText}</div>
                {/if}
            </div>

        {/each}
  </div>
    
</section>

<style>
  .stats-grid {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    gap: 20px;
    flex-direction: row;
    width: 1100px;
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
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 5px;
  border-top: var(--red-border);
  border-bottom: var(--red-border);
}

.stat-stack {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}

.stat-stack.single-element {
  flex-direction: row;
  gap: 20px;
}

.stat-stack.single-element {
  flex: unset;
}

.stats {
  display: block;
  color: var(--gold);
  font-family: "Tilt Neon", sans-serif;
  font-size: clamp(30px,6vw,65px); 
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.stats.total-stats-2 {
  font-size: clamp(40px,8vw,80px);
}

.stats.total-stats-3 {
  font-size: clamp(24px,6vw,70px)
}

.stats.total-stats-4 {
  font-size: clamp(30px,6.5vw,70px);
}

.stat-stack.total-stats-3 {
  width: 33%;
}
.stat-stack.total-stats-4 {
  width: 25%;
}

p.stat {
  font-size: clamp(12px,1.8vw,20px);
  padding: 0px;
  width: 100%;
  max-width: 300px;
}

.needs-approval.stat-stack .stats{
  color: #ff00ff;
}


@media( max-width: 720px ) {
  
  .stats-grid {
    gap: 15px;
  }

  .stats-band {
    padding: 24px 0 25px;
  }

  .stats-grid {
    flex-wrap: nowrap;
    width: min(100% - 28px, 590px);
  }

  .stat-stack.single-element {
    flex: unset;
    gap: 20px;
  }

}

</style>