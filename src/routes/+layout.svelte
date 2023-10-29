<script>
  /** @type {import('@sveltejs/adapter-vercel').Config} */
    import "../app.postcss";
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import TitleMain from "../components/Title-main.svelte";

export const config = {
	runtime: 'nodejs18.x'
};
</script>



<Header />
<TitleMain />
<Main />
<slot />
