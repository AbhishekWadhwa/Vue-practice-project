<template>
  <button class="btn btn-success" @click="$emit('click')" :disabled="disabled">
    <slot></slot>
  </button>
</template>