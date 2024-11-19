<template>
    <div id="header">
        <div class="links">
            <router-link to="/home">
                <p>Home</p>
            </router-link>

            <router-link to="">
                <p>About me</p>
            </router-link>

            <router-link to="">
                <p>Experiences</p>
            </router-link>

            <router-link to="">
                <p>Curriculum</p>
            </router-link>

            <div id="contacts">
                <a href="https://www.linkedin.com/in/lucas-andreas-baumer-8563b8273/" target="_blank">
                <img :src="LinkedinIcon" alt="Linkedin-Icon">
                </a>

                <a href="https://github.com/lucasbaumer"  target="_blank">
                <img :src="GithubIcon" alt="Github-Icon">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/styles/header.css"
import { ref } from 'vue';
import LinkedinIconSrc from '@/assets/images/linkedin.png'
import GithubIconSrc from '@/assets/images/github.png'

const LinkedinIcon = ref(LinkedinIconSrc)
const GithubIcon = ref(GithubIconSrc)


</script>