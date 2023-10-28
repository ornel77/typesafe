<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	// import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	// import { storePopup } from '@skeletonlabs/skeleton';
	// storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { AppBar, AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js'
	import 'highlight.js/styles/github-dark.css'
	storeHighlightJs.set(hljs)
</script>

<!-- AppShell contain the entire application -->
<!-- AppBar is a navbar for exemple -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h3 class="text-left">CodeShare</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
