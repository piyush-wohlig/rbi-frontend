import { createWebHistory, createRouter } from "vue-router";
import authRoute from "./components/auth/authRoute";


import {
  runEverytimeAfterRouting,
  runEverytimeBeforeRouting,
} from "./common/guards/authGuard";
const routes = [
  {
    path: "/",
    redirect: "/login",
    children: [
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("./components/errorPages/pageNotFound.vue"),
        meta: { requiresAuth: false, title: "Page Not Found" },
      },
    ],
  },
  ...authRoute,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guards
router.beforeEach(runEverytimeBeforeRouting);
router.afterEach(runEverytimeAfterRouting);

export default router;
