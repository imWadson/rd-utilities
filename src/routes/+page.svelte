<script>
    import About from "../components/Rules.svelte";
    import Contact from "../components/Contact.svelte";
    import Footer from "../components/Footer.svelte";
    import Contribution from "../components/Contribution.svelte";

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'edge'
};    
</script>


<About />
<Contribution />
<Contact />
<Footer />
<slot />