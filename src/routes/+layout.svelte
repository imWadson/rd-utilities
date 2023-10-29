<script>
  import "../app.postcss";
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import TitleMain from "../components/Title-main.svelte";

    export const prerender = true;
</script>



<Header />
<TitleMain />
<Main />
<slot />
