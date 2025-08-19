<script setup lang="ts">
import { getCoffeeList } from '@/services/list'
import { computed, onMounted, ref } from 'vue'
import CoffeeCard from '@/components/shared/CoffeeCard.vue'
import { Button } from '@/components/ui/button'
import Skeleton from '@/components/shared/Skeleton.vue'

const data = ref<any[]>([])
const loading = ref(true)
const filter = ref<'all' | 'available'>('all')

onMounted(async () => {
    try {
        const res = await getCoffeeList()
        data.value = res
    } catch (err) {
        console.error('Error fetching coffee list:', err)
    } finally {
        loading.value = false
    }
})

const filteredData = computed(() => {
    if (filter.value === 'available') {
        return data.value.filter((item) => item.available)
    }
    return data.value
})
</script>

<template>
    <section class="p-4 sm:p-6 lg:p-10 bg-[#E0E0E0] dark:bg-[#1C1D1F] rounded-lg">
        <div class="mb-10 text-center">
            <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-0">
                <div class="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none dark:block hidden">
                    <svg width="200" height="120" viewBox="0 0 257 153" fill="none">
                        <path
                            d="M2 71.8885C3.45531 57.3142 23.696 41.7169 33.6244 33.2805C66.0308 5.74397 114.381 -4.23546 155.905 5.8326C246.941 27.9052 154.103 161.746 80.308 136.587C52.5484 127.123 76.0283 89.2122 86.9341 76.2621C113.937 44.1978 164.916 27.0297 204.998 44.5915C239.889 59.8782 266.993 108.858 249.574 146.239C247.754 150.145 240.823 152.29 236.924 150.16C231.733 147.325 239.159 139.456 240.538 137.04"
                            stroke="#302522" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </div>

                <div class="relative z-10">
                    <h2 class="text-gray-700 dark:text-[#FEF7ED] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
                        Our Collection
                    </h2>
                    <p class="text-gray-500 dark:text-[#60656A] max-w-2xl mx-auto text-lg sm:text-xl">
                        Introducing our Coffee Collection, a selection of unique coffees from
                        different roast types and origins, expertly roasted in small batches and
                        shipped fresh weekly
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center gap-4 mb-8">
            <Button :variant="filter === 'all' ? 'secondary' : 'ghost'" @click="filter = 'all'">
                All Products
            </Button>
            <Button :variant="filter === 'available' ? 'secondary' : 'ghost'" @click="filter = 'available'">
                Available Now
            </Button>
        </div>

        <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="n in 6" :key="n" class="space-y-3">
                <Skeleton />
            </div>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CoffeeCard v-for="item in filteredData" :key="item.id" :title="item.name" :image="item.image"
                :price="item.price" :rating="item.rating ? Number(item.rating) : 0" :votes="+item.votes"
                :tag="item.popular ? 'Popular' : ''" :soldOut="!item.available" />
        </div>
    </section>
</template>
