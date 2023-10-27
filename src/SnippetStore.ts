// get is used to get the value of a store
import { writable, get } from 'svelte/store';
// snippet store
// code snippet has 4 properties :
// title, code, language, favorite
export const snippetStore = writable<CodeSnippet[]>([]); //[codesnip1, codesnip2, ...]

// add a snippet
export function addSnippet(input: CodeSnippetInput) {
	// give acces to the value of the snippet store
	let snippets = get(snippetStore); // $snippetStore => listen to changes to the value of snippetStore
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});
}

// delete snippet
export function deleteSnippet(index: number) {
    let snippets = get(snippetStore)
    snippets.splice(index, 1) // remove one item from index "index"
    snippetStore.update(() => {
        return snippets
    })
}

// toggleFavorite
export function toggleFavorite(index: number) {
    console.log("favorite")
    let snippets = get(snippetStore)
    snippetStore.update(() => {
        return snippets.map((snippet, snippetIndex) => {
            if(snippetIndex === index) {
                return {...snippet, favorite: !snippet.favorite}
            }
            return snippet 
        })
    })
}