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
}

let servicesMenuCloseTimer: ReturnType<typeof setTimeout> | undefined
let projectsMenuCloseTimer: ReturnType<typeof setTimeout> | undefined

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
    })),
  openServicesMenu: () => {
    if (servicesMenuCloseTimer) {
      clearTimeout(servicesMenuCloseTimer)
      servicesMenuCloseTimer = undefined
    }
    if (projectsMenuCloseTimer) {
      clearTimeout(projectsMenuCloseTimer)
      projectsMenuCloseTimer = undefined
    }
    set({ servicesMenuOpen: true, projectsMenuOpen: false })
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
    })),
  openProjectsMenu: () => {
    if (projectsMenuCloseTimer) {
      clearTimeout(projectsMenuCloseTimer)
      projectsMenuCloseTimer = undefined
    }
    if (servicesMenuCloseTimer) {
      clearTimeout(servicesMenuCloseTimer)
      servicesMenuCloseTimer = undefined
    }
    set({ projectsMenuOpen: true, servicesMenuOpen: false })
  },
  scheduleCloseProjectsMenu: () => {
    if (projectsMenuCloseTimer) clearTimeout(projectsMenuCloseTimer)
    projectsMenuCloseTimer = setTimeout(() => {
      set({ projectsMenuOpen: false })
      projectsMenuCloseTimer = undefined
    }, 250)
  },
}))
