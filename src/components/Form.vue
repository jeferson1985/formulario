<script>
import DropDown from "../components/DropDown.vue";

export default {
  name: "Form",
  components: { DropDown },
  data: () => ({
    isHidden: true,
  }),
  methods: {
    toggleVisibility() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>

<template>
  <div class="relative">
    <img
      class="w-full h-screen bg-no-repeat"
      src="../assets/respingo-colorido-abstrato-3d-background-generativo-ai-background.jpg"
      alt="background"
    />
    <section
      class="absolute top-16 left-56"
      :class="{ hidden: isHidden, flex: !isHidden }"
    >
      <DropDown />
    </section>
    <button
      @click="toggleVisibility"
      id="button"
      class="absolute top-4 left-4 text-white font-semibold px-4 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 text-white bg-yellow-400 rounded-md"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <div
      class="content-form w-4/5 md:w-1/2 h-auto bg-transparent border-2 border-white rounded-3xl shadow-lg shadow-yellow-400"
    >
      <div class="flex h-full">
        <div class="w-6/12 bg-transparent hidden md:flex justify-center items-center">
          <h1 class="text-gray-300 text-center text-4xl p-4 font-bold">
            <span class="flex text-2xl lg:text-4xl text-yellow-400">Informe</span> seus dados por
            gentileza!
          </h1>
        </div>
        <form class="w-full md:w-6/12 backdrop-blur-xl bg-white/30 rounded-3xl" action="">
          <h1 class="text-white text-lg md:text-2xl text-center py-4">
            Preencha os campos!
          </h1>
          <div class="flex flex-col space-y-2 w-full mb-6 px-6">
            <label class="flex text-lg md:text-2xl text-white font-smibold" for="username"
              >Nome Completo</label
            >
            <div
              class="flex items-center border-b-2 border-gray-300 focus-within:border-gray-600"
            >
              <input
                v-model="nome"
                class="peer w-full bg-transparent focus:outline-none text-md md:text-xl py-1 text-gray-900"
                placeholder="Nome"
                type="text"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 sm:h-8 w-6 sm:w-8 text-gray-500 peer-focus:text-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col space-y-2 w-full mb-6 px-6">
            <label class="flex text-lg md:text-2xl text-white font-smibold" for="username"
              >Email</label
            >
            <div
              class="flex items-center border-b-2 border-gray-300 focus-within:border-gray-600"
            >
              <input
                v-model="email"
                class="peer w-full bg-transparent focus:outline-none text-md md:text-xl py-1 text-gray-900"
                placeholder="Email"
                type="text"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col space-y-2 w-full mb-6 px-6">
            <label class="flex text-lg md:text-2xl text-white font-smibold" for="username"
              >Telefone</label
            >
            <div
              class="flex items-center border-b-2 border-gray-300 focus-within:border-gray-600"
            >
              <input
                v-model="telefone"
                class="peer w-full bg-transparent focus:outline-none text-md md:text-xl py-1 text-gray-900"
                placeholder="Telefone"
                type="text"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-center py-4">
            <button
              class="w-40 md:w-64 bg-yellow-400 shadow-lg shadow-yellow-600 text-white text-xl py-2 rounded-lg"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    <footer>
        <div class="md:flex justify-around bg-gray-800 h-auto w-full py-1 px-4 md:px-0">
            <div class="text-gray-500">
                <p class="text-white text-xl font-bold">Nosso telefone</p>
                <div class="flex flex-col">
                    <a class="font-light" href="5130449292">(51) 30449292</a>
                    <a class="font-light" href="51999333095">(51) 9 99333095</a>
                </div>
            </div>
            <div class="text-gray-500">
                <p class="text-white text-xl font-bold">Nosso Email</p>
                <a href="automasafety@automasafety.com.br">automasafety@automasafety.com.br</a>
            </div>
            <div class="text-gray-500">
                <p class="text-white text-xl font-bold">Nossos Horários</p>
                <div class="flex flex-col">
                    <label for="">Segunda a Quinta, das 08h00 às 18h</label>
                    <label for="">Sexta, das 08h00 às 17h.</label>
                </div>
            </div>

        </div>
    </footer>
  </div>
</template>

<style scoped>
.content-form {
  position: absolute;
  right: 25%;
  top: 10%;
}

@media(max-width: 768px) {
  .content-form {
    position: absolute;
    right: 10%;
  }
}
</style>
