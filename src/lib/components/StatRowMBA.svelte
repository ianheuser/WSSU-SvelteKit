
<section class="flex stats-band substitute">
    <div class="row container">
      <div class="col center left-side">
        <div class="stats flicker gold row">Multiple</div>
        <div class="row white center">Concentrations</div>
      </div>
      <ul class="concentrations col white">
        <li class="concentration">
          AI
        </li>
        <li class="concentration">
          Business Analytics
        </li>
        <li class="concentration">
          Leadership
        </li>
      </ul>
    </div>
</section>

<style>


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


ul.concentrations {
  list-style-type: unset;
  padding: 0px 0px 0px 13px;
  margin: 0px;
}

ul.concentrations li::marker {
    color: var(--gold); /* Changes only the bullet point color */
  }

ul.concentrations li {
  text-align: left;
}

.left-side {
  align-items: center;
  border-right: 2px solid var(--gold);
  padding-right: 30px;
}

@media (max-width: 500px) {
  .left-side {
    padding-right: 8px;
    border-right: none;
  }

}

</style>