
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/programs" | "/programs/data-analytics" | "/programs/dnp" | "/programs/dpt" | "/programs/fnp" | "/programs/mat" | "/programs/mba" | "/programs/mcst" | "/programs/mha" | "/programs/msn" | "/programs/msot" | "/programs/msrc";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/programs": Record<string, never>;
			"/programs/data-analytics": Record<string, never>;
			"/programs/dnp": Record<string, never>;
			"/programs/dpt": Record<string, never>;
			"/programs/fnp": Record<string, never>;
			"/programs/mat": Record<string, never>;
			"/programs/mba": Record<string, never>;
			"/programs/mcst": Record<string, never>;
			"/programs/mha": Record<string, never>;
			"/programs/msn": Record<string, never>;
			"/programs/msot": Record<string, never>;
			"/programs/msrc": Record<string, never>
		};
		Pathname(): "/" | "/programs/data-analytics/" | "/programs/dnp/" | "/programs/dpt/" | "/programs/fnp/" | "/programs/mat/" | "/programs/mba/" | "/programs/mcst/" | "/programs/mha/" | "/programs/msn/" | "/programs/msot/" | "/programs/msrc/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/.DS_Store" | "/images/centered-logo.png" | "/images/da-hero.jpg" | "/images/da-hero.webp" | "/images/da-highlights.jpg" | "/images/da-highlights.webp" | "/images/da-lead-form.jpg" | "/images/da-lead-form.webp" | "/images/da-real-world-application.jpg" | "/images/da-real-world-application.webp" | "/images/dean-boykin.jpg" | "/images/dean-boykin.webp" | "/images/dnp-hero.jpg" | "/images/dnp-hero.webp" | "/images/dnp-lead-form.jpg" | "/images/dnp-lead-form.webp" | "/images/dnp-real-world-application.jpg" | "/images/dnp-real-world-application.webp" | "/images/dpt-hero.jpg" | "/images/dpt-hero.webp" | "/images/dpt-lead-form.jpg" | "/images/dpt-lead-form.webp" | "/images/dpt-real-world-application.jpg" | "/images/dpt-real-world-application.webp" | "/images/facebook.png" | "/images/fnp-hero.jpg" | "/images/fnp-hero.webp" | "/images/fnp-lead-form.jpg" | "/images/fnp-lead-form.webp" | "/images/fnp-real-world-application.jpg" | "/images/fnp-real-world-application.webp" | "/images/innovators.jpg" | "/images/innovators.webp" | "/images/instagram.png" | "/images/landing-campus-left.jpg" | "/images/landing-campus-left.webp" | "/images/landing-campus-right.jpg" | "/images/landing-campus-right.webp" | "/images/landing-form-photo.jpg" | "/images/landing-form-photo.webp" | "/images/landing-hero.gif" | "/images/landing-hero.jpg" | "/images/landing-hero.webp" | "/images/linked-in.png" | "/images/linkedin.png" | "/images/logo-main.svg" | "/images/logo-sub.svg" | "/images/logo.png" | "/images/mat-hero.jpg" | "/images/mat-hero.webp" | "/images/mat-lead-form.jpg" | "/images/mat-lead-form.webp" | "/images/mat-real-world-application.jpg" | "/images/mat-real-world-application.webp" | "/images/mba-hero.jpg" | "/images/mba-hero.webp" | "/images/mba-lead-form.jpg" | "/images/mba-lead-form.webp" | "/images/mba-real-world-application.jpg" | "/images/mba-real-world-application.webp" | "/images/mcst-hero.jpg" | "/images/mcst-hero.webp" | "/images/mcst-lead-form.jpg" | "/images/mcst-lead-form.webp" | "/images/mcst-real-world-application.jpg" | "/images/mcst-real-world-application.webp" | "/images/mha-hero.jpg" | "/images/mha-hero.webp" | "/images/mha-lead-form.jpg" | "/images/mha-lead-form.webp" | "/images/mha-real-world-application.jpg" | "/images/mha-real-world-application.webp" | "/images/msn-hero.jpg" | "/images/msn-hero.webp" | "/images/msn-lead-form.jpg" | "/images/msn-lead-form.webp" | "/images/msn-real-world-application.jpg" | "/images/msn-real-world-application.webp" | "/images/msot-hero.jpg" | "/images/msot-hero.webp" | "/images/msot-lead-form.jpg" | "/images/msot-lead-form.webp" | "/images/msot-real-world-application.jpg" | "/images/msot-real-world-application.webp" | "/images/msrc-hero.jpg" | "/images/msrc-hero.webp" | "/images/msrc-lead-form.jpg" | "/images/msrc-lead-form.webp" | "/images/msrc-real-world-application.jpg" | "/images/msrc-real-world-application.webp" | "/images/neon-sign.png" | "/images/new-logo.png" | "/images/program-clocktower.jpg" | "/images/program-clocktower.webp" | "/images/program-community.jpg" | "/images/program-community.webp" | "/images/program-form-photo.jpg" | "/images/program-form-photo.webp" | "/images/program-lead.jpg" | "/images/program-lead.webp" | "/images/ram-head.png" | "/images/red-blur.png" | "/images/youtube.png" | "/robots.txt" | "/styles.css" | string & {};
	}
}