<script>
    let { stats , sectionColor } = $props();
</script>

<section class="flex stats-band substitute">
    <div class="stat-stack">
          <div class="stats flicker {sectionColor}">{stats.value}</div>
          <p class="stat">{@html stats.description}</p>
          {#if stats.subText}
            <div class="subText">{@html stats.subText}</div>
          {/if}
      </div>
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

.subText {
  font-size: 12px;
  margin-top: 26px;
  border-top: solid rgba(256, 256, 256, .5) .5px;
  padding-top: 13px;
  width: clamp(350px, 85%, 1100px);
}

.stat {
  width: clamp(350px, 85%, 1100px);
}
.stats-band {
  padding: 62px 20px;
  background: var(--black);
  color: var(--white);
  text-align: center;
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
  font-size: clamp(30px,7vw,80px); /* This should mirror H2s so they don't get larger than them */
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}
p.stat {
  font-size: clamp(18px,2.8vw,32px);
  padding: 0px;
}

@media( max-width: 980px ) {

  .stats-grid {
    gap: 24px;
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