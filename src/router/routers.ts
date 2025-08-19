import Layout from "@/layouts/Layout.vue";
import { createRouter, createWebHistory } from "vue-router";
import page from "@/pages/index..vue";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                component: page,
                meta: { title: "Simple Coffee Listing" },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    const defaultTitle = "Manajemen Koperasi OAK";
    document.title = (to.meta?.title as string) || defaultTitle;
});

export default router;
