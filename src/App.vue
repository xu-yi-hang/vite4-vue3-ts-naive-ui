<template>
  <n-config-provider abstract>
    <router-view v-slot="{ Component }">
      <Transition>
        <component :is="Component" />
      </Transition>
    </router-view>
  </n-config-provider>
</template>