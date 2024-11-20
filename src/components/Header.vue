<template>
    <div id="header">
        <div class="links">
            <router-link to="/home">
                <p class="options">Home</p>
            </router-link>

            <router-link to="/about-me">
                <p class="options">About me</p>
            </router-link>

            <router-link to="/experiences">
                <p class="options">Experiences</p>
            </router-link>

            <router-link to="/curriculum">
                <p class="options">Curriculum</p>
            </router-link>

            <div id="social-media">
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