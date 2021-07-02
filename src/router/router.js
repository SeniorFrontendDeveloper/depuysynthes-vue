import { Auth } from "@/api/httpClient.js";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', redirect: { name: 'dashboard' } },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/LoginView.vue"),
    meta: {
      layout: "layout-default",
      title: "Login",
      isPublic: true
    },
  },
  {
    path: "/new-password",
    name: "newPassword",
    component: () => import("@/views/auth/NewPasswordView.vue"),
    meta: {
      layout: "layout-default",
      title: "New Password",
      isPublic: true
    },
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: () => import("@/views/auth/ForgotPasswordView.vue"),
    meta: {
      layout: "layout-default",
      title: "Reset Password",
      isPublic: true
    },
  },
  {
    path: "/reset-password",
    name: "resetPassword",
    component: () => import("@/views/auth/ResetPasswordView.vue"),
    meta: {
      layout: "layout-default",
      title: "Reset Password",
      isPublic: true
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/home/DashboardView.vue"),
    meta: {
      title: "Dashboard",
    },
  },
  {
    // step 1
    path: "/new-rfp",
    name: "new-rfp",
    component: () => import("@/views/newRfp/NewRfpView.vue"),
    meta: {
      title: "Create Presentation",
    },
  },
  {
    // step 1 to 6
    path: "/update-rfp/:presentationId/:step",
    name: "update-rfp",
    component: () => import("@/views/newRfp/NewRfpView.vue"),
    meta: {
      title: "Presentation Details",
    },
  },
  {
    path: "/my-rfps",
    name: "my-rfps",
    component: () => import("@/views/MyRfpsView.vue"),
    meta: {
      title: "My RFPs",
    },
  },
  {
    path: "/published",
    name: "published",
    component: () => import("@/views/PublishedLinksView.vue"),
    meta: {
      title: "Published Links",
    },
  },
  {
    path: "/builder/:presentationId/:slideId",
    name: "builder",
    component: () => import("@/views/builder/builderView.vue"),
    meta: {
      title(to) {
        return `Builder | ${to.params.slideId || ''}`
      },
    },
  },
  {
    path: "/create-link/:presentationId",
    name: "create-link",
    component: () => import("@/views/newRfp/CreateLinkView.vue"),
    meta: {
      title: "Create Link",
    },
  },
  {
    path: "/update-link/:presentationId/:linkId",
    name: "update-link",
    component: () => import("@/views/newRfp/CreateLinkView.vue"),
    meta: {
      title: "Update Link",
    },
  },
  {
    path: "/templates",
    name: "templates",
    component: () => import("@/views/home/DashboardView.vue"),
  },
  {
    path: "/shared-with-me",
    name: "shared-with-me",
    component: () => import("@/views/home/DashboardView.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    component: () => import("@/views/home/DashboardView.vue"),
  },
  {
    path: "/settings/profile",
    name: "settings-profile",
    component: () => import("@/views/setting/EmailBody.vue"),
    meta: {
      title: "Settings",
    },
  },
  {
    path: "/settings/email-body",
    name: "settings-email-body",
    component: () => import("@/views/setting/EmailBody.vue"),
    meta: {
      title: "Settings",
    },
  },
  {
    path: "/settings/custom-slides",
    name: "settings-custom-slides",
    component: () => import("@/views/setting/EmailBody.vue"),
    meta: {
      title: "Settings",
    },
  },
  {
    path: "/settings/change-password",
    name: "settings-change-password",
    component: () => import("@/views/setting/EmailBody.vue"),
    meta: {
      title: "Settings",
    },
  },
  {
    path: "/support",
    name: "support",
    component: () => import("@/views/home/DashboardView.vue"),
  },
  {
    path: "/view/29107879HTYI89",
    name: "clientLogin",
    component: () => import("@/views/client/ClientLoginView.vue"),
    meta: {
      layout: "layout-default",
      title: "Welcome",
    },
  },
  {
    path: "/preface",
    name: "preface",
    component: () => import("@/views/PrefaceView.vue"),
    meta: {
      layout: "layout-default",
    },
  },
  {
    path: "/slideOverview/:presentationId/:slideId",
    name: "slideOverview",
    component: () => import("@/views/slides/slideOverview.vue"),
    meta: {
      layout: "layout-default",
      title: "slide overview"
    },
  },
  {
    path: "/slide/:presentationId",
    name: "slide",
    component: () => import("@/views/slides/PresentationView.vue"),
    meta: {
      layout: "layout-default",
      title(to) {
        return `Slide ${to.hash?.slice(2) || ''}`
      },
    },
  },
  {
    path: "/slide/:presentationId/pdf",
    name: "slide-pdf",
    component: () => import("@/views/slides/PresentationViewPDF.vue"),
    meta: {
      layout: "layout-default",
      title: "Slide Print PDF",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

async function canUserAccess(to) {
  if(to.meta.isPublic) return true;
  try {
    const resp = await Auth.currentAuthenticatedUser();
    if(resp) return true;
  } catch (error) {
    return false
  }

  return false;
}

router.beforeEach(async (to) => {
  // canUserAccess() returns `true` or `false`
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
});

router.afterEach((to) => {
  const { title: viewTitle } = to.meta

  let fullTitle
  if (viewTitle) {
    fullTitle = typeof viewTitle === 'function'
      ? viewTitle(to)
      : viewTitle
  }

  document.title = fullTitle ? `DePuy Synthes | ${fullTitle}` : "DePuy Synthes"
})

export default router;
