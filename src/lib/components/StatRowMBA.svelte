
<section class="flex stats-band substitute">
    <div class="row container">
      <div class="col center left-side">
        <div class="stats flicker gold row">Multiple</div>
        <div class="row white center">Concentrations</div>
      </div>
      <div class="concentrations col white">
        <div class="concentration">
          AI
        </div>
        <div class="concentration">
          Business Analytics
        </div>
        <div class="concentration">
          Leadership
        </div>
      </div>
    </div>
</section>

<style>
.left-side {
  align-items: center;
  border-right: 2px solid var(--gold);
  padding-right: 30px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.container {
  max-width: 1200px;
  gap: 3vw;
}

.concentrations {
  text-align: left;
}
.stats-band {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
}
.stats {
  display: block;
  color: var(--gold);
  font-family: "Tilt Neon", sans-serif;
  font-size: clamp(45px,6.5vw,70px); 
  line-height: 1;
  text-transform: uppercase;
}

</style>