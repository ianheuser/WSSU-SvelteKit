
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
		Asset(): "/.DS_Store" | "/images/.DS_Store" | "/images/centered-logo.png" | "/images/da-hero.jpg" | "/images/da-highlights.jpg" | "/images/da-lead-form.jpg" | "/images/da-real-world-application.jpg" | "/images/dean-boykin.jpg" | "/images/dnp-hero.jpg" | "/images/dnp-lead-form.jpg" | "/images/dnp-real-world-application.jpg" | "/images/dpt-hero.jpg" | "/images/dpt-lead-form.jpg" | "/images/dpt-real-world-application.jpg" | "/images/facebook.png" | "/images/fnp-hero.jpg" | "/images/fnp-lead-form.jpg" | "/images/fnp-real-world-application.jpg" | "/images/innovators.jpg" | "/images/instagram.png" | "/images/landing-campus-left.jpg" | "/images/landing-campus-right.jpg" | "/images/landing-form-photo.jpg" | "/images/landing-hero.gif" | "/images/linked-in.png" | "/images/linkedin.png" | "/images/logo-main.svg" | "/images/logo-sub.svg" | "/images/logo.png" | "/images/mat-hero.jpg" | "/images/mat-lead-form.jpg" | "/images/mat-real-world-application.jpg" | "/images/mba-hero.jpg" | "/images/mba-lead-form.jpg" | "/images/mba-real-world-application.jpg" | "/images/mcst-hero.jpg" | "/images/mcst-lead-form.jpg" | "/images/mcst-real-world-application.jpg" | "/images/mha-hero.jpg" | "/images/mha-lead-form.jpg" | "/images/mha-real-world-application.jpg" | "/images/msn-hero.jpg" | "/images/msn-lead-form.jpg" | "/images/msn-real-world-application.jpg" | "/images/msot_hero.jpg" | "/images/msot_lead_form.jpg" | "/images/msot_real_world_application.jpg" | "/images/msrc-hero.jpg" | "/images/msrc-real-world-application.jpg" | "/images/msrc_lead_form.jpg" | "/images/neon-sign.png" | "/images/new-logo.png" | "/images/program-clocktower.jpg" | "/images/program-community.jpg" | "/images/program-form-photo.jpg" | "/images/program-lead.jpg" | "/images/ram-head.png" | "/images/red-blur.png" | "/images/youtube.png" | "/robots.txt" | "/styles.css" | string & {};
	}
}