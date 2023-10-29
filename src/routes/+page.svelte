<script>
    import About from "../components/About.svelte";
    import Footer from "../components/Footer.svelte";

/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'edge'
};    
</script>




<About />
<Footer />
<slot />