import { create } from "zustand"

interface UiState {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  servicesMenuOpen: boolean
  setServicesMenuOpen: (open: boolean) => void
  openServicesMenu: () => void
  scheduleCloseServicesMenu: () => void
  projectsMenuOpen: boolean
  setProjectsMenuOpen: (open: boolean) => void
  openProjectsMenu: () => void
  scheduleCloseProjectsMenu: () => void
  blogMenuOpen: boolean
  setBlogMenuOpen: (open: boolean) => void
  openBlogMenu: () => void
  scheduleCloseBlogMenu: () => void
}

let servicesMenuCloseTimer: ReturnType<typeof setTimeout> | undefined
let projectsMenuCloseTimer: ReturnType<typeof setTimeout> | undefined
let blogMenuCloseTimer: ReturnType<typeof setTimeout> | undefined

function clearMegaMenuTimers() {
  if (servicesMenuCloseTimer) {
    clearTimeout(servicesMenuCloseTimer)
    servicesMenuCloseTimer = undefined
  }
  if (projectsMenuCloseTimer) {
    clearTimeout(projectsMenuCloseTimer)
    projectsMenuCloseTimer = undefined
  }
  if (blogMenuCloseTimer) {
    clearTimeout(blogMenuCloseTimer)
    blogMenuCloseTimer = undefined
  }
}

export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  servicesMenuOpen: false,
  setServicesMenuOpen: (open) =>
    set((state) => ({
      servicesMenuOpen: open,
      projectsMenuOpen: open ? false : state.projectsMenuOpen,
      blogMenuOpen: open ? false : state.blogMenuOpen,
    })),
  openServicesMenu: () => {
    clearMegaMenuTimers()
    set({ servicesMenuOpen: true, projectsMenuOpen: false, blogMenuOpen: false })
  },
  scheduleCloseServicesMenu: () => {
    if (servicesMenuCloseTimer) clearTimeout(servicesMenuCloseTimer)
    servicesMenuCloseTimer = setTimeout(() => {
      set({ servicesMenuOpen: false })
      servicesMenuCloseTimer = undefined
    }, 250)
  },
  projectsMenuOpen: false,
  setProjectsMenuOpen: (open) =>
    set((state) => ({
      projectsMenuOpen: open,
      servicesMenuOpen: open ? false : state.servicesMenuOpen,
      blogMenuOpen: open ? false : state.blogMenuOpen,
    })),
  openProjectsMenu: () => {
    clearMegaMenuTimers()
    set({ projectsMenuOpen: true, servicesMenuOpen: false, blogMenuOpen: false })
  },
  scheduleCloseProjectsMenu: () => {
    if (projectsMenuCloseTimer) clearTimeout(projectsMenuCloseTimer)
    projectsMenuCloseTimer = setTimeout(() => {
      set({ projectsMenuOpen: false })
      projectsMenuCloseTimer = undefined
    }, 250)
  },
  blogMenuOpen: false,
  setBlogMenuOpen: (open) =>
    set((state) => ({
      blogMenuOpen: open,
      servicesMenuOpen: open ? false : state.servicesMenuOpen,
      projectsMenuOpen: open ? false : state.projectsMenuOpen,
    })),
  openBlogMenu: () => {
    clearMegaMenuTimers()
    set({ blogMenuOpen: true, servicesMenuOpen: false, projectsMenuOpen: false })
  },
  scheduleCloseBlogMenu: () => {
    if (blogMenuCloseTimer) clearTimeout(blogMenuCloseTimer)
    blogMenuCloseTimer = setTimeout(() => {
      set({ blogMenuOpen: false })
      blogMenuCloseTimer = undefined
    }, 250)
  },
}))
