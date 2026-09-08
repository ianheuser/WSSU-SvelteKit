<script>
  let { heading, paragraph, image } = $props();
</script>

<section class="flex column lead-room-section">
    <h2 class="white">{heading}</h2>
    <p>{@html paragraph}</p>

    <div class="image-contain">
        <enhanced:img class="top-align" src={ image } alt="Graduate student working at a laptop" />
    </div>
</section>

<style>

.lead-room-section {
  overflow: hidden;
  padding: 50px 0 0;
  background-color: var(--gold);
  text-align: center;
}

.top-align {
  width: 100%;
  object-fit: cover;
  object-position: top;
  aspect-ratio: 534/261;
}

.image-contain {
  position: relative;
  width: 100%;
}

.lead-room-section .image-contain::before {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  height: 100px;
  background: linear-gradient(180deg, rgba(215, 168, 14, 1) 0%, rgba(215, 168, 14, 0) 20%);
  pointer-events: none;
}

.lead-room-section p {
  margin-bottom: 50px;
}

@media(max-width:720px){

    .lead-room-section {
        padding-top: 24px;
    }

    .lead-room-section p {
        margin-bottom: 25px;
    }

}
</style>