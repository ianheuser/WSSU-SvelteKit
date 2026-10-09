<script>
    import { onMount } from 'svelte';
    let { programCode = "", heading, paragraph } = $props();

    onMount(() => {
        const pathwaySelect = document.getElementById("pathway-options");
        const pathwayDescriptions = document.querySelectorAll(".pathway-description");
        const descriptionContainer = document.querySelector(".pathway-descriptions");

        pathwaySelect.addEventListener("change", (event) => {

          if (event.target.value !== "") {
            descriptionContainer.style.display = "flex";
          } else {
            descriptionContainer.style.display = "none";
          }

            pathwayDescriptions.forEach((desc) => {
                desc.style.display = "none";
            });
            const selected = document.getElementById(event.target.value);
            if (selected) {
                selected.style.display = "flex";
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
          <div id="advanced-practice" class="pathway-description advanced-practice">
            <p>A 51 credit hour curriculum that prepares you to provide primary care to patients and families in a wide range of settings.</p>
            <div class="divider"></div>
            <ul>
              <li>672 practicum hours</li>
              <li>About two years full time, three years part time</li>
              <li>Eligible for national FNP certification</li>
            </ul>
          </div>

          <div id="education-leadership" class="pathway-description education-leadership">
            <p>A 39 credit hour curriculum that prepares you to teach in undergraduate nursing programs and step into clinical education and staff development roles.</p>
            <div class="divider"></div>
            <ul>
              <li>240 clinical practicum hours</li>
              <li>About two years full time, three years part time</li>
              <li>Eligible for Certified Nurse Educator certification</li>
            </ul>
          </div>
        {:else if programCode == 'DNP'}
          <div id="bsn-dnp" class="pathway-description bsn-dnp">
            <p>A 78-semester-hour curriculum with a clinical focus in the Family Nurse Practitioner (FNP) specialization.</p>
            <div class="divider"></div>
            <ul>
              <li>Minimum 1,182 clinical hours</li>
              <li>About three years to complete</li>
              <li>Eligible for national FNP certification</li>
            </ul>
          </div>
          <div id="msn-dnp" class="pathway-description msn-dnp">
            <p>A 33-semester-hour curriculum built for nurses who already hold a master's degree in advanced nursing practice.</p>
            <div class="divider"></div>
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



.msn-dnp  {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bsn-dnp  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.education-leadership  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.education-leadership p {
  text-align: center;
  width: 80%;
}

.advanced-practice  {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pathway-description {
  flex-direction: column;
  align-items: center;
}

.divider {
  height: 3px;
  background: white;
  width: 10px;
  margin-top: 15px;
}

.pathway-descriptions, .pathway-description {
  display: none;
}

.pathway-options {
  margin-top: 40px;
  margin-bottom: 40px;
  appearance: base-select;
  background: white;
  border-radius: 7px;
  border-color: white;
  padding: 13px 29px;
  z-index: 2;
  color: black;
}

.pathway-options::picker-icon {
  font-size: 22px;
  margin-top: 3px;
}

.pathway-descriptions {
      border: 3px solid white;
    border-radius: clamp(7px, 0.65vw, 10px);
    padding: 60px 0px 40px;
    margin-top: -73px;
    width: 67%;
    margin-bottom: 30px;
}

.headingAndText {
  padding: 50px 0px 0px;
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


.pathway-section p, .pathway-section li {
  font-size: var(--base-font-size);
  text-wrap: balance;
}

.pathway-section li {
  line-height: clamp(18px, 2.5vw, 32px);
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
    padding: 30px 0px 0px;
  }


}

@media (max-width: 500px){

  .pathway-descriptions {
    margin-top: -73px;
    width: 90%;
    
  }
  .pathway-options {
    width: 80%;
    align-items: center;
  }
  .pathway-section p {
    width: 90%;
  }
}




</style>