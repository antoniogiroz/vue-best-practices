<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import styles from './Layout.module.css'
import Logo from '@/assets/logo.svg?component'
import ErrorBoundary from '@/shared/components/ErrorBoundary.vue'
</script>

<template>
  <header :class="styles.header">
    <section :class="styles.header__container">
      <div :class="styles.brand__container">
        <Logo />
        <h1 :class="styles.app__brand">
          <RouterLink to="/">
            DevDash_
          </RouterLink>
        </h1>
      </div>
      <RouterLink to="/settings">
        <span>⚙️</span>
      </RouterLink>
    </section>
  </header>

  <ErrorBoundary>
    <RouterView />
  </ErrorBoundary>
</template>
