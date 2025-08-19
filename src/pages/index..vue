<script setup lang="ts">
import ThemeChanger from '@/components/layouts/ThemeChanger.vue';
import CoffeeList from './components/CoffeeList.vue';
import { background } from '@/assets';
</script>

<template>
    <main class="min-h-screen bg-no-repeat bg-fixed bg-top" :style="{
        backgroundImage: `url(${background})`
    }">
        <div class="px-4 sm:px-8 lg:px-20 py-20 sm:py-20 lg:py-40">
            <ThemeChanger />

            <CoffeeList />
        </div>
    </main>
</template>
