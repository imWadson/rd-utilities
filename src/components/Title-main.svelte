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

<div class="bg-gradient-to-b from-green-50 to-green-100">
  <section class="py-10 sm:py-16 lg:py-24">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                  <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Juntos, aprimoramos a rede do amanhã!
                      <div class="relative inline-flex">
                          <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-teal-500"></span>
                          <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Contribua.</h1>
                      </div>
                  </h1>

                  <p class="mt-8 text-base text-black sm:text-xl">O RD Utilities é uma comunidade de projetistas de redes que valoriza sua opinião. Compartilhe suas sugestões e faça parte da melhoria constante do nosso site, simplificando o trabalho dos profissionais da área.

                  <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                      <a href="#contact" on:click={handleAnchorClick} title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-teal-500 hover:bg-teal-600 focus:bg-teal-500" role="button"> Enviar idéia </a>

                      <a href="/" title="" class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                          <svg class="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke=gray>
                              <path fill="#0D9488" stroke="#0D9488" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Introdução ao projeto
                      </a>
                  </div>
              </div>

              <div>
                  <img class="w-full" src="mascote-rd.png" alt="" />
              </div>
          </div>
      </div>
  </section>
</div>
