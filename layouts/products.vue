<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/123">Продукт 123</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>

  <slot />
</template>