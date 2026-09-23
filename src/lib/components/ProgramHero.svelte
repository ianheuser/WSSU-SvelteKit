<script> 
const headerBorderColors = {
    red: 'var(--red)',
    gold: 'var(--gold)',
    blue: 'var(--blue)',
    green: 'var(--green)'
};

let { heading, programCode, subHeading = null , image, reverse, sectionColor } = $props();
let headerBorderColor = $derived(headerBorderColors[sectionColor] ?? headerBorderColors.red);

$effect(() => {
    document.documentElement.style.setProperty('--site-header-border-color', headerBorderColor);

    return () => {
        if (document.documentElement.style.getPropertyValue('--site-header-border-color') === headerBorderColor) {
            document.documentElement.style.removeProperty('--site-header-border-color');
        }
    };
});
</script>

<div class="header-border { sectionColor }"></div>
<p class="program-code { sectionColor }">{ programCode }</p>

<section class="flex program-hero { sectionColor }" class:reverse={reverse}>
    <div class="program-hero-image" aria-hidden="true" style:--hero-image={`url("${image}")`}></div>

    <div class="program-hero-content { programCode }">
        
        <div class="left-aligned-content" class:reverse={reverse}>
            {#if heading}<h1 class={sectionColor}>{@html heading}</h1>{/if}
            {#if subHeading}<h3 class="hero">{@html subHeading }</h3>{/if}
        </div>

    </div>
</section>

<style>
    

    .program-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex: 1 1 50%;
        flex-direction: column;
        min-height: inherit;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        padding-left: 5%;
    }

    .header-border {
        height: calc(var(--border-size) + 1px);
        background-color: black;
        width: 100%;
        position: fixed;
        z-index: 102;
        height: 194px;
        top: 0px;
    }

    .header-border.gold {
        border-bottom: 4px solid var(--gold);
    }
    .header-border.green {
        border-bottom: 4px solid var(--green);
    }
    .header-border.blue {
        border-bottom: 4px solid var(--blue);
    }
   
    h1 { 
        font-size: clamp(28px, 7vw, 70px);
    }
    h3 {
        font-size: clamp(14px, 2.5vw, 35px);
    }

    .program-hero-content h1, .program-hero-content h3 {
        padding-left: 0%;
        padding-right: 0%;
    }


    .left-aligned-content {
        width: fit-content;
        margin-left: 0%;
    }

    .reverse.left-aligned-content h1, .reverse.left-aligned-content h3 {
        padding-left: 0px;
    }

    .reverse.left-aligned-content h1 { 
        font-size: clamp(28px, 7vw, 70px);
    }

    .reverse.left-aligned-content {
        position: relative;
        text-align: left;
        margin-left: 13%;
    }

    h3.hero {
        font-size: clamp(14px, 3vw, 35px);
    }

    .program-hero {
        height: clamp(250px, 50vw, 650px);
        overflow: hidden;
        background: var(--black);
        color: var(--white);
        align-items: stretch;
        padding: 0px;
    }
/*
    .program-hero.gold {
        border-top: solid var(--border-size) var(--gold);
    }
    .program-hero.green {
        border-top: solid var(--border-size) var(--green);
    }
    .program-hero.blue {
        border-top: solid var(--border-size) var(--blue);
    }
*/
    .program-hero.reverse {
        flex-direction: row-reverse;
    }

    .program-hero.reverse .program-hero-image::after {
        background: linear-gradient(
            to left,
            transparent 0%,
            transparent 85%,
            rgba(0, 0, 0, .5) 90%,
            rgba(0, 0, 0, 1) 100%
        );
    }

    .program-hero-image {
        position: relative;
        flex: 1 1 50%;
        background: var(--hero-image) center / cover no-repeat;
    }

    .program-hero-image::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to right,
            transparent 0%,
            transparent 85%,
            rgba(0, 0, 0, .5) 90%,
            rgba(0, 0, 0, 1) 100%
        );
        pointer-events: none;
    }


    .program-hero.reverse .program-hero-content {
        align-items: center;
        text-align: left;
    }

    .program-hero::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: var(--border-size);
        z-index: 100;
    }

    .program-code {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 1);
        font-family: "Tilt Neon", sans-serif;
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        DISPLAY: INLINE-FLEX;
        JUSTIFY-CONTENT: CENTER;
        ALIGN-ITEMS: end;
        padding-bottom: 15px;
        position: fixed;
        top: 114px;
        left: 50%;
        z-index: 101;
        transform: translateX(-50%);
    }

    .program-code.gold {
        border: solid var(--border-size) var(--gold);
    }
    .program-code.green {
        border: solid var(--border-size) var(--green);
    }
    .program-code.blue {
        border: solid var(--border-size) var(--blue);
    }

    .program-hero.reverse .program-code {
        left: auto;
        right: -60px;
    }

@media (max-width: 980px){
    .header-border {
        height: 125px;
    }
    .program-code{
        width: 120px;
        height: 120px;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 12px;
        top: 58px;
    }
}
    
@media (max-width: 720px){

  .program-hero-image {
    flex-basis: 50%;
    background-position: center;
  }

  .program-hero-content {
    flex-basis: 48%;
    min-height: 216px;
  }

 

  .program-code{
        width: 80px;
        height: 80px;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 10px;
        top: 84px;
    }

}


</style>
