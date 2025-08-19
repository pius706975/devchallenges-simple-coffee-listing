<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
    <div class="space-y-3">
        <Skeleton class="w-full h-40 rounded-lg" />
        <div class="flex justify-between items-center">
            <Skeleton class="h-4 w-24 rounded" />
            <Skeleton class="h-4 w-12 rounded" />
        </div>
        <Skeleton class="h-3 w-32 rounded" />
    </div>
</template>
