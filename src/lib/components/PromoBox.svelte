<script>
    import { onMount } from 'svelte';
    let { programCode = "", heading, paragraph } = $props();

    onMount(() => {
        const pathwaySelect = document.getElementById("pathway-options");
        const pathwayDescriptions = document.querySelectorAll(".pathway-description");
        const descriptionContainer = document.querySelector(".pathway-descriptions");

        pathwaySelect.addEventListener("change", (event) => {

          if (event.target.value !== "") {
            descriptionContainer.style.display = "block";
          } else {
            descriptionContainer.style.display = "none";
          }

            pathwayDescriptions.forEach((desc) => {
                desc.style.display = "none";
            });
            const selected = document.getElementById(event.target.value);
            if (selected) {
                selected.style.display = "block";
            }
        });
    });
   
    
</script>



<section class="flex column headingAndText ">

    <h2>{@html heading}</h2>
    <p>{@html paragraph}</p>

    <div class="pathway-section">
    
      <select id="pathway-options" name="pathway-options" class="pathway-options">
        {#if programCode == 'MSN'}
          <option value="" selected>Choose Your Focus</option>
        {:else if programCode == 'DNP'}
          <option value="" selected>Choose Your Pathway</option>
        {/if}
        {#if programCode == 'MSN'}
          <option value="advanced-practice">Family Nurse Practitioner (FNP)</option>
          <option value="education-leadership">Executive Nurse Educator & Leadership (ENEL)</option>
        {:else if programCode == 'DNP'}
          <option value="bsn-dnp">The BSN-DNP Pathway</option>
          <option value="msn-dnp">The MSN-DNP Pathway</option>
        {/if}
      </select>

      <div class="pathway-descriptions">

        {#if programCode == 'MSN'}
          <div id="advanced-practice" class="pathway-description">
            <p>A 51 credit hour curriculum that prepares you to provide primary care to patients and families in a wide range of settings.</p>
            <ul>
              <li>672 practicum hours</li>
              <li>About two years full time, three years part time</li>
              <li>Eligible for national FNP certification</li>
            </ul>
          </div>
          <div id="education-leadership" class="pathway-description">
            <p>A 39 credit hour curriculum that prepares you to teach in undergraduate nursing programs and step into clinical education and staff development roles.</p>
            <ul>
              <li>240 clinical practicum hours</li>
              <li>About two years full time, three years part time</li>
              <li>Eligible for Certified Nurse Educator certification</li>
            </ul>
          </div>
        {:else if programCode == 'DNP'}
          <div id="bsn-dnp" class="pathway-description">
            <p>A 78-semester-hour curriculum with a clinical focus in the Family Nurse Practitioner (FNP) specialization.</p>
            <ul>
              <li>Minimum 1,182 clinical hours</li>
              <li>About three years to complete</li>
              <li>Eligible for national FNP certification</li>
            </ul>
          </div>
          <div id="msn-dnp" class="pathway-description">
            <p>A 33-semester-hour curriculum built for nurses who already hold a master's degree in advanced nursing practice.</p>
            <ul>
              <li>Minimum 510 clinical hours</li>
              <li>About two years to complete</li>
            </ul>
          </div>
        {/if}
      </div>

    </div>

</section>

<style>

.pathway-descriptions, .pathway-description {
  display: none;
}

.pathway-options {
  margin-top: 40px;
  margin-bottom: 40px;
  appearance: base-select;
  background: var(--red);
  border-radius: 7px;
  padding: 13px 29px;
  z-index: 2;
}

.pathway-options::picker-icon {
  font-size: 22px;
  margin-top: 3px;
}

.pathway-descriptions {
    border: 1px solid white;
    border-radius: clamp(7px, 0.65vw, 10px);
    padding: 60px 0px 40px;
    margin-top: -73px;
    width: clamp(360px, 80vw, 1200px);
}

.headingAndText {
  padding: 50px 0px;
  background: var(--red);
  color: var(--white);
  text-align: center;
}

.headingAndText p {
  margin: 0px auto;
  padding: 0px 20px;
}
.headingAndText h2 {
  margin-bottom: 10px;
}
.headingAndText ul {
  padding: 0px 20px;
}

.pathway-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

@media (max-width: 1100px){

   .pathway-options {
    padding: 8px 15px 9px;
  }

  .pathway-descriptions {
    margin-top: -62px;
  }

  .pathway-options::picker-icon {
    font-size: 16px;
    margin-top: 0px;
  }

}

@media (max-width: 720px){

  .headingAndText {
    padding: 30px 0px;
  }


}

@media (max-width: 500px){

  .pathway-descriptions {
    margin-top: -73px;
  }
  .pathway-options {
    width: 80%;
    align-items: center;
  }

}

</style>