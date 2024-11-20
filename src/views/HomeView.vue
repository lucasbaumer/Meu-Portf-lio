<template>
    <div id="container-home">
    
        <div id="intro-text">
        <h1>Lucas Andreas Baumer</h1>
        <h4>
            Sou um  desenvolvedor apaixonado por criar soluções eficientes e 
            inovadoras. Neste espaço, você encontrará alguns dos meus projetos 
            e experiências profissionais.
        </h4>
        <h4 class="sub-text">
            Fique à vontade para explorar e, se quiser trocar ideias, entre em contato!
        </h4>
        </div>

        <div id="image">
            <img :src="MyImage" alt="My-Image">
        </div>
    </div>
</template>

<script setup>
import '@/assets/styles/home-view.css'
import MyImageSrc from '@/assets/images/myImage.jpg'
import { ref } from 'vue';

const MyImage = ref(MyImageSrc)

</script>