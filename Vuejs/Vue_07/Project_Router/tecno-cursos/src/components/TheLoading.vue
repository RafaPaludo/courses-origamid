<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
    name: 'TheLoading'
}
</script>

<style scoped>
.loading span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #4b8;
    margin: 4px;
    animation: dots .6s cubic-bezier(0.6, 0.04, 0.98, 0.335) infinite alternate;
}

.loading span:nth-child(1) {
    animation-delay: .1s;
}

.loading span:nth-child(2) {
    animation-delay: .2s;
}

.loading span:nth-child(3) {
    animation-delay: .3s;
}

.loading span:nth-child(4) {
    animation-delay: .4s;
}

@keyframes dots {
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, 30px, 0);
    }
}
</style>