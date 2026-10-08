<script>
    import { handleLeadSubmit } from '$lib/scripts/lead-form.js';
    import { asset } from '$app/paths';
    import { programs } from '$lib/scripts/programs.js';
    
    let { heading,image,description,buttonLabel = "Get Connected",imageAlt,thanksMessage,programCode = "",programSelectDisabled= true } = $props();
    let program = $state('');
    let selectedProgramCode = $derived(String(programCode ?? '').trim().toLowerCase());
    let isProgramOfInterestDisabled = $derived(programSelectDisabled ?? selectedProgramCode !== '');

    $effect(() => {
      program = selectedProgramCode;
    });
</script>

<section class="flex inquiry-section" id="contact">
		<div class="campus-collage mat" aria-hidden="true">
      <enhanced:img class="right programs" src={ asset("/images/clock-tower-left.jpg") } alt="" />
		</div>

    <div class="inquiry-form-wrapper">
      <div class="photo-card red">
          <div class="red-line from-top"></div>
          <enhanced:img src={ image } alt={ imageAlt } class="photo-card-img" />
      </div>
      
      <div class="inquiry-copy flex column">
        <div class="form-message">
          <h2 class="red">Thank you for your submission!</h2>
          <p class="form-status">
            Watch your inbox for details about the MAT program and see how WSSU graduate study lights your path to become tomorrow's expert.
            <br /><br />
            Have questions in the meantime? Connect with the appropriate program contact below. We're happy to help.
          </p>
        </div>
        <div class="form-content">
          <h2 class="red">{@html heading}</h2>
          <p class="form-description">{description}</p>

          <form
            class="lead-form"
            onsubmit={handleLeadSubmit}
          >
            <label>
              <span>First Name <b>*</b></span>
              <input name="firstName" autocomplete="given-name" required />
            </label>
            <label>
              <span>Last Name <b>*</b></span>
              <input name="lastName" autocomplete="family-name" required />
            </label>
            <label>
              <span>Email <b>*</b></span>
              <input name="email" type="email" autocomplete="email" required />
            </label>
            <label>
              <span>Term <b>*</b></span>
              <select name="term" required>
                <option value="">Select...</option>
                <option value="Spring 2027">Spring 2027</option>
                <option value="Summer 2027">Summer 2027</option>
                <option value="Fall 2027">Fall 2027</option>
                <option value="Spring 2028">Spring 2028</option>
                <option value="Summer 2028">Summer 2028</option>
                <option value="Fall 2028">Fall 2028</option>
              </select>
            </label>
            <label>
                <span>Program of Interest <b>*</b></span>
                <select name="program" id="programOfInterest" required disabled={isProgramOfInterestDisabled}>
                  <option value="mat">Master of Arts in Teaching</option>
                </select>
                <input type="hidden" name="program" value="mat" />
            </label>
          
            <button class="outline-button margin-top" type="submit">{buttonLabel}</button>
            
          </form>
        </div>
      </div>
    </div>
    <div class="mat-contacts">
    
        <div class="mat-contact">
          <div class="mat-contact-name"><strong>Birth to Kindergarten Education</strong></div> 
          <div class="mat-contact-number">336-750-2420</div>
          <div class="email-link">roseboroughlb@wssu.edu</div>
        </div>
        <div class="mat-contact">
          <div class="mat-contact-name"><strong>Elementary Education</strong></div>
          <div class="mat-contact-number">336-750-8337</div>
          <div class="email-link">tafaridn@wssu.edu</div>
        </div>
      
        <div class="mat-contact">
          <div class="mat-contact-name"><strong>Middle Grades Education</strong></div>
          <div class="mat-contact-number">336-750-2708</div>
          <div class="email-link">johnsondt@wssu.edu</div>
        </div>
        <div class="mat-contact">
          <div class="mat-contact-name"><strong>Special Education</strong></div>
          <div class="mat-contact-number">336-750-2378</div>
          <div class="email-link">whitehurstac@wssu.edu</div>
        </div>
      
    </div>

	</section>

<style>

.mat-contacts {
   display: flex;
    flex-direction: row;
    gap: 40px;
    /* margin-top: 50px; */
    z-index: 1;
    width: 1200px;
    display: none;
    align-items: flex-start;
    justify-content: center;
    font-size: 18px;
}

.mat-contact {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 3px solid var(--red);
  padding-top: 10px;
}


.inquiry-form-wrapper {
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
}

.form-content h2 {
  width: 100%;
}

.form-message {
  display: none;
  text-align: center;
  flex-direction: column;
  align-items: center;
}

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.margin-top {
  margin-top: 50px;
}

p.form-description {
    margin: 0px;
    width: 100%;
    padding: 0px 20px 30px;
}

.inquiry-section {
  overflow: hidden;
  background: var(--white);
  gap: 4vw;
  padding: 60px 24px 100px;
  min-height: 600px;
  flex-direction: column;
}

.inquiry-section::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 6px;
}

.campus-collage {
  
  inset: 0;
  pointer-events: none;
}

.campus-collage .right {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: clamp(260px, 50vw, 700px);
}

.campus-collage .programs {
  position: absolute;
  bottom: 0px;
  width: clamp(260px, 50vw, 600px);
  left: 0px;
}

.inquiry-form-wrapper > .photo-card,
.inquiry-form-wrapper > .inquiry-copy {
  position: relative;
  z-index: 2;
}

.inquiry-form-wrapper > .photo-card {
  flex: 0 1 521px;
}

.inquiry-form-wrapper > .inquiry-copy {
  flex: 0 1 600px;
}


.inquiry-copy {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.lead-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 90%;
}

.lead-form label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--muted);
  font-size: clamp(12px, 2.8vw, 21px);
  line-height: 1.5;
  text-align: left;
}

.lead-form b {
  color: #ed0131;
  font-weight: 400;
}

.lead-form input,
.lead-form select {
  width: 100%;
  min-height: 80px;
  padding: 18px 20px;
  border: 0;
  border-radius: 4px;
  background: var(--field);
  color: var(--black);
  font-family: "Open Sans", sans-serif;
  font-size: 22px;
}


.photo-card-img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border: 7px solid var(--red);
  border-radius: 25px;
  z-index: 2;
  position: relative;
}

.photo-card {
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 521 / 613;
  display: flex;
  justify-content: start;
}

.red-line {
    width: var(--border-size);
    height: 100%;
    background-color: var(--red);
    position: absolute;
    left: 50%;
    transform: translateX(-5px);
    bottom: -90%;
}

.red-line.from-top {
    top: -90%;
    bottom: unset;
}

@media (max-width: 1100px) {
  /* These only apply to screens 980px or less */

  .form-content h2 {
    white-space: nowrap;
    width: 100%;
  }

  .inquiry-copy {
    width: clamp(300px,70%,600px);
  }

  .inquiry-section {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .inquiry-section .photo-card {
    display: none;
  }

  .campus-collage {
    display: none;
  }

  .mat-contacts {
    flex-direction: column;
    margin-top: 0px;
    align-items: center;
  }
}


@media (max-width: 720px) {
/* When the screen is 720px or less, the below apply */

  .inquiry-form-wrapper > .inquiry-copy {
    flex: 0 1 fit-content;
  }


  .inquiry-form-wrapper > .photo-card {
    order: 2;
    width: 248px;
    border-width: 3px;
    border-radius: 19px;
  }

  .inquiry-form-wrapper > .inquiry-copy {
    order: 1;
  }

  .lead-form {
    gap: 11px;
  }

  .lead-form input,
  .lead-form select {
    min-height: 48px;
    padding: 10px 12px;
    font-size: 16px;
  }

  .form-status {
    font-size: 18px;
  }

  .inquiry-section {
    padding-top: 50px;
  }

}

</style>
