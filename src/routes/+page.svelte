<script lang="ts">
	import CodeSnippetCard from '../CodeSnippetCard.svelte';
	import { snippetStore } from '../SnippetStore';

	let formData: CodeSnippetInput = {
		title: '',
		language: 'HTML',
		code: ''
	};

	//  createSnippet(input : CodeSnippetInput)
	snippetStore.set([
		{
			title: 'Ornel code',
			language: 'html',
			code: `<div>this is a div</div>`,
			favorite: false
		},
		{
			title: 'Jaymes code',
			language: 'css',
			code: `<div>this is a css</div>`,
			favorite: true
		},
		{
			title: 'Jack code',
			language: 'javascript',
			code: `	import { CodeBlock } from '@skeletonlabs/skeleton';`,
			favorite: false
		},
		{
			title: 'Fiona code',
			language: 'html',
			code: `<div>this is a div</div>`,
			favorite: false
		}
	]);

	// SnippetStore => local writable that allows us to store code snippets
	// create / delete snippets
	// favorite snippets
	// +page.ts to initially load in some example snippets (mocking a database request)
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px] px-2">
		<h3 class="text-center py-6">Create a code snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input
					type="text"
					class="input"
					placeholder="Enter title here..."
					bind:value={formData.title}
				/>
			</label>

			<label class="label">
				<span>Programming Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="ts">Typescript</option>
				</select>
			</label>

			<label class="label">
				<span>Code Snippet</span>
				<textarea
					rows="4"
					class="select"
					placeholder="Enter your snippet code here"
					bind:value={formData.code}
				/>
			</label>
		</div>

		<!-- Snippet Result -->
		<div class="text-center py-6">
			<h2 class="text-2xl">My Code Snippets</h2>
		</div>
		<!-- the $ give and listen to the store -->
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard snippet={snippet} index={index} />
		{/each}
	</div>
</div>
