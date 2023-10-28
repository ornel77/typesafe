import type { PageLoad } from "./$types";

// when page load we want to get new data
export const load =  (() => {
    // You can do a graphql client
    // get data to any source
    // manually change this object here whenever you want
    return {
        snippets: [
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
        ]
    }
    
}) satisfies PageLoad // PageLoad is going to pass the load data to PageDAta in our frontend