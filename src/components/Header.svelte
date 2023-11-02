<script>
	function handleAnchorClick (event) {
		event.preventDefault();
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}
</script>



<nav class="flex items-center justify-between flex-wrap bg-[#38B2AC]  p-2 ">
    <div class="flex items-center flex-shrink-0 text-white  mr-6">
      <img src="Logo.png" alt="RD Utilities Logo">
    </div>
    <div class="pt-1  relative mx-auto text-white">
    <input class="border-0 border-b-2 border-gray-300 bg-[#38B2AC] h-10 px-10 pr-10 text-xs focus:outline-white placeholder:text-gray-300"
        type="search" name="search" placeholder="Fazer uma busca...">
      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg class="text-gray-100 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
          width="512px" height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="inline-block font-bold">
      <div class="text-sm lg:flex-grow">
        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Inicio
        </a>
        <a href="#contrib" on:click={handleAnchorClick} class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Contribuidores
        </a>
        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
          Sobre o projeto
        </a>
        <a href="#contact" on:click={handleAnchorClick} class="block mt-4 lg:inline-block lg:mt-0 text-teal-600  mr-4">
          <div class="bg-white rounded-md p-2">Contato</div>
        </a>
      </div>
    </div>
  </nav>