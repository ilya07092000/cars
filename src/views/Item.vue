<template>
    <p>{{ this.$route.params.id }}</p>
</template>

<script>
export default {
    props: ['car'],
}
</script>