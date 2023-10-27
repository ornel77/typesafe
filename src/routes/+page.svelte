<script lang="ts">
	import CodeSnippetCard from '../CodeSnippetCard.svelte';

	let formData: CodeSnippetInput = {
		title: '',
		language: 'HTML',
		code: ''
	};
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px] px-2">
		<h3 class="text-center py-6">Create a code snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label for="" class="label">
				<span>Snippet Title</span>
				<input type="text" class="input" placeholder="Enter title here..." />
			</label>

			<label for="" class="label">
				<span>Programming Language</span>
				<select name="" id="" class="select">
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="ts">Typescript</option>
				</select>
			</label>

			<label for="" class="label">
				<span>Code Snippet</span>
				<textarea rows="4" class="select" placeholder="Enter your snippet code here" />
			</label>
		</div>

		<!-- Snippet Result -->
		<div class="text-center py-6">
			<h2 class="text-2xl">My Code Snippets</h2>
		</div>
		<CodeSnippetCard />
	</div>
</div>
