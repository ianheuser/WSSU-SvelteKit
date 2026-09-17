<script>
	import { asset, resolve } from '$app/paths';
</script>

<footer class="site-footer">
	<a href={ resolve("/") } class="footer-brand" aria-label="Winston-Salem State University Logo" >
		<enhanced:img src={ asset("/images/centered-logo.png") } class="footer-logo" alt="Winston-Salem State University" />
	</a>
	<div class="footer-information">
    <div class="address-one">
		601 S. Martin Luther King Jr. Drive
    </div>
    <div class="address-two">
		Winston-Salem, NC 27110 
    </div>
	  <div class="phone">
      336-750-2074
    </div>
  </div>
	<div class="social-links" aria-label="Social links">
		<!--<a href="https://www.facebook.com/WSSU1892" aria-label="Facebook" target="_blank"><enhanced:img class="enhanced-img" src={ asset("/images/facebook.png") } alt="Facebook Logo" /></a> -->
		<a href="https://www.instagram.com/wssugraduatecollege/" aria-label="Instagram" target="_blank"><enhanced:img class="enhanced-img" src={ asset("/images/instagram.png") } alt="Instagram Logo" /></a>
		<!-- <a href="https://www.youtube.com/wssu1892" aria-label="YouTube" target="_blank"><enhanced:img class="enhanced-img" src={ asset("/images/youtube.png") } alt="You Tube Logo" /></a> -->
		<a href="https://www.linkedin.com/company/winston-salem-state-university/" aria-label="LinkedIn" target="_blank"><enhanced:img class="enhanced-img" src={ asset("/images/linked-in.png") }  alt="LinkedIn Logo" /></a>
	</div>
</footer>

<style>

.footer-information {
  display: flex;
  flex-direction: row;
}
.address-one, .address-two {
  border-right: 3px solid var(--red);
  padding-right: 20px;
}

.address-two, .phone {
  padding-left: 20px;
}

.site-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 80px 0px;
    background: var(--black);
    color: var(--white);
    text-align: center;
    border-bottom: var(--red-border);
    border-top: var(--red-border);
    height: clamp(265px, 26vw, 283px);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 312px;
  position: relative;
  margin-top: -65px;
}

.footer-logo {
  width: 312px;
  height: auto;
}

.social-links {
  display: flex;
  gap: 43px;
  margin-top: 10px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  border: 4px solid var(--red);
  border-radius: 50%;
  background: var(--white);
  color: var(--black);
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  opacity:1;
  transition: all ease-in .1s;
}

.social-links a .enhanced-img {
  width: 66%;
}

.social-links a .enhanced-img:hover {
  opacity: .5;
  transition: all ease-in .1s;
}

@media(max-width: 720px){

  .site-footer {
    gap: 8px;
    padding: 42px 16px 18px;
    height: 220px;
  }

  .footer-information {
    flex-direction: column;
  }
  .address-one, .address-two {
    border-right: unset;
    padding-right: unset;
  }

  .address-two, .phone {
    padding-left: unset;
  }

  .social-links {
    gap: 23px;
  }

  .social-links a {
    width: 52px;
    height: 52px;
    font-size: 11px;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 200px;
    position: relative;
    margin-top: -83px;
  }

  .footer-logo {
    width: 200px;
    height: auto;
  }


}
</style>
