<template>
    <section class="absolute right-px" :class="{'hidden' : isHidden, 'flex' : !isHidden }"> 
        <div class="flex flex-col gap-4 w-48 h-48 border-2 backdrop-blur-sm bg-white/30 rounded-xl z-50">
          <div class="flex items-center gap-2 font-semibold border-1 border-gray-200 px-6 py-2 text-white cursor-pointer">
            <img class="w-8 rounded-md" src="../assets/site.png" alt="">
            <a class="mt-2 text-yellow-500" href="https://www.automasafety.com.br">Site</a>
          </div>
          <hr>
          <div class="flex items-center gap-2 font-semibold border-1 border-gray-200 px-6 text-white cursor-pointer">
            <img class="w-8 rounded-md" src="../assets/linkedin.png" alt="">
            <a class="mt-2 text-blue-500 text-bold" href="https://www.linkedin.com/company/automasafety/">LinkeIn</a>
          </div>
          <hr>
          <div class="flex items-center gap-2 font-semibold border-1 border-gray-200 px-6 text-white cursor-pointer text-transparent text-lg bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <img class="w-8 rounded-lg" src="../assets/instagram.png" alt="">
            <a class="mt-2" href="https://www.instagram.com/automasafety/">Instagram</a>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'DropDown',
}
</script>