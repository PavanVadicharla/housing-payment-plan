<template>
  <header class="header">
    <div class="logo">
      <img src="../../assets/logo.png" class="logo" alt="Housing Payment Plan" />
    </div>
    <div class="menu-toggle" @click="toggleMenu">
      <span v-if="!isOpen">Student Services Menu ☰</span>
      <span v-else>Student Services Menu ❌</span>
      
    </div>

    <nav v-if="isOpen" class="dropdown-nav">
      <router-link to="/" @click="closeMenu">Application</router-link>
      <router-link to="/promisory-signing" @click="closeMenu">Promissory Signing</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)
const closeMenu = () => (isOpen.value = false)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: white;
  padding: 1rem;
  position: relative;
}

.logo {
  width: 20%;
  font-weight: bold;
  font-size: 1.2rem;
  height: 20%;
}

.menu-toggle {
  font-size: 1.5rem;
  cursor: pointer;
}

.dropdown-nav {
  position: absolute;
  top: 100%;
  right: 1rem;
  background: white;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 5px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-nav a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.dropdown-nav a:hover {
  color: #007bff;
}
</style>
