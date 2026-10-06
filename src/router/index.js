// Gene - Oct 06, 2026: Vue Router configuration for multi-page navigation across Caluya LGU portal

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RescueView from '../views/RescueView.vue';
import HealthView from '../views/HealthView.vue';
import PublicServicesView from '../views/PublicServicesView.vue';
import ServicesView from '../views/ServicesView.vue';
import MobileAppView from '../views/MobileAppView.vue';
import IslandsView from '../views/IslandsView.vue';
import TourismView from '../views/TourismView.vue';
import TransparencyView from '../views/TransparencyView.vue';
import LeadershipView from '../views/LeadershipView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home • Municipality of Caluya, Antique' }
  },
  {
    path: '/rescue',
    name: 'rescue',
    component: RescueView,
    meta: { title: '24/7 Rescue & MDRRMO • Municipality of Caluya' }
  },
  {
    path: '/health',
    name: 'health',
    component: HealthView,
    meta: { title: 'Health Services & RHU • Municipality of Caluya' }
  },
  {
    path: '/public-services',
    name: 'public-services',
    component: PublicServicesView,
    meta: { title: 'Public Assistance & MSWDO • Municipality of Caluya' }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Citizen e-Services • Municipality of Caluya' }
  },
  {
    path: '/mobile-app',
    name: 'mobile-app',
    component: MobileAppView,
    meta: { title: 'Caluya e-Citizen Mobile App • Municipality of Caluya' }
  },
  {
    path: '/islands',
    name: 'islands',
    component: IslandsView,
    meta: { title: '18 Island Barangays • Municipality of Caluya' }
  },
  {
    path: '/tourism',
    name: 'tourism',
    component: TourismView,
    meta: { title: 'Tourism & Tatusan Festival • Municipality of Caluya' }
  },
  {
    path: '/transparency',
    name: 'transparency',
    component: TransparencyView,
    meta: { title: 'Full Disclosure & Transparency • Municipality of Caluya' }
  },
  {
    path: '/leadership',
    name: 'leadership',
    component: LeadershipView,
    meta: { title: 'LGU Leadership & Council • Municipality of Caluya' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
