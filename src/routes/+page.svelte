<script>
    import About from "../components/Rules.svelte";
    import Contact from "../components/Contact.svelte";
    import Footer from "../components/Footer.svelte";

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'edge'
};    
</script>


<About />
<Contact />
<Footer />
<slot />