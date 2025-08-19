<script setup lang="ts">
import { computed } from 'vue'
import star from '@/assets/star.svg'
import starFill from '@/assets/star_fill.svg'

interface Props {
    title: string
    image: string
    price: string
    rating: number | null
    votes: number
    tag?: string
    soldOut?: boolean
}

const props = defineProps<Props>()

const numericRating = computed(() => Number(props.rating) || 0)
</script>

<template>
    <div class="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-neutral-900">
        <span v-if="tag" class="absolute top-2 left-2 bg-yellow-200 text-yellow-900 text-xs px-2 py-1 rounded">
            {{ tag }}
        </span>

        <div v-if="soldOut" class="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
            <span class="text-white font-bold text-lg">Sold Out</span>
        </div>

        <img :src="image" :alt="title" class="w-full h-48 sm:h-56 md:h-64 object-cover" />

        <div class="p-3 sm:p-4">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-semibold text-base sm:text-lg truncate">
                    {{ title }}
                </h3>
                <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm sm:text-base">
                    {{ price }}
                </span>
            </div>
            <div class="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 gap-1">
                <img :src="numericRating > 0 ? starFill : star" alt="rating" class="w-4 h-4" />
                <span>{{ numericRating.toFixed(2) }} ({{ votes }} votes)</span>
            </div>
        </div>
    </div>
</template>
