<script>
    // Default values
    let { stats , sectionColor } = $props();
</script>

<section class="flex stats-band">
    

        {#each stats as stat}

            <div class="stat-stack" class:needs-approval={stat.needsApproval} class:single-element={stats.length === 1}>
                <div class="stats flicker {sectionColor}">{@html stat.value}</div>
                <p class="stat">{@html stat.description}</p>
                {#if stat.subText}
                  <div class="subText">{@html stat.subText}</div>
                {/if}
            </div>

        {/each}

    
</section>

<style>
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
}

.stat-stack {
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  flex: 0 1 100%; 
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
p.stat {
  font-size: clamp(12px,1.8vw,20px);
  padding: 0px;
  width: 100%;
  max-width: 300px;
}

.needs-approval.stat-stack .stats{
  color: #ff00ff;
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
    gap: 5px;
    width: min(100% - 28px, 590px);
  }

  .stat-stack.single-element {
    flex: unset;
    gap: 20px;
  }

}

</style>